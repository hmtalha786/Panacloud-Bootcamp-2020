console.log("service worker from public registered");

//Cache Files
let cacheFiles = [
  "/static/js/main.chunk.js",
  "/static/js/vendors~main.chunk.js",
  "/static/js/bundle.js",
  "/static/media/img.e262ef95.jpg",
  "/favicon.ico",
  "/index.html",
  "/",
];

// Install Service Woker
this.addEventListener("install", (e) => {
  this.skipWaiting();
  e.waitUntil(
    caches.open("App").then((cache) => {
      console.log("cacheFiles", cacheFiles);
      return cache.addAll(cacheFiles);
    })
  );
});

// Activate Service Worker
this.addEventListener("activate", function (e) {
  console.log("[ServiceWorker] Activate");
});

const options = {
  ignoreSearch: true,
  ignoreMethod: true,
  ignoreVary: true,
};
// Fetch Service Worker
this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches
        .match(event.request, options)
        .then((response) => {
          if (response) {
            console.log(response);
            return response || fetch.response;
          }
        })
        .catch((err) => {
          console.log("err", err);
        })
    );
  }
});
