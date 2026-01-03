const CACHE_NAME = 'colo-pio-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/img/fondo-192.png',
  '/img/fondo-512.png',
  '/img/Portada de Producto de una espera.jpg',
  '/img/Portada de Esperando el producto.jpg',
  '/img/Portada de susurros del silencio.jpg',
  '/img/Portada géneros .jpg',
  '/img/Portada de definitivamente si.png',
  '/img/Portada el hombre que absorbio el mar.png',
  '/img/Portada de Carita torcida.jpg',
  '/img/Lo cómodo que resiste portada  (1).png',
  '/img/Leve tensión portada_page.png'
];

// Instalación: cache inicial
self.addEventListener('install', event => {
  console.log('Service Worker instalado');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Activación: limpiar caches viejos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('Borrando cache vieja:', key);
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// Fetch: responder desde cache, si no fetch normal
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
