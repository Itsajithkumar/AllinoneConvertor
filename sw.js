self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('imgverse-cache-v1').then(cache => cache.addAll([
      '/',
      '/index.html',
      '/manifest.json',
      '/favicon.ico',
      '/icons/icon-192.png',
      '/icons/icon-512.png'
      // add other assets (CSS/JS/spinner.svg) you need offline
    ]))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request).catch(()=> caches.match('/index.html')))
  );
});