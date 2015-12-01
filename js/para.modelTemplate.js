/**
* Paradox.modelTemplate JS
*     Version: 0.0.1
*     Authers:
*           Michael Thomas
*
*
**/
'use strict';
paradox.modelName = (function() {
  var modelName = function(selector) {
    this.ele = document.querySelector(selector);
  }

  // modelName.prototype = {
  //   ele: function(){
  //     return this.ele;
  //   }
  // }

  return modelName;

})();

paradox.modelName.prototype.example = function () {
  // example
};
