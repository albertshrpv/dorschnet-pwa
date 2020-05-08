'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01cf14315d6c0138a9ea1664dcf5c9f9",
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
".git/index": "f79c97c41100fe4ea9f8607db77e140f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "32038249c6e32f01d381fe933724b003",
".git/logs/refs/heads/master": "32038249c6e32f01d381fe933724b003",
".git/logs/refs/remotes/origin/master": "271f5ce9383b25fb6df81666aa38cbe5",
".git/objects/03/a3f2b85a022a6c25f091960cf51dda8a237eed": "80d42abf3a224eab7bbf5aa0b06e3233",
".git/objects/04/24f8451026e6ea5b5b9db0d96ebb79087e962f": "a0c922923d13176b645d30615b9bb3d9",
".git/objects/06/b5ae895dca5db32c891228efcf669d57bb79fc": "39f431528f9e74a4392db05f9e332733",
".git/objects/09/00afc4d8247a39cf862375f715a80da0854c08": "ed3554399341e42cca391991b82ca056",
".git/objects/0a/6c75573daefc9c9e912ed8aec95f9677ab6c41": "49147bf513baacedef9d5b008c446263",
".git/objects/0a/b430d934931cfbeb68bdf6ff2a007e1de6af3c": "f750ffb4746fe24ed98f7877c12d7c0e",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/5ee9402f87d4e4fce2a3aac5bd1010ad5fa58d": "3b981f2e98723275c5f6dbb31305cabe",
".git/objects/29/6a3ff4cce8d6fa4b6eb9bf21573e9d8b80553a": "fd96c0ed69d48bed5a9f31a0b62e19c2",
".git/objects/2a/159095ad0233a842e2ad33d7600e9774cdaf31": "c163664d4bdcf89c9c7dc0a9b7ea356a",
".git/objects/32/f2283ca04dc6bbad6a574010a9e67113a552b3": "77779711f0b46d4c2d264914433ef5d2",
".git/objects/35/1833bea7fb920a0bbd7f40d33ee4db2e21b0e9": "dd67cf7ee6f3df821422172887ab13e5",
".git/objects/35/35c9e807f31a716865a2923f9c9057f7b337ce": "204b59f090f4a955fa8f4ef9536d7afb",
".git/objects/39/4ef9cabc24ba5e51d91e54109b164afb0088d8": "1941ed572a13e138d519cffe7b022df7",
".git/objects/3b/41e33713d4fe78420c4e61bc541a48626276e8": "9ac3f04703534a2d97b0f191c5355f07",
".git/objects/4a/03a476c3374f4f1c766d0e8e55afd0cefee6b3": "fe21c49a71a8cf8c6064f375a92bfcc1",
".git/objects/5a/44cf335ea4f1f58f1b13bf3befce7000308327": "602fe80d0cfdfec34fec24bc7066fe2e",
".git/objects/5f/bb983681a465b7616c42710db45537d4794a46": "f22b3ba4a15dd9240f7c0c2a4c5478d2",
".git/objects/62/e2af54808e971aebde3e5d59346dd92ee51155": "67513f0c00eb89f8b1d4a2ae48970886",
".git/objects/65/b17299f6b6850ae89bdc75f1163ebf08fe5861": "5c2b394ab83305f98a5637dd7d17ec2d",
".git/objects/65/ff79714feab9cf6ad477a5c039e8bcc1dfc6f9": "c2e621074f1613e8533582630293d907",
".git/objects/69/9cf15d14bef084f49dec28aafc578b09b58947": "fdf3842f153009706ec7206ece218820",
".git/objects/6a/5a947e411c056f936c0da82a69736b4fb1e8bb": "c47b077ba890848ad8222a5e13408a58",
".git/objects/6d/7a63404d94d201173e96b493661543410f2de7": "8143d0bed346adc407c9b0a8394153b9",
".git/objects/6e/e2129d6a3275f4bc33899d0cffd6cc56e2e7f5": "8fc2a364821d4698232bd41e390e38ac",
".git/objects/73/f5c7a46c34eb49a824f730e831539c55f7d1d3": "a8f362aecdb36dc2dc46a9075a6e5a9e",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/84/78d3ad9d2687dd3def3335593d19816de579ef": "88b12463e9036d5fabbf8bd1da5d7130",
".git/objects/85/bf213e865f24d429c4b032836c5a505691b666": "48fb51c4924c58adee3f9a1cc44f4f02",
".git/objects/88/111ee2a2363d2740511ea485a6b66fbefc4c77": "03ae165797ba74bd4239569a1fef3314",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/e54d857e1df71446d78bc8779f806038bb8015": "f2a6db8c70e8389f4a2d45289aeb0785",
".git/objects/93/a61b7ee48693041e93913456060fe1e82e9ba7": "2f6f91fade5804bb7931bab49121db57",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/95/714993cf7e4dbfb8187ff04884e316106559c2": "0ad17d713a07be24b89dd62f1cf9002b",
".git/objects/96/1c3cb1e18b17d6646fccde734d0fb99891cc1e": "a04fca4a513b1103b9cca1554ac4546f",
".git/objects/96/9942164de1dadc0e7ea7a10e4567bc6bf001da": "5a49dc01bf849477236b298b158cd28f",
".git/objects/9a/2d567511a35cd95e7b27d684bb472bca9edf57": "e5d8764b935e5ddcdfdd592d54d7ae99",
".git/objects/9b/91538a1e5562ad4e8ece39d099e39da28ad040": "ffd85e617597c38b7e2923505bd6e4c8",
".git/objects/9b/ad0949ba69c96079aa2d8ad8a932056f27294f": "b94d4c848fcd8f2771304b9e39ba430f",
".git/objects/a5/50fde3e3b8a69c21be426006d2cb04b1efc3bc": "d3f5f229bc3719b5e4be66c8fea7c9a8",
".git/objects/a7/60ab7794226a28bc03599907ec0aded48d647e": "def09890b27b1b0542bdbb74fcd45bd7",
".git/objects/b2/0212dadf3bae4a36093888bdc1263afe6154b8": "6898c9d8be87812cc5e8b76990df7bc5",
".git/objects/b4/0952c88273b39e32adfa522899dc6d6cba75c1": "2f0d13ceb9abf3d1748968f1b63c704b",
".git/objects/b6/4393dd9189fb7758d263791ee894585243eda2": "92752649ec4e0d32eaa1599025915b20",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/161019ed762242f1bab9cd423389f247fb1324": "957abf09e88c44714e4e085dc263e7e4",
".git/objects/be/6e968e046d870c8292575e17d6900a51ec1a5b": "ab68a0d9c3603c79fa55ecb45a8b523f",
".git/objects/bf/206010c956e9cd6b3abb3c2b058867ac5d2a6a": "1e6ec259dfd47001d25a144ab08b7de3",
".git/objects/c2/8d50033fbe5efd7f10622bab18ed81a6aabe79": "d9566f1083eaf9ee1490773019d62898",
".git/objects/cd/2a0b2b36ca3d9736b31bc4ea2b899dc434f7b7": "0a300153440d0d477b1e455707a13a9c",
".git/objects/d4/2d028861c2f502b3e0f81be1af2e10759e4bba": "c93f2561d332ce3865a8342f98a79905",
".git/objects/d6/dcef45766b4f6d053451f61289fbb41a2ec896": "b9f9b096f89b108856f82bdea76a3a4c",
".git/objects/d9/9ae4af627704a86e2d88d100350f1f79803a9c": "ee81544b28485bbba9d36bbf90a3303d",
".git/objects/da/0a39e6b4794dfb38af709a962c79c20eb7b507": "f152003d3d24d0f0a8bc2b23ab426134",
".git/objects/dc/53d79124e7a17017aa084670e6a73ee9c2cab4": "89b41cb16fd3a9805f1cb1d3bcbaaf98",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e7/1ef68e25b920dd75c74e3c6e9da8a2ea2d50e7": "cd3c8fe40e3703eaaf6a041bac6b6d25",
".git/objects/eb/53954ce0868f03a4120e3622e67f2751592f9f": "3a1af9d471053d2be03327c4427c75ca",
".git/objects/ec/f1f29a53b8744bea9068447f299967756ec2f1": "ce8e1927207a52f2b2904560d332f745",
".git/objects/f2/9acc3a416fce20891f61e82cc69d3449cd4090": "645771a7783d9e12c3ef60c8525afa4e",
".git/objects/f3/9bc3b2214a0ebad8d257770713c98421b048c8": "89da09cc63e315f741ce7fe26ee3238b",
".git/objects/fa/07107f68fa700d026ba01b00e30b4dc45af76b": "717dc25d88aeaef0b7d6a9d1be6e5eff",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "6cba9cc61ddf31c30e143ae4d39236b0",
".git/refs/remotes/origin/master": "6cba9cc61ddf31c30e143ae4d39236b0",
"assets/AssetManifest.json": "b9fd6e6aa44d6463a3b488f83dcf51b8",
"assets/assets/images/aatik-tasneem.jpg": "ed30985aa948c8f11348c11396c05fe7",
"assets/assets/images/aiony-haust.jpg": "d74e00cb261d4ac7c22b964fee69dfac",
"assets/assets/images/averie-woodard.jpg": "43fec83eafec7fa93522bf42e74d4bb5",
"assets/assets/images/logo.gif": "cb68a11c0192cb3f4a183be9ae6cc048",
"assets/assets/images/story/story-2.jpg": "0e9723e525db9c60b973696e064bd86a",
"assets/assets/images/story/story-3.jpg": "8f9aa85e1a850f162f2b9f6b79a4fb08",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "5b8292fe366ad628338809cffa8dbc7e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "67ba0201fd46495ef0d8df253c0bdea4",
"/": "67ba0201fd46495ef0d8df253c0bdea4",
"main.dart.js": "6ce1455ea65710bf3e4ed89ee1cc34f2",
"manifest.json": "663371480fe471d8ca36ec2118c1d678"
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
