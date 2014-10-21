/* -  This is a javascript snippet to be used with
      http://mcdlr.com/js-inject/             - */


/* -  layout-compare - any site                       - *\
|* -  Overlay an image to compare layout positioning  - *|
\* -  v1.0                                            - */


(function(window, document, undefined){
  'use strict';

  var randomId = 'layout-compare-' + Math.random().toString(36).substr(2, 9);
  var imageStyles = 'position: absolute; top: 0; left: 0; opacity: .5';

  var createImageString = function(imageSrc, randomId, imageStyles){
    return '<img id="' + randomId +
      '" src="' + imageSrc +
      '" style="' + imageStyles +
      '" alt="">';
  };

  var askForImageSrc = function(){
    var src = prompt('Full URL of image source');
    return src;
  };

  var injectImage = function(imageSrc, randomId, imageStyles){
    document.body.insertAdjacentHTML(
      'beforeend',
      createImageString(imageSrc, randomId, imageStyles)
    );
  };

  injectImage(askForImageSrc(), randomId, imageStyles);

})(window, document);


/* -  /layout-compare  - */
