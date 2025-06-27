const CACHE_NAME = 'techlystb-cache-v2';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/offline.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request)
      .then(response => response || caches.match('/offline.html')))
  );
});
