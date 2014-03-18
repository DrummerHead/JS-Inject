/* -  This is a javascript snippet to be used with
      http://mcdlr.com/js-inject/             - */


/* -  Hideliminator - Any website         - *\
|* -  Hide elements on command            - *|
\* -  v2.0                                - */




(function(document){


document.querySelector('head').insertAdjacentHTML('beforeEnd', '<style>.gun-point{outline:.3em solid red}#retirement{position:fixed;top:0;right:0;padding:.5em 1em;z-index:2147483647;color:#fff;background-color:#080}#retirement:hover{outline:none !important;background-color:#2a2;cursor:pointer}</style>');

var bod = document.body;
var targetSuspect = function(event){
  event.target.classList.add('gun-point');
};
var dismissSuspect = function(event){
  event.target.classList.remove('gun-point');
};
var killSuspect = function(event){
  event.preventDefault();
  event.target.parentNode.removeChild(event.target);
};

bod.insertAdjacentHTML('beforeEnd','<div id="retirement">Stop judgement</div>');

bod.addEventListener('mouseover', targetSuspect, false);
bod.addEventListener('mouseout', dismissSuspect, false);
bod.addEventListener('click', killSuspect, false);

document.querySelector('#retirement').addEventListener('click', function(event){
  bod.removeEventListener('mouseover', targetSuspect, false);
  bod.removeEventListener('mouseout', dismissSuspect, false);
  bod.removeEventListener('click', killSuspect, false);
  this.parentNode.removeChild(this);
});


})(document)





/* -  /Hideliminator  - */
