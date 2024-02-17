'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ab8248a801f7d7e35b455387fbcbd164",
".git/config": "ed32c9b9ecf487333f5ce64b564d27fa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e617b1f535a7695582b2808410045c47",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ab4d6ac537a2c0e75ac17abd5ee19d7b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0fb1c191f53f91a70c3b4b659c87897f",
".git/logs/refs/heads/main": "0fb1c191f53f91a70c3b4b659c87897f",
".git/logs/refs/remotes/origin/HEAD": "96c9238c5b79d47ff95623ab78269f6f",
".git/logs/refs/remotes/origin/main": "258c449bebff381e70a387fa9d26ecd9",
".git/objects/0a/25a8e1f67c72c7542320e1d224f4f73b3daa0a": "4d34dd7217b513b2daf67380373c1ca3",
".git/objects/0f/a2d18491722eb0071bcccd9a57379e0108e6d8": "f90bc03af8530204325bcda991f4e6df",
".git/objects/0f/bb9f9b11ccddbfa72044c3c7a37451512d5c61": "2aa329fa64461374b684ba4c133261e4",
".git/objects/10/d20416115580ce536b5bdcfad766d4b24ce206": "35da33efd676a3076c22b3df05455d1e",
".git/objects/17/ac5849c2dd7e7a2473809d0409071fff014fad": "9c4c2512e09760d2a1c0c15c6daa188d",
".git/objects/19/f1cfccc4b0a8b847f764d19dbb7d9bf4bbd8c2": "895d156e701734c181a137a97ee8e362",
".git/objects/20/4abbdd095f5119a3e1be3de32d56b6ff3f241e": "5e2afbe2e57a4e16eb565c3bfd36030a",
".git/objects/21/b8d767ee6cd231a02eb71e8ba953eb81fb9396": "6694fcaf3d6a5b977dc18232d0c3a40d",
".git/objects/25/318692e8151c722fe740b58bb706569d432e3e": "299cf903672cbf69c06c6af655252270",
".git/objects/25/d30ab232faa569af57c124075631c50fac4c7f": "20984db2d80cd0b2afcdeebe9d02ef7f",
".git/objects/27/a4bd10ff0858839f331f0aab0378c1c2be87d9": "088b49bf652514d2ab40df2e701f5013",
".git/objects/2a/45ac437541968278940657fddfba45a35f43f1": "1c387320365e68a01fa8c21b9f030265",
".git/objects/32/02d3db6730cadd668137ce2f27dea15454f506": "1494da1a4a520793dd792213b464ae87",
".git/objects/33/4b29dfb0eead94e6f4e0907d5080d00aa1c17e": "8e3410253098676f4ec8627e5ed5f3d7",
".git/objects/33/87fc3f15c66c153a6ce778ff11cbcaff4f4fc2": "78e2928f3178366a1e3e762e30f3fbe3",
".git/objects/3d/a8f3efcbd2329e66dac97d812556f453582abf": "c3f2cfdb571490c3f18f3844969ec6e6",
".git/objects/45/9d27986559bfc71f1a49c91b8b1d7da3003762": "177b207f2c81bf9c66c0e73e1c33da90",
".git/objects/46/d8e1330d9044bed410498074721a5b5ab50c52": "42b4760b9677be4a6fc7bbc55f46fad9",
".git/objects/47/a12462607ab191a272442efcfd8fa9b6f82647": "624a57d7fbf2b664ab36ed3bcaa6555d",
".git/objects/48/1ba066d8144799c6d1f336cdb2d42f02d9039c": "ff2d4d689cfa7511479d6a350fae22c1",
".git/objects/4a/efffca89b436f51a3cd9398479ae0bdaebec7a": "680091e8eb37b7cc6df37ea29518d5ad",
".git/objects/4e/e4566ecb2ef6c75e8e1a734ba6ec146d80c053": "d3dc6dca9a57b2d7eccf7092b9616b57",
".git/objects/52/b33c6a82bb9893defd64ccdc6a66cae0db513a": "6c119c526de0098756b02bc7287526ea",
".git/objects/58/f33ed65e9600b64ab2f9b6ab106f14e5fb7081": "33a5ad586d4b99e2847f279fedbaffbf",
".git/objects/5d/c2220a88a8bfafb8da48d01ca001cb031989b9": "8c5c76a96d0f88beaa62abed8b1add92",
".git/objects/67/a74a085c984a2ce2527c0c5f1d2197ac552921": "dab40611f58ab6021b457e848a5b12f9",
".git/objects/6b/e987c44bcbf7efeb1aeb9f07ae4854d8fa2b5d": "450f67c41735076747b51113cf4e46a4",
".git/objects/6d/560b0bc10ca3abee64fe05c441586287a8db2f": "b4abddf5ff95c5648943f63239838084",
".git/objects/72/587fa612a0124a466d2a758f20db837ae9af97": "7760fe04df4ace85f97f69be487e8e86",
".git/objects/77/60eeddd5815eac9f175177abcd3c26e801e23e": "44c5aeb6526f562a48689543a0cbb114",
".git/objects/7e/576849a801a890e2287ff20474c269b3eed97b": "2cee1ea78fd57f81abd954eed99e9034",
".git/objects/82/5f5f0dc18481e5b3a92ba3669c40277a649986": "e31f4d66921a2ded648bb6f5a7acc7f4",
".git/objects/8a/6adce9a49a0a2f7d22442c76921e47466437e5": "33c27acef2aae7fb4f7cd29dd63c205e",
".git/objects/91/727fb30491d9f8ce4f8bc6fa7b06cac08291af": "094f580c33399f550592289ee4c32418",
".git/objects/9b/e6a1678ffadb654f32c93372af5f6ae36d103e": "707497fa2b94fcef6b0e2091b7e89277",
".git/objects/9c/07a22e80dad34d9fc9279ce2946de61f770407": "f6add5a3818a2c49b9969e247c1699a2",
".git/objects/9f/a6d1137eb171626f4524fe8684f954b10f99ce": "2ff21cc6770b20012466cc15a0a9b82b",
".git/objects/a3/4a03951a2bfcb6fdff89e9e4224b592825ce81": "5405e3f14c1822765d4f1c7601f5d9a0",
".git/objects/a7/81ee68d14d63c6d07c7eee8772f341ff6f0472": "f1e85cb6c7bd8bbc4ddfb4af4b12c0f1",
".git/objects/a8/fedc2fc665f82898a55330acec2e8a4d84b36d": "b39023462ce01819a4b848e058824be1",
".git/objects/ad/c6eb0a0b426b652df7609a502baa98684ef5f4": "50ff7b21f4458397b59149df400b2ee9",
".git/objects/ae/f9e5daa3c105640502b09ba134e072f6e0eddd": "4df2ebd74015065705ac4087068f4c4d",
".git/objects/b5/bd6d4a6230ecf50a60765b1a576b06521b5140": "75e26a7027281c43920dbd497a8283ce",
".git/objects/b8/129b5063b3fae6c4cee35c46e8d5b9cfeff1b4": "8a28755d7f4ad67dc5c738d45f981d8d",
".git/objects/c4/01de8fce677231581f96ee9462cccd215a17d9": "3a4f5f7f0f059a894d4586c889e3f0e2",
".git/objects/c7/947cfab31b66f0b728fe8d352986b55bc8d701": "b5602a02b7dc7e4db34575a5cb11afd9",
".git/objects/da/3fc47ca8966c1b61ce3bd4d00362017b9f97ae": "065d07d305602c9355032c410c1219cd",
".git/objects/df/eedf1159f42f08d7092336545a9013fa756748": "73241d9a8c6522fe4c7a93f1d5442165",
".git/objects/ee/3618b0e56f9e0022c5f8a98c190223dccc047f": "51307a09522b67d9c068fbc7a7a24826",
".git/objects/ef/f81c25a765dd33d89c656f80979dcceabb7d68": "d22eb22084cec39fa5569753c12963e9",
".git/objects/f4/e1646fa29c56d6dc57c47ae0e421c4c7d963f8": "b33fb9de5f224b060156739dfb971578",
".git/objects/fa/04b49edb4a7320fd015d45d038b8dc418aa213": "b7786e75f01ffcf07954fb06a287d016",
".git/objects/fa/356f5bab60a62f62d875a4f8e44a5a963275ad": "5160af4a3a7b4036f8c65e7bab5da835",
".git/objects/fe/6333a2723a49f5d17006b109b6a82648c10a8a": "1bdaaef421048f5114b83ae50747983b",
".git/objects/pack/pack-77e8957870c8f457cd5bff194430f5c55aac7556.idx": "41f9df7eb5b0667e86d76cd8603a70c4",
".git/objects/pack/pack-77e8957870c8f457cd5bff194430f5c55aac7556.pack": "2eaff2cea4bc1f0c882491aa65abc764",
".git/objects/pack/pack-77e8957870c8f457cd5bff194430f5c55aac7556.rev": "680cbcc468de576b34c78143ed2a6eb9",
".git/packed-refs": "a23146cb9b0a67cd31959356732c5789",
".git/refs/heads/main": "ff9354da2869a49570b2b407885e5f62",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "ff9354da2869a49570b2b407885e5f62",
"assets/AssetManifest.bin": "a53491ba33870e68dce7c820b0867cda",
"assets/AssetManifest.bin.json": "bb5daa477ab092a8c1a34a960dc05d3a",
"assets/AssetManifest.json": "96d47c011a5a5aa71f9631b60049eb4e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "03fac1324e2c4bbd49116dcbf7dcd2e7",
"assets/NOTICES": "efcbe60c55f9f312cfac4f3f623d3c4c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "31c9a7bc9e96b1be27cd8758d85bbaa6",
"/": "31c9a7bc9e96b1be27cd8758d85bbaa6",
"main.dart.js": "ae300585038fdb9e08694aa7696793ec",
"manifest.json": "f06f3ead423b8534ff674d4ec80f060b",
"version.json": "3668a69779c74df3e4096c531c8b5dc5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
