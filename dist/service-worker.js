/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/static/css/admin.38b2834.css","f0e59371c101f057916003e3f8e345fd"],["/static/css/app.38b2834.css","cf8258ee1df2c33e502256c0a8210403"],["/static/img/element-icons.6f0a763.ttf","6f0a76321d30f3c8120915e57f7bd77e"],["/static/img/fontawesome-webfont.674f50d.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/img/fontawesome-webfont.912ec66.svg","912ec66d7572ff821749319396470bde"],["/static/img/fontawesome-webfont.af7ae50.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/img/fontawesome-webfont.b06871f.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/img/fontawesome-webfont.fee66e7.woff","fee66e712a8a08eef5805a46892932ad"],["/static/img/login_bg.d7174ef.jpg","d7174ef5f930a53ce6beae07190ddcc5"],["/static/js/0.b7d19e4.js","3854f6cf18ef2959a4e3afdfa66c8ed1"],["/static/js/1.07fa4ea.js","479f3c792eaff538a97e1df8851ee10c"],["/static/js/10.7b25fef.js","f3568a010c4020f22d6770275c4ca234"],["/static/js/11.3d5d53d.js","51baff4b4f954a90a977cc71747eeaeb"],["/static/js/12.142822b.js","d8512a0b166515e03ac8252f28cdce6e"],["/static/js/13.702f4ab.js","e2d9944d3214db04660f773f6ea89ff4"],["/static/js/14.b826603.js","d0f178999a9ed263352ee05566af6be5"],["/static/js/15.5276f09.js","1e5b4e6bc916b3a9b619de9584a54558"],["/static/js/16.be21574.js","2c3bd24bd1b2e382c23f9d5e3963b83a"],["/static/js/17.b7d88f0.js","0273a508763971b54588696dac767fc3"],["/static/js/18.17a6406.js","7fc4893548bd737251771baa2697e44f"],["/static/js/19.646e59d.js","469eaf2cd8547162358b2ad6998aced9"],["/static/js/2.8db4e3e.js","ed232ae569ea9e16624d55efe9619f6d"],["/static/js/20.8408fc5.js","36c3b0ae06d83d468e5e56607cfecf7e"],["/static/js/21.f9d52c7.js","dc8767f12e84d9d9f1303ecec5f86ece"],["/static/js/22.208896f.js","28440b0d2b427ea74cf36f125037e706"],["/static/js/23.c2e195f.js","4859192d6902495733c33fec98da01e3"],["/static/js/24.9c48e65.js","298ce1a5d6d4fcab0c3356aea42ea28f"],["/static/js/25.68efbae.js","a84cac3b4904e263caf9715c006efa33"],["/static/js/26.c626924.js","828d28a91827227a0ae50a578b0e5d76"],["/static/js/27.b898d64.js","7b8284ce2b26a97cf7f229dcca7f7e27"],["/static/js/28.1749907.js","bde9b3a0074b8bfd9bc88eb701d946d4"],["/static/js/29.43c638a.js","da37c223eb76b9b30e7f1911542744c1"],["/static/js/3.6464c41.js","4075074bfe03d44fbc6d56c4d5922c33"],["/static/js/30.596e5b4.js","fbe51ec834930a31b5a4d81f35005477"],["/static/js/31.fc404ef.js","34bcb1e3060f88906f23edf2fe35b361"],["/static/js/32.a903c29.js","51066c04541bfb445b74d7c1f5b9d20a"],["/static/js/33.f7c5c2e.js","d19e36d293c198736f516605e69d3543"],["/static/js/34.7b80b12.js","0b2bc24fc208aa080888ab1dec43dd01"],["/static/js/35.e11edc1.js","083fb3ddf1918efbc0404fd42ce82dc1"],["/static/js/36.324312a.js","25838d4cce1d4a43c52bf763ca995a38"],["/static/js/37.50f915d.js","0c6038bc0b5b918ddc898ccb9e514d9c"],["/static/js/38.aad1410.js","f07d7afb779b48e77025fb1ca34cfff4"],["/static/js/39.b9022b8.js","9f1ec353e0002d8895f7632394273a08"],["/static/js/4.dddc5e0.js","f767f6efcdb6aa7c6d24587279872001"],["/static/js/40.e3ceaf4.js","05b12a3ea627c3695f0dd1a5edd5eb52"],["/static/js/41.5ea7331.js","f2dbf41c8e094ef2062dc6a6a99668c1"],["/static/js/42.0f94725.js","be9038654c3c7322a91b7dd51de9becf"],["/static/js/43.4ec7abf.js","7fad9e37de2c507d3a61364a2323cd3e"],["/static/js/44.52c571c.js","2544fc39baabd7b619c31b663c6dbc8c"],["/static/js/5.8500116.js","ebccd88bb0460f967e06ed949173bc83"],["/static/js/6.b47b4c9.js","585a0439f09d18b604e56e2a18057cac"],["/static/js/7.8e0056e.js","e4bdb5d3d24ef81ee87d39db4cf0444e"],["/static/js/8.d10c404.js","225a497da01479cd788fd5bc6abf5cda"],["/static/js/9.8a4fb04.js","4e8932db4e15b917344948c85adbd513"],["/static/js/AdminLogin.7ea83d8.js","d45d179696234b6eb5cb5016c170ee7f"],["/static/js/Article.8c99652.js","b224809ce50be94e0a8027a32f824486"],["/static/js/ArticleList.ab06658.js","0e4fc2f98398e977d0ad36794ae37ce5"],["/static/js/CmsCase.bc4c302.js","af4ae7f25b348c1af5dac97c89173d03"],["/static/js/SiteMap.6c5e2e4.js","2b2b057c7a5f2507476d0ee2c10d015c"],["/static/js/UserAddContent.dff2cd0.js","22226f193f618034b42b5a2046efa4e4"],["/static/js/UserCenter.4851ba6.js","d48ded23b57b92ec887dcdab11463fe0"],["/static/js/UserContents.b0d7608.js","30694094b16ca4d9b87756f57db78896"],["/static/js/UserLoginForm.8b07089.js","77ccc1982334e8b21601cb0f3d776638"],["/static/js/UserMessage.1f0b941.js","ea1dd83d2bafa5ef8a881d7b05d01df5"],["/static/js/UserPwd.8071311.js","dfd6ababa3273290b6fc9a7ca7c456b4"],["/static/js/UserRegForm.7780b43.js","278f957170b9756f41e4da612a9be969"],["/static/js/UserReplies.886e0c5.js","55da46bf90b8b6a96cf71d7167866d11"],["/static/js/admin.91b9405.js","c3640130e3b0926d930c13f7d30d1b7d"],["/static/js/app.0f0abfa.js","57932e59f6a4bbe5bb6f9ef0d35dbbfe"],["/static/js/manifest.56696c4.js","faca223c991abef1dbe41ad45f45ad93"],["/static/js/vendor.d70e313.js","dd1049b089222d98f47e8bddc0a7951a"]];
var cacheName = 'sw-precache-v3-doracms-vue2-ssr-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







