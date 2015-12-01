/**
* Paradox JS
*     Version: 0.0.1
*     Authers:
*           Michael Thomas
*
*
**/
'use strict';
(function(global) {
  var paradox = {
    VERSION: '0.0.1'
  };
  // check if jquery is defined before paradox
  paradox.JQVERSION = typeof $ !== 'undefined' ?  $.fn.jquery : 'Jquery is not defined';
  if (global.paradox) {
    throw new Error('paradox has already been defined');
  } else {
    global.paradox = paradox;
  }
})(typeof window === 'undefined' ? this : window);
