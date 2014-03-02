/* -  This is a javascript snippet to be used with
      http://mcdlr.com/js-inject/             - */


/* -  showAlt                        - *\
|* -  Show alt text of img elements  - *|
\* -  v0.1                           - */


(function(document){

document.querySelector('head').insertAdjacentHTML('beforeEnd','<style>.alt-title{margin:0 0 2em !important;color:#333 !important;text-shadow:1px 1px 0 #fff !important}</style>');

var imgs = Array.prototype.slice.call(document.querySelectorAll('img'));

imgs.forEach(function(val, i, arr){
  var alt = val.getAttribute('alt');
  var title = val.getAttribute('title');
  if(alt){
    val.insertAdjacentHTML('afterEnd','<p class="alt-title">alt = &#8220;'+alt+'&#8221;</p>');
  }
  if(title){
    val.insertAdjacentHTML('afterEnd','<p class="alt-title">title = &#8220;'+title+'&#8221;</p>');
  }
});

})(document)


/* -  /Sitename  - */
