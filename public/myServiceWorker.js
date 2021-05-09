const CACHE_NAME='version-1'

const urlsToCache=['index.html', 'offline.html']

const self = this
console.log('Log: ~> file: myServiceWorker.js ~> line 6 ~> self', self)

// Install SW

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Log: ~> file: myServiceWorker.js ~> line 14 ~> .then ~> cache', cache)
                return cache.addAll(urlsToCache)
            }).catch((error) => {
            console.log('Log: ~> file: myServiceWorker.js ~> line 16 ~> .then ~> error', error)
            
        })
    )
})


// Listen to the request

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return fetch(e.request).catch((error) => {
            console.log('Log: ~> file: myServiceWorker.js ~> line 30 ~> caches.match ~> error', error)
                return caches.match('offline.html')
            })
        })
    )
})

// Activate SW

self.addEventListener('activate', (e) => {
    const cacheWhiteList=[]
    cacheWhiteList.push(CACHE_NAME)
    
    e.waitUntil(
        caches.keys().then(cacheNames => {
    console.log('Log: ~> file: myServiceWorker.js ~> line 44 ~> e.waitUntil ~> cacheNames', cacheNames)
            cacheNames.map(cacheName => {
                if (!cacheWhiteList.includes(cacheName)) {
                    return caches.delete(cacheName)
                }
        })
    }))
})