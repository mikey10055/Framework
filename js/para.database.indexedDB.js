/**
* Paradox.Database.indexedDB JS
*     Version: 0.0.1
*     Authers:
*           Michael Thomas
*
*
**/
'use strict';

paradox.Database = paradox.Database || {};
paradox.Database.indexedDB = (function() {

  var IndexedDB = function(name) {
    if (typeof window.indexedDB !== 'undefined'){
          this.dbName = name;
          this.version = 0;
          var _this = this;
          var initReq = indexedDB.open(this.dbName);
          initReq.onsuccess = function(event){
            var db = event.target.result;
            var version = parseInt(db.version);
            _this.version = version;
            db.close();
          }
    }
  }

  return IndexedDB;
})();

paradox.Database.indexedDB.prototype.open = function(callback){
  var callback = callback || function(){};
  var request = indexedDB.open(this.dbName, parseInt(this.version));
  request.onupgradeneeded = function(event){
    console.log('%conupdateneeded','color:#0000ff;');
    callback(event);
  }
  request.onsuccess = function(event) {
    console.log('%consuccess','color:#009900;');
    event.target.result.close();
  };
  request.onerror = function(event) {
    console.log(event.target.error)
    console.log('%conerror','color:#ff0000;');
  };
  request.onblocked = function(event) {
    console.log('%conblocked','color:#000000;');
  };
}


paradox.Database.indexedDB.prototype.createStore = function(storename, keys){
  this.version += 1;
  this.open(function(event){
      var db = event.target.result;
      var store = db.createObjectStore(storename, { autoIncrement: true });
  })
  return this;
}

paradox.Database.indexedDB.prototype.addEntries = function(tablename, entries, callback){
  this.version += 1;
  var callback = callback || function(){};
  this.open(function(event){
    console.log(event.type, '--- ---');
    var db = event.target.result;
    var transaction = event.target.transaction;
    var store = transaction.objectStore(tablename);
    var req = store.add(entries);
    req.onerror = function(event){
      console.log(event.target.error,'---');
      callback(event);
    }
    req.onsuccess = function(event){
      console.log('data has been added');
      callback(event);
    }
  })
  return this;
}

paradox.Database.indexedDB.prototype.getAllData = function(storename, callback) {
  var callback = callback || function(){};
  var trans = db.transaction(storeName, 'readyonly');
  var items = [];
  trans.oncomplete = function(evt) {
        callback(items);
    };

    var cursorRequest = store.openCursor();

    cursorRequest.onerror = function(error) {
        console.log(error);
    };

    cursorRequest.onsuccess = function(evt) {
        var cursor = evt.target.result;
        if (cursor) {
            items.push(cursor.value);
            cursor.continue();
        }
    };
}

paradox.Database.indexedDB.prototype.dropStore = function(tablename){
  this.version += 1;
  this.open(function(){
    var db = event.target.result;
    db.deleteObjectStore(tablename);
  });
  return this;
}

paradox.Database.indexedDB.prototype.remove = function(propertyName){

}

paradox.Database.indexedDB.prototype.dropDatabase = function(dbName,callback){
  var request = indexedDB.deleteDatabase(dbName);
  var callback = callback || function(){};

    request.onerror = function(event) {
      callback(event);
    };
    request.onsuccess = function(event) {
      callback(event);
    };
    return this;
}

var db = new paradox.Database.indexedDB('MyDB');
