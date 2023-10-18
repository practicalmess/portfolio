"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/portolio/index.html","b593438591229bffb5d0b137382f862c"],["/portolio/static/css/main.68de757b.css","74babdd3d6430ef95f1478a9ef9f546c"],["/portolio/static/js/main.8ca8b8e2.js","8f00ed175d60d845ae5628fc402a4293"],["/portolio/static/media/PHP-logo.3a1af498.svg","3a1af498b65078c8b0a7d667c5de3078"],["/portolio/static/media/React-icon.05a3e30f.svg","05a3e30fdf60ebe9d00cf4725d44bd42"],["/portolio/static/media/bbscreenshot-sq.03697001.png","03697001d2b8a07cafb35624c60970ab"],["/portolio/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/portolio/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/portolio/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/portolio/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/portolio/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/portolio/static/media/ghlogo.155d4830.png","155d4830adcbbb50178970778efa38b7"],["/portolio/static/media/graphql_logo.8c005987.png","8c00598757ea750382f4a211331f8ae0"],["/portolio/static/media/kubernetes_logo.63228854.png","63228854e474cde629aa634a8dd53b30"],["/portolio/static/media/laravel.36533370.jpg","365333707009252d5a34e684b717b099"],["/portolio/static/media/lilogo.91cbcbc7.png","91cbcbc7bcd34ddafeda148cea462fee"],["/portolio/static/media/linkedinlogo2.998f8545.png","998f8545a3edeeec90a16363bd30690b"],["/portolio/static/media/logo-proto.399279cd.png","399279cdf5bacdd83cc6bc7d7b85cb16"],["/portolio/static/media/pdpscreenshot.57c3628c.png","57c3628c5a0b731e663bc188d3180ae5"],["/portolio/static/media/pmrp-screenshot.e135d7a2.png","e135d7a202f65a6cd5a5695363b3ed10"],["/portolio/static/media/sass.c2db7b2f.svg","c2db7b2f66f4fc79427d234d0d37a2ea"],["/portolio/static/media/typescript_logo.d5104695.svg","d5104695fb76cc45dfad7e783db966e0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var o=new URL(e);return n&&o.pathname.match(n)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),o=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),o]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/portolio/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});