"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/portal/index.html","7306899171f70fde175bb9702770fa00"],["/portal/static/css/main.f58716bf.css","1644a07004f5d250f19e75e673333256"],["/portal/static/js/main.edb34e4c.js","819477ae8dde4d27117b05d5a1f3a6df"],["/portal/static/media/LOGO.59a1db88.png","59a1db880805992e6b9245446c13a871"],["/portal/static/media/about.29993e1f.jpg","29993e1f9a26e03d953515f5bf5d9401"],["/portal/static/media/about4.cf5be233.jpg","cf5be23374327a4df9ff98841ef6e327"],["/portal/static/media/boundary.ab69257a.png","ab69257a1d837d124ecf5ec9b862af5c"],["/portal/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/portal/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/portal/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/portal/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/portal/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/portal/static/media/hospital.41758658.png","41758658c4c494c3e283de99068cd561"],["/portal/static/media/news.2118f764.jpg","2118f7643b3c9c0817e1e604ca302107"],["/portal/static/media/prod.e43c2672.jpg","e43c26722ebfe697f3ef938421e4817f"],["/portal/static/media/prodbg.83ad6004.jpg","83ad6004a6c6802b2aa72908148fa2b2"],["/portal/static/media/timg.abafe8ea.jpg","abafe8eaa2182a0f1756ee1144b02302"],["/portal/static/media/timg1.fe56fb46.jpg","fe56fb46cb5b9d6811b1d26ad11d937e"],["/portal/static/media/timg2.0ddd1219.jpg","0ddd1219271855fdf1a32c85c79a8974"],["/portal/static/media/timthumb.8dea7fbd.jpg","8dea7fbd5b2007538e056e72458e498d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/portal/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});