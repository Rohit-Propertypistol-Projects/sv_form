self.addEventListener('install', function(event){
  console.log("[crm SW] has been installed");
})

self.addEventListener('activate', function(event){
  console.log("[crm SW] has been activated");
})

self.addEventListener('sync', function(event) {
  console.log("[crm SW] Sync Called with event: ", event);
})

// workbox.precaching.precacheAndRoute(self.__precacheManifest);