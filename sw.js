self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('imgverse-cache').then(cache => cache.addAll([
      '/',
      '/index.html',
      '/favicon.ico'
      // Add other assets if needed (e.g., CSS, JS, images)
    ]))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});