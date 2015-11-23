
/**
* Paradox.Database.sessionStorage JS
*     Version: 0.0.1
*     Authers:
*           Michael Thomas
*
*
**/
paradox.Database = paradox.Database || {};
paradox.Database.sessionStorage = (function() {

  var SessionStorage = function(name) {
    if (typeof window.sessionStorage !== 'undefined'){
          this.dbName = 'ParaDB-' + name;
          sessionStorage.setItem(this.dbName,'{}');
    }
  }

  return SessionStorage;
})();

paradox.Database.sessionStorage.prototype.getDB = function(){
  return JSON.parse(sessionStorage.getItem(this.dbName));
}

paradox.Database.sessionStorage.prototype.set = function (propertyName, propertyValue){
      var db = JSON.parse(sessionStorage.getItem(this.dbName));
      db[propertyName] = propertyValue;
      sessionStorage.setItem(this.dbName, JSON.stringify(db));
};

paradox.Database.sessionStorage.prototype.remove = function(propertyName){
  var db = JSON.parse(sessionStorage.getItem(this.dbName));
  delete db[propertyName];
  sessionStorage.setItem(this.dbName, JSON.stringify(db));
}

paradox.Database.sessionStorage.prototype.drop = function(){
  sessionStorage.removeItem(this.dbName);
}
