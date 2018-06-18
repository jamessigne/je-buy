/**
 * Check out https://googlechromelabs.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'ionic-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    './build/main.js',
    './build/vendor.js',
    './build/main.css',
    './build/polyfills.js',
    'index.html',
    'manifest.json'
  ]
);

// dynamically cache any other local assets
// /\/(^(?!api).)*/
//self.toolbox.router.any('http://35.226.130.188', self.toolbox.fastest);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;

self.addEventListener('install', function(event) {
 
   
  try{
    var open = indexedDB.open("je-buy");
    open.onupgradeneeded = function() {
      var db = open.result;
      var store = db.createObjectStore("user", {keyPath: "id"});
      var store2 = db.createObjectStore("panier",{keyPath:"id"});
  };
    
  }catch (ex){
    console.log(ex.message)
  }
});
