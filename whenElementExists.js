/**
 * Listen until $selector exists, then runs callback function
 * 
 * @param  {jQuery Selector} selector - This is the selector you are waiting for to exist
 * @param  {Function} callback - This is the function that runs when it exists
 */
var whenElementExists = function(selector, callback){
  var intervalId = setInterval(function() {
    if ( $(selector.selector).length > 0 ){
      clearInterval(intervalId);
      callback();
    }
  }, 250);
};