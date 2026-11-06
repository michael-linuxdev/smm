// Service Worker: alles für die Offline-Nutzung vorhalten.
// Bei jeder Inhaltsänderung CACHE hochzählen, damit Geräte die neue Version laden.
const CACHE = 'smm-v0.4.0';
const ASSETS = ['./', 'index.html', 'app.css', 'app.js', 'data/kurs.js', 'manifest.webmanifest',
  'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-512.png',
  'fonts/Poppins-Medium.woff', 'fonts/Poppins-Bold.woff'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});
// Erst Netz (aktuell), sonst Cache – so kommen Updates sofort an und offline geht trotzdem alles.
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); return r; })
    .catch(() => caches.match(e.request, { ignoreSearch: true })));
});
