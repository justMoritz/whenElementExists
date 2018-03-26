/**
 * Listen until $selector exists, then runs callback function
 */
var whenElementExists = function(selector, callback){
    var intervalId = setInterval(function() {
      // $internalSelector = $(selector);
      if ( $(selector.selector).length > 0 ){
        clearInterval(intervalId);
        callback();
      }
    }, 250);
};