const CACHE_NAME = 'colopiogenes-cache-v1';

// Lista de archivos a precachear
const urlsToCache = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/manifest.json',
  '/img/fondo-192.png',
  '/img/fondo-512.png',
  '/img/Colo piogenes (4).jpg',
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

// Instalación del service worker y cache inicial
self.addEventListener('install', event => {
  console.log('Service Worker instalado');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Activación del service worker y limpieza de caches antiguos
self.addEventListener('activate', event => {
  console.log('Service Worker activado');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Interceptar fetch y servir desde cache si está disponible
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
