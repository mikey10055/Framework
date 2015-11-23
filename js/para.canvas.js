/**
* Paradox.Canvas JS
*     Version: 0.0.1
*     Authers:
*           Michael Thomas
*
*
**/

paradox.Canvas = (function() {
  var Canvas = function(selector) {
    this.ele = document.querySelector(selector);
  }

  // Canvas.prototype = {
  //   ele: function(){
  //     return this.ele;
  //   }
  // }

  return Canvas;

})();

paradox.Canvas.prototype.example = function () {
  // example
};
