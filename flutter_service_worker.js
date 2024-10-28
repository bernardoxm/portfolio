'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b492545992e6e60868e344c1f5b3ad18",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "c1c5f29031926111ab3ccb7c551c88f9",
"/": "c1c5f29031926111ab3ccb7c551c88f9",
"main.dart.js": "26809456003fdd0735f971eb43776efe",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/l10n/pt.json": "d736d2ff1e5441e972c89bb4af13730e",
"assets/l10n/en.json": "48a4576b3c7741896d7baa3b2e8dc32d",
"assets/images/mypet.png": "741f85cfe7b190ff307f861e78ca0bc9",
"assets/images/us_flag.png": "6974ed82380e95148ef78c66db9a331c",
"assets/images/gait_logo.jpeg": "eb08ccb0be18b3842960e343e3fb24f9",
"assets/images/matheus_costa.jpg": "b64b72c007bf92d99b4b7f610d16da0d",
"assets/images/calc.png": "174d31d65a415bda07ddcf52be0c5d3e",
"assets/images/wayllon_castro.jpg": "fc2a4469d6df5e7e2e0f0a3f9b02abed",
"assets/images/luiz_felipe.jpg": "8883ababae9e0d1b7919655b1ab20a25",
"assets/images/una_logo.jpeg": "b61340829bca895a8566849795a1e197",
"assets/images/israel_pedrosa.jpg": "be3dbcc0e3aeae7be412e57a60cb7395",
"assets/images/arcus_wagner.jpeg": "04b47ae26d45dce88d289e42cbbb546e",
"assets/images/linkedin_icon.png": "63bdc99f5b04d9b8965af5342c123cc6",
"assets/images/pomodoro.png": "f35877d058148e74838088dea1b34990",
"assets/images/marcela_siqueira.jpg": "8d49ac55ac9d5b1e88a6628cadc4e929",
"assets/images/br_flag.png": "6322b09fb5751a1a12576883613c33fe",
"assets/images/google_logo.png": "29bf4f9c31b5693131908d512eedb185",
"assets/images/caio_castro.jpg": "b70f1566f8655d52c1efe38aabf68c86",
"assets/images/profile.jpeg": "01e06aa690999886a5f56485e26d5049",
"assets/images/profile.png": "89f0097dd659ed0100c2071fe3992424",
"assets/images/campominado.png": "5a1be1cee77697eab79a644c0ecbcc4c",
"assets/images/edson_emidio.jpg": "daa1e487aba9119079c183c0f98340f0",
"assets/images/perfil.png": "28617857e0dc65519f9efb5442f8dadd",
"assets/images/desp.png": "8a24c27c3a3acfd617fbaa1759c64144",
"assets/images/pngwing.com.png": "e45ebd5258d77392cb78ceb7b3133eeb",
"assets/images/minhaloja.png": "5a363b6b3b08f5005dee8a1a4605b2ac",
"assets/images/cardapio.png": "82fe1664fdf7efa1c4937bdaaa74c951",
"assets/images/numberone_png.png": "c0b8e3747bfcf8850237a2404f1e4750",
"assets/images/chat.png": "aa2e6fa73ffd3ffcfe5aeb0381b2f6e2",
"assets/images/timetrack.png": "2f90abc8f4f2ec06111208596911c611",
"assets/images/cod3r_logo.png": "9e72bb87a8e801015bd355ce833f7b8d",
"assets/AssetManifest.json": "0ef5e8ec1569b209314999535d524dd3",
"assets/NOTICES": "e4800bd80cd55c2ec29a795b3cc53e7e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e8813c0b1d9884d1ac473c2010210e69",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "168d037e6c5303761eab30c4faaeae99",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/mypet.png": "741f85cfe7b190ff307f861e78ca0bc9",
"assets/assets/images/us_flag.png": "6974ed82380e95148ef78c66db9a331c",
"assets/assets/images/gait_logo.jpeg": "eb08ccb0be18b3842960e343e3fb24f9",
"assets/assets/images/calc.png": "174d31d65a415bda07ddcf52be0c5d3e",
"assets/assets/images/una_logo.jpeg": "b61340829bca895a8566849795a1e197",
"assets/assets/images/linkedin_icon.png": "63bdc99f5b04d9b8965af5342c123cc6",
"assets/assets/images/pomodoro.png": "f35877d058148e74838088dea1b34990",
"assets/assets/images/br_flag.png": "6322b09fb5751a1a12576883613c33fe",
"assets/assets/images/google_logo.png": "29bf4f9c31b5693131908d512eedb185",
"assets/assets/images/profile.png": "89f0097dd659ed0100c2071fe3992424",
"assets/assets/images/campominado.png": "5a1be1cee77697eab79a644c0ecbcc4c",
"assets/assets/images/desp.png": "8a24c27c3a3acfd617fbaa1759c64144",
"assets/assets/images/pngwing.com.png": "e45ebd5258d77392cb78ceb7b3133eeb",
"assets/assets/images/minhaloja.png": "5a363b6b3b08f5005dee8a1a4605b2ac",
"assets/assets/images/cardapio.png": "82fe1664fdf7efa1c4937bdaaa74c951",
"assets/assets/images/numberone_png.png": "c0b8e3747bfcf8850237a2404f1e4750",
"assets/assets/images/chat.png": "aa2e6fa73ffd3ffcfe5aeb0381b2f6e2",
"assets/assets/images/timetrack.png": "2f90abc8f4f2ec06111208596911c611",
"assets/assets/images/cod3r_logo.png": "9e72bb87a8e801015bd355ce833f7b8d",
"assets/assets/icon/Cleancoding.png": "44ea4745f111da0a76c2676a61273701",
"assets/assets/icon/git.png": "792bc01d5e00681b2641d8eeaabd68e1",
"assets/assets/icon/kanban.png": "b4cbfd48b3183dc0763748c5088ab3d5",
"assets/assets/icon/fluttter.png": "e02a6c427d3f2f6128219c4916cc4c6f",
"assets/assets/icon/sql.png": "1a350423b8ca9640930797207d6d457a",
"assets/assets/icon/firebase.png": "45ec5c8523c42019e2aa9fe5436750af",
"assets/assets/icon/Ccharp.png": "81eda716e82c506fbc256d278808a855",
"assets/assets/icon/bloc.png": "193fec4a39a1b06daeaef9de82564a8a",
"assets/assets/icon/API.png": "d08eb2bb1a081054dd9446764359b05b",
"assets/assets/icon/dart.png": "a675cb93b75d5f1656c920dceecdcb38",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "a2872d811dbba7bb98c9915a822e9a23",
"canvaskit/canvaskit.js.symbols": "b51e5b9aaa690af6ccd9f476f04afc65",
"canvaskit/skwasm.wasm": "d7fcfe5899c5e2fc575fb90869c40c48",
"canvaskit/chromium/canvaskit.js.symbols": "e8e6185624009538c2554eb8c9b29650",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "3ca4b5cb3bf5c2e464daaaae624e8c2e",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "4e15cace3ccd07aa57a909ea896c8a83",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
