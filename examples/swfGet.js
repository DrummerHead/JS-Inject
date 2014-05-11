/* -  This is a javascript snippet to be used with
      http://mcdlr.com/js-inject/             - */


/* -  swfGet                                - *\
|* -  Open swf on the page on new tab       - *|
|* -  Handy for playing games in full view  - *|
\* -  v1.0                                  - */


(function(window, document, undefined){




var $ = function(selector){
  return Array.prototype.slice.call(document.querySelectorAll(selector));
};

var objects = $('object');

if(objects.length){
  objects.forEach(function(element){
    var paramValue = element.querySelector('param[name="movie"]') ? element.querySelector('param[name="movie"]').getAttribute('value') : undefined;
    var embed = element.querySelector('embed') ? element.querySelector('embed').getAttribute('src') : undefined;
    var data = element.getAttribute('data');
    window.open(embed || paramValue || data);
  });
}




})(window, document);



/* -  /swfGet  - */
