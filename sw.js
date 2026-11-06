// Service Worker: alles für die Offline-Nutzung vorhalten.
// Bei jeder Inhaltsänderung CACHE hochzählen, damit Geräte die neue Version laden.
const CACHE = 'smm-v0.10.0';
const ASSETS = ['./', 'index.html', 'app.css', 'app.js', 'data/kurs.js', 'data/fragen2.js', 'data/glossar.js', 'data/bilder.js', 'data/lektionen3.js', 'manifest.webmanifest',
  'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-512.png',
  'fonts/Poppins-Medium.woff', 'fonts/Poppins-Bold.woff'];
self.addEventListener('install', e => {
  // cache:'reload' umgeht den HTTP-Cache, damit wirklich die neue Version gespeichert wird
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS.map(u => new Request(u, { cache: 'reload' })))));
  // Erstbesuch: sofort aktiv. Update: wartet, bis der Nutzer „Jetzt laden“ tippt.
  if (!self.registration.active) self.skipWaiting();
});
self.addEventListener('message', e => { if (e.data?.type === 'SKIP_WAITING') self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});
// Erst Netz (max. 3 s), sonst Cache – Updates kommen schnell an, bei schwachem Netz startet die App trotzdem.
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith((async () => {
    const cached = caches.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request).then(r => {
      if (r.ok && r.type === 'basic') { const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); }
      return r;
    });
    const timeout = new Promise(res => setTimeout(res, 3000));
    try {
      const r = await Promise.race([net, timeout.then(() => cached)]);
      if (r && (r.ok || r.type === 'opaqueredirect')) return r;
      return (await cached) || r || (await net);
    } catch (_) {
      return (await cached) || (e.request.mode === 'navigate' ? caches.match('index.html') : Response.error());
    }
  })());
});
