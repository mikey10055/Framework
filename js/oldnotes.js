//



// 
// paradox.Database.indexedDB.prototype.createTable = function (tableName, ArrayofValues,callback){
// var _this = this;
//   var request = indexedDB.open(this.dbName, this.dbVersion);
//   request.onerror = function(event) {
//     console.log(event.target.error);
//     return event.target.error;
//   }
//   request.onupgradeneeded = function(event){
//     var db = event.target.result;
//     this.busy = true;
//     var objectStore = db.createObjectStore(tableName, { keyPath: ArrayofValues[0][0] });
//     for (var i = 1; i < ArrayofValues.length; i++) {
//       var column = ArrayofValues[i];
//         objectStore.createIndex(column[0], column[0], { unique: column[1] });
//     }
//     objectStore.transaction.oncomplete = function(event) {
//       console.log('done');
//       _this.dbTables.push(tableName);
//       _this.busy = false;
//       callback();
//     }
//   }
//
// };
//
// paradox.Database.indexedDB.prototype.insert = function(tablename,ArrayofValues){
//   console.log(this.busy);
//   var request = indexedDB.open(this.dbName, this.dbVersion);
//   console.log(request);
//   request.onblocked= function(event) {
//     console.log('blocked');
//     console.log(event);
//   }
//   request.onsuccess= function(event) {
//     console.log('succsess');
//     console.log(event);
//   }
//   request.onerror = function(event) {
//     console.log('error');
//     console.log(event);
//   }
//   request.onupgradeneeded = function(event){
//     console.log('onupgradeneeded');
//     console.log(event);
//     var db = event.target.result;
//     var transaction = event.target.transaction;
//     // var objectStore = db.transaction(tablename, "readwrite").objectStore(tablename);
//     // var as = transaction.objectStore(tablename).add(ArrayofValues[0]);
//     // as.onsuccess = function() {console.log('Success!');};
//
//     for (var i in ArrayofValues) {
//       var as = transaction.objectStore(tablename).add(ArrayofValues[i]);
//       as.onsuccess = function() {console.log('Success!');};
//       //objectStore.add(ArrayofValues[i]);
//     }
//   }
//
// }





// paradox.Database.indexedDB.prototype.update = function(){
//   this.version += 1;
//   this.open(function(event){
//     console.log(event);
//   })
// }

// function CreateObjectStore(dbName, storeName) {
//     var request = indexedDB.open(dbName);
//     request.onsuccess = function (e){
//         var database = e.target.result;
//         var version =  parseInt(database.version);
//         database.close();
//         var secondRequest = indexedDB.open(dbName, version+1);
//         secondRequest.onupgradeneeded = function (e) {
//             var database = e.target.result;
//             var objectStore = database.createObjectStore(storeName, {
//                 keyPath: 'id'
//             });
//         };
//         secondRequest.onsuccess = function (e) {
//             e.target.result.close();
//         }
//     }
// }

// paradox.Database.prototype.getDB = function(){
//   switch(this.dbType) {
//     case 'localStorage':
//       return JSON.parse(localStorage.getItem(this.dbName));
//     break;
//     case 'sessionStorage':
//
//     break;
//     case 'indexedDB':
//
//     break;
//   }
// }
//
// paradox.Database.prototype.set = function (propertyName, propertyValue) {
//   switch(this.dbType) {
//     case 'localStorage':
//       var db = JSON.parse(localStorage.getItem(this.dbName));
//       db[propertyName] = propertyValue;
//       localStorage.setItem(this.dbName, JSON.stringify(db));
//       return true;
//     break;
//     case 'sessionStorage':
//       var db = JSON.parse(sessionStorage.getItem(this.dbName));
//       db[propertyName] = propertyValue;
//       sessionStorage.setItem(this.dbName, JSON.stringify(db));
//       return true;
//     break;
//     case 'indexedDB':
//
//     break;
//   }
//
// };
// function browserCompatible(type) {
//   var notFound = false;
//   switch(type) {
//     case 'localStorage':
//       if (typeof window.localStorage === 'undefined') {
//         notFound = true;
//       }
//     break;
//     case 'sessionStorage':
//     if (typeof window.sessionStorage === 'undefined') {
//       notFound = true;
//     }
//     break;
//     case 'indexedDB':
//     if (typeof window.indexedDB === 'undefined') {
//       notFound = true;
//     }
//     break;
//     default:
//       throw new Error('no storage type of ' + type + ' found');
//     break;
//   }
//   return notFound;
// }
// if (!browserCompatible(type)) {
//   this.dbName = 'paraDB-'+name;
//   this.dbType = type;
//
//   setUpStorage(this.dbName,this.dbType);
//
// } else {
//   console.error('Database type of ' + type + ' is not defined in this browser');
// }

// function setUpStorage(name,type) {
//   switch(type) {
//     case 'localStorage':
//       localStorage.setItem(name,'{}');
//     break;
//     case 'sessionStorage':
//       sessionStorage.setItem(name,'{}');
//     break;
//     case 'indexedDB':
//     break;
//   }
// }

// var NS = {};
// NS.ahh = (function(){
//   // Private
//   var whateveryouwishboss = false;
//
//   // Public
//   var ahh = function(x,y,w,h){
//     this.x = x;
//     this.y = y;
//     this.w = w;
//     this.h = h;
//   };
//   ahh.prototype = {
//     draw: function(){
//       //... Im on prototype ahh
//     }
//   }
//   return ahh;
// })();
//
//
// // Class List
// NS.Classes = {
//   Shape: (function(){
//     // Private
//     var whateveryouwishboss = false;
//
//     // Public
//     var Shape = function(x,y,w,h){
//       this.x = x;
//       this.y = y;
//       this.w = w;
//       this.h = h;
//     };
//     Shape.prototype = {
//       draw: function(){
//         //... Im on prototype Shape
//       }
//     }
//     return Shape;
//   })(),
//   Person: (function(){
//     //....
//   })()
// }
//
// /////// Let the games begin
//
// var rect = new NS.Classes.Shape(0,0,10,10);
// rect.draw()
//

//
//
//
// var para = (function () {
//     function Para (els) {
//           for(var i = 0; i < els.length; i++ ) {
//         this[i] = els[i];
//     }
//     this.length = els.length;
//     }
//
//     var para = {
//       get: function (selector) {
//           var els;
//           if (typeof selector === "string") {
//               els = document.querySelectorAll(selector);
//           } else if (selector.length) {
//               els = selector;
//           } else {
//               els = [selector];
//           }
//           return new Para(els);
//       }
//     };
//
//     return para;
// }());
//
//
//
// this.paradox = this.paradox || {};
//
// /**
// * @example of Object with private methods
// **/
//
// paradox.canvas = {};
//
// paradox.canvas = function(HtmlCanvasElement){
//
//     var ele = HtmlCanvasElement
//     ele.fps = 60;
//     ele.tick = function(frame){
//       var frame = frame || function(){};
//       clearTimeout(ele.timer);
//       frame();
//       ele.timer = setTimeout(function(){
//         ele.tick(frame);
//       },ele.fps);
//     }
//
//     return ele;
// };
