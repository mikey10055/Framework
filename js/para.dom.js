/**
* Paradox.dom JS
*     Version: 0.0.1
*     Authers:
*           Michael Thomas
*     notes:
*           -Name might change
*           -basic dom
*
**/
'use strict';
paradox.dom = (function(){
  var Dom = function (selector) {
      var selector = document.querySelectorAll(selector);
      this.length = selector.length;

      for (var i = 0; i < this.length; i++) {
        this[i] = selector[i];
      }

      return this;
  };
  return Dom;
})();

paradox.dom.prototype.html = function (string) {
  for (var i = 0; i < this.length; i++) {
    this[i].innerHTML = string;
  }
  return this;
}
paradox.dom.prototype.bg = function(color) {
  for (var i = 0; i < this.length; i++) {
    this[i].style.backgroundColor = color;
  }
  return this;
}

var $P = function (selector) {
    return new paradox.dom(selector);
};
