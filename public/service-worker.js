self.addEventListener('install', function(event){
  console.log("[Haware SW] has been installed");
})

self.addEventListener('activate', function(event){
  console.log("[Haware SW] has been activated");
})

self.addEventListener('sync', function(event) {
  console.log("[Haware SW] Sync Called with event: ", event);
})

// workbox.precaching.precacheAndRoute(self.__precacheManifest);