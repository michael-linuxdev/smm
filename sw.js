// Service Worker: alles für die Offline-Nutzung vorhalten.
// Bei jeder Inhaltsänderung CACHE hochzählen, damit Geräte die neue Version laden.
const CACHE = 'smm-v0.14.1';
const ASSETS = ['./', 'index.html', 'app.css', 'app.js', 'data/kurs.js', 'data/fragen2.js', 'data/glossar.js', 'data/bilder.js', 'data/lektionen3.js', 'data/glossar2.js', 'data/grundwortschatz.js', 'data/begriffsfragen.js', 'data/mehrfach.js', 'data/lektionen4.js', 'data/vorlesungen.js', 'data/gestrichen.js', 'manifest.webmanifest',
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
// App-Dateien kommen immer aus dem Cache-Stand DIESER Version – so mischen sich nie alte und neue Dateien.
// Neue Versionen kommen nur über einen neuen Service Worker (CACHE hochzählen) und „Jetzt aktualisieren“.
const scope = new URL(self.registration.scope).pathname;
const ASSET_PATHS = new Set(ASSETS.map(a => new URL(a, self.registration.scope).pathname));
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  const path = url.pathname === scope ? scope : url.pathname;
  if (ASSET_PATHS.has(path) || e.request.mode === 'navigate') {
    e.respondWith(caches.open(CACHE).then(c => c.match(e.request.mode === 'navigate' ? 'index.html' : e.request, { ignoreSearch: true }))
      .then(r => r || fetch(e.request)).catch(() => fetch(e.request)));
    return;
  }
  // Alles andere (z. B. Icons, die nicht vorgeladen sind): Netz, sonst Cache
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request, { ignoreSearch: true })));
});
