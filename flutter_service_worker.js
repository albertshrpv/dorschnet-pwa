'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "51372b97497efcff1edf65cce3319f05",
"assets/assets/images/aatik-tasneem.jpg": "ed30985aa948c8f11348c11396c05fe7",
"assets/assets/images/aiony-haust.jpg": "d74e00cb261d4ac7c22b964fee69dfac",
"assets/assets/images/averie-woodard.jpg": "43fec83eafec7fa93522bf42e74d4bb5",
"assets/assets/images/story/story-2.jpg": "0e9723e525db9c60b973696e064bd86a",
"assets/assets/images/story/story-3.jpg": "8f9aa85e1a850f162f2b9f6b79a4fb08",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "18b2a562b56bfba5418d3077db912755",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "67ba0201fd46495ef0d8df253c0bdea4",
"/": "67ba0201fd46495ef0d8df253c0bdea4",
"main.dart.js": "5aecfcd8a05ae82cf242e697118126dc",
"manifest.json": "fd2661b8ab4623da17179ae102a417c7"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
