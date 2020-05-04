'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ff4625c090df70567e44ece8d95a40e3",
".git/config": "d903dbe6ce4237abd86a23cc5b77f3d6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "abf7a6df100e7c9f0c1bf6eadc121f5b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ffd4eb3d4d88226febee36956adc7d1b",
".git/logs/refs/heads/master": "ffd4eb3d4d88226febee36956adc7d1b",
".git/logs/refs/remotes/origin/master": "fabb02a7b2e79d534b22831a58a138d2",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/35/1833bea7fb920a0bbd7f40d33ee4db2e21b0e9": "dd67cf7ee6f3df821422172887ab13e5",
".git/objects/39/4ef9cabc24ba5e51d91e54109b164afb0088d8": "1941ed572a13e138d519cffe7b022df7",
".git/objects/4a/03a476c3374f4f1c766d0e8e55afd0cefee6b3": "fe21c49a71a8cf8c6064f375a92bfcc1",
".git/objects/5a/44cf335ea4f1f58f1b13bf3befce7000308327": "602fe80d0cfdfec34fec24bc7066fe2e",
".git/objects/62/e2af54808e971aebde3e5d59346dd92ee51155": "67513f0c00eb89f8b1d4a2ae48970886",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/85/bf213e865f24d429c4b032836c5a505691b666": "48fb51c4924c58adee3f9a1cc44f4f02",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/e54d857e1df71446d78bc8779f806038bb8015": "f2a6db8c70e8389f4a2d45289aeb0785",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/9a/2d567511a35cd95e7b27d684bb472bca9edf57": "e5d8764b935e5ddcdfdd592d54d7ae99",
".git/objects/9b/91538a1e5562ad4e8ece39d099e39da28ad040": "ffd85e617597c38b7e2923505bd6e4c8",
".git/objects/a5/50fde3e3b8a69c21be426006d2cb04b1efc3bc": "d3f5f229bc3719b5e4be66c8fea7c9a8",
".git/objects/b6/4393dd9189fb7758d263791ee894585243eda2": "92752649ec4e0d32eaa1599025915b20",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/6e968e046d870c8292575e17d6900a51ec1a5b": "ab68a0d9c3603c79fa55ecb45a8b523f",
".git/objects/bf/206010c956e9cd6b3abb3c2b058867ac5d2a6a": "1e6ec259dfd47001d25a144ab08b7de3",
".git/objects/c2/8d50033fbe5efd7f10622bab18ed81a6aabe79": "d9566f1083eaf9ee1490773019d62898",
".git/objects/d4/2d028861c2f502b3e0f81be1af2e10759e4bba": "c93f2561d332ce3865a8342f98a79905",
".git/objects/d6/dcef45766b4f6d053451f61289fbb41a2ec896": "b9f9b096f89b108856f82bdea76a3a4c",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/f2/9acc3a416fce20891f61e82cc69d3449cd4090": "645771a7783d9e12c3ef60c8525afa4e",
".git/objects/f3/9bc3b2214a0ebad8d257770713c98421b048c8": "89da09cc63e315f741ce7fe26ee3238b",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "e184386825d52a43d820d69fc1986817",
".git/refs/remotes/origin/master": "e184386825d52a43d820d69fc1986817",
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
"main.dart.js": "e22af21842a535891e729ce07ea9936a",
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
