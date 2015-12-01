
/**
* Paradox.Database.localStorage JS
*     Version: 0.0.1
*     Authers:
*           Michael Thomas
*
*
**/
'use strict';
paradox.Database = paradox.Database || {};
paradox.Database.localStorage = (function() {

  var LocalStorage = function(name) {
    if (typeof window.localStorage !== 'undefined'){
          this.dbName = 'ParaDB-' + name;
          localStorage.setItem(this.dbName,'{}');
    }
  }

  return LocalStorage;
})();

paradox.Database.localStorage.prototype.getDB = function(){
  return JSON.parse(localStorage.getItem(this.dbName));
}

paradox.Database.localStorage.prototype.set = function (propertyName, propertyValue){
      var db = JSON.parse(localStorage.getItem(this.dbName));
      db[propertyName] = propertyValue;
      localStorage.setItem(this.dbName, JSON.stringify(db));
};

paradox.Database.localStorage.prototype.remove = function(propertyName){
  var db = JSON.parse(localStorage.getItem(this.dbName));
  delete db[propertyName];
  localStorage.setItem(this.dbName, JSON.stringify(db));
}

paradox.Database.localStorage.prototype.drop = function(){
  localStorage.removeItem(this.dbName);
}
