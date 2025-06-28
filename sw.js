const CACHE_NAME = 'techlystb-cache-v1';
const URLS_TO_CACHE = [
  '/','/manifest.json',
  '/icon-192.png','/icon-512.png',
  '/offline.html'
];

self.addEventListener('install', e => e.waitUntil(
  caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
));

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() =>
      caches.match(e.request).then(r => r || caches.match('/offline.html'))
    )
  );
});
