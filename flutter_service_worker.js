'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e2e48020988fc795df978a690ea9c5c7",
".git/config": "638be9f1b203bc152220668d748e153c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9c4da69a708fd9ee5bdee8082d77bd8d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8c3d42a1153f5f52fb8b3f2086151add",
".git/logs/refs/heads/main": "6e1dfe76dc7a28cf635b508973888a4d",
".git/logs/refs/remotes/origin/main": "52a78ef1076be0dc61079e336fedbefc",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/05/4b133c3698cf49af40c02c11da127dc808d6f6": "c62a1626bf45e785f3f3bb08c420088b",
".git/objects/05/b56d7025785542810ca4b25042faa2a24196cb": "71e384f72ff426902f54650e01c151e4",
".git/objects/08/3d5000fd17636adcffbedebc19480d92cfad23": "ce38ae87309d73304cc1e2d287791698",
".git/objects/09/c6078b2fff0cf24c08ab758a3703b1070b4875": "94ad367082982b8de0461b2a8422ad79",
".git/objects/0b/593e970fb5d8d158ae30c0344c6781e7f9e0de": "84abe752a2f6f091332d6072f7215030",
".git/objects/15/9194d85e0f919137a6048ccb1ffb5de2e21ad1": "57519015e13e7ab419b390e72aa9b917",
".git/objects/16/fd69762ba84af4fbb08ea20420f82595efafbd": "43770ecdcdc3307c1b6ac3d1b4ec8a8a",
".git/objects/19/b6f1441c17bfb84934e1c21f8bd2a1057317bc": "e9ed057e4c025cfcd5eb73e7a4a53ae7",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/21/c1c44f33cdfca9826404add5f37b415e7e07fd": "e591bafa2fb14e214fba7f999d7c6feb",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2c/a4c8e15017607492934854369ac9cc8e405f34": "c7d1a42752714ecb04040b77bdaa94e5",
".git/objects/30/32cc194946c35e6282d62456216a2b9d1c7630": "eb74b002031041dea38b44aa490200c3",
".git/objects/30/cb18e911d05e5e651e61d868684864498427a4": "6a1f4a80b5cec6b56ebe23dfad33424b",
".git/objects/39/deb2e7b5de843c5aa177c4acbf21671c9de84a": "fef06a3050e8fec45ee99c1a31bcf3d4",
".git/objects/45/aef27a4a9bd5693b4ee2fe55fced7559ba0bef": "85efa3034c1293123e1ea18cdf4c4d3c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/5c/d86961a444d8559516e816a2b0e8a3aa5493e0": "34cbb2a44014af193350d9120ef902a8",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/77/e1a79b98c2dbac037951957ca0092d1cb922ad": "e0fece0a6d731edfe31632b861cbfe80",
".git/objects/78/03c2ae87de83e62d1708641674077d879c1012": "a2eabe96e6e3fe8b8d320113a406a147",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/29aa3b1974aa59dd6ac4a9a2f1bdc24d357cee": "9a7fc7469ada23dc0a019439244b2ceb",
".git/objects/8f/25defb4b64ae4da0a555848088e65628542f7d": "a765e1ad0a489859ad42532447e39b33",
".git/objects/96/9124f69edb595b03958ad47d8e4f13619e1bac": "b200b3cd909a1d3183f4ebe84349ca05",
".git/objects/96/f98c0ec7a1e9c2cef15d274357d2c7fbdf7340": "cbf028366696e8df537648a0302f3cbf",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9a/1d00043d63345ca8a0c7d061c3a8ed6fe356b3": "16f46bde90913ee3b90c32eec2501cc6",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/c04d6cec15a4c8a9f1a8186bca6602df00386b": "a8be631a87ee94698d26376ebefbcbcb",
".git/objects/a0/9b7258a95d6b5ed4956c8fb39c47f0d0588524": "9d4f304a9260fb456d080c999f929ff3",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/92cf9466e3b8b91490cb23a29f69da87b8a170": "475bf5b22e898e8ca281e928b01c04f3",
".git/objects/bd/9ada6fd1b0d7b828588792a355c7c30e7e95c5": "b3bc75d278fadfb1e2c9527f3fdc7f4b",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c5/ab9d785a622021002acd475f28245f90bca047": "86e522063283c1407c4b04a58754d98b",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cc/4d827570b1aad6f3d103211cffefe3c30d67ff": "5d22e5be1d1def80a320eb74293481b7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/234f9bc72ee41e0c1669955c0ee2020f4a2cb5": "76fef92b418231fcdbc8643de20d5865",
".git/objects/e9/730e9dc0f3f4618c2526127d5d929ee266c14f": "9ff0306334334383e3a8bfe78924542d",
".git/objects/e9/891483127560866c87774a548466063f011c7f": "0534a755e747adb3432de82943ecefe9",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/1462213fe5d2e306b41e22f8c000c9bd9cc75f": "b4a17026fe2fb748aab44a60137692f5",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/8c3da0c213b9ef43e5fe418b6f036628268938": "dc3e6b7126a1d43c5158962ccfc69575",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/36bce0af7ecc32374dc8eff87e033a56d2799b": "c6d1e83be06b913d6986fbc228eb594a",
".git/objects/fd/7efc918f9ce3dd7fac73ec7a675925c559f88c": "399c6e7745275b34451dd1a8bd54e499",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "1b8b7fc03af5f2a6a946af8286d9506f",
".git/refs/remotes/origin/main": "1b8b7fc03af5f2a6a946af8286d9506f",
"assets/AssetManifest.bin": "da698364cb9a20d56e977bfe39373bb6",
"assets/AssetManifest.bin.json": "b48a1b6a03cd49e6911ec3c8f1fa5b24",
"assets/AssetManifest.json": "a2822c9443b0b3552eb678ad00e0b6a0",
"assets/assets/icons/blob_ash.png": "f76b87a8dd8bb4ad017b441854541a2b",
"assets/assets/icons/blob_bean_ash.png": "bc902ac538eedf1abc48457bbf064fd1",
"assets/assets/icons/blob_black.png": "14198d608b7f0980998d329cd353e290",
"assets/assets/icons/blob_femur_ash.png": "b899f92250a0f7220db5c45bea2080c8",
"assets/assets/icons/blob_small_bean_ash.png": "411605e065607a48e110cedc91bebd82",
"assets/assets/icons/college.png": "fc79126690ce9053be832524bd96739e",
"assets/assets/icons/email.png": "d753a94555a0a733201cccb79582bb30",
"assets/assets/icons/facebook.png": "001c080bc3fe2c7cb7efd84eadab628d",
"assets/assets/icons/github.png": "a29dc3691124638b000809a7696281d5",
"assets/assets/icons/instagram.png": "0634a5babf36db50e415356b348e3f30",
"assets/assets/icons/linkedin.png": "3979a9eb592d10df9d3b28ed52cea1e7",
"assets/assets/icons/medium.png": "65307fbbc0d3435f76472f78d72fb97a",
"assets/assets/icons/phone-call.png": "9e299bb392428812cffbdadaf9272b15",
"assets/assets/icons/resume.png": "8d542751ce1d8d91b50cc1ccf137dfdd",
"assets/assets/icons/school.png": "d9d529b4578eab5ea2a0e7e33685cecb",
"assets/assets/icons/university.png": "77673017457b843b0b4ee24cdc44e617",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "83fa26fe3101ce04002272121d86f30a",
"assets/NOTICES": "7944a8c4a1bb4d990783e932f49f22bc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "95f769689112dcd209ad17bf8c68d6d4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ee1c7dfd399d49c0c07f12ef3a4914d3",
"/": "ee1c7dfd399d49c0c07f12ef3a4914d3",
"main.dart.js": "9d20bf47e01d8fc14b43ed4b1c816f2a",
"manifest.json": "33915bd01b6fbc2ad11a77923e641282",
"version.json": "5eba2b3f48e84c0565b6c84a1e17c11c"};
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
