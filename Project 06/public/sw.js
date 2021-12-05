console.log("service worker from public registered");

//Cache Files
let cacheFiles = [
  "/static/js/main.chunk.js",
  "/static/js/bundle.js",
  "/static/js/0.chunk.js",
  "/static/media/background.8e68c44e.jpg",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
  "https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxK.woff2",
  "https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean",
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
