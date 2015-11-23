/**
* Paradox.Database.indexedDB JS
*     Version: 0.0.1
*     Authers:
*           Michael Thomas
*
*
**/
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
  var request = indexedDB.open(this.dbName, this.dbVersion);
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


paradox.Database.indexedDB.prototype.createStore = function(storename){
  this.version += 1;
  this.open(function(event){
      var db = event.target.result;
      var store = db.createObjectStore(storename, { autoIncrement: true });
  })
}

paradox.Database.indexedDB.prototype.addEntries = function(tablename, entries){
  this.version += 1;
  this.open(function(event){
    console.log(event.type, '--- ---');
    var db = event.target.result;
    // var transaction = db.transaction(tablename,"readwrite");
    var transaction = event.target.transaction;
    var store = transaction.objectStore(tablename);
    entries = { name: 'bob', age: 21 };
    var req = store.add(entries);
    req.onerror = function(event){
      console.log(event.target.error,'---');
    }
    req.onsuccess = function(event){
      console.log('data has been added');
    }
  })
}


paradox.Database.indexedDB.prototype.remove = function(propertyName){

}

paradox.Database.indexedDB.prototype.drop = function(){

}
var db = new paradox.Database.indexedDB('MyDB');
