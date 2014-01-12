/* -  These is a javascript snippet to be used with
      http://mcdlr.com/js-inject/              - */


/* -  galFly                                                    - *\
|* -  Render linked images from current page, move width j & k  - *|
\* -  v2.0                                                      - */


var links = document.querySelectorAll('a');
var vacuna = "<ul id='vitrum'>";

var imgo = function(leenk, text, id){
  return "<li><img id='" + id + "' src='" + leenk + "'><a href='" + leenk + "'>" + text + "</a></li>";
};

for(var i = 0; i < links.length; i++){
  var I = links.item(i);
  var li = imgo(I.getAttribute('href'), I.textContent, "a" + i);
  vacuna += li;
}

var css = "body { margin: 0; background-color: #ddd; font-family: sans-serif; } #vitrum { list-style-type: none; padding: 1em; text-align: center; } #vitrum li { padding: 4em 0 } #vitrum img { display: block; max-width: 100%; margin: 0 auto; } #vitrum a { display: inline-block; margin: 1em 0; color: #777; text-decoration: none; } #vitrum a:hover { text-decoration: underline; }";
var script = "var currentImage = 0; function goToImage(id){ var el = document.getElementById('a' + id); window.scrollTo(0, el.offsetTop - 5); } window.onkeypress = function(e){ if(e.charCode == 106){ goToImage(++currentImage); } else if(e.charCode == 107){ goToImage(--currentImage); } }";

document.write("<!doctype html><html><head><title>Image gallery</title><meta charset='utf-8'><style>" +
  css +
  "</style></head><body>" +
  vacuna +
  "</ul><script>" +
  script +
  "</script></body></html>");
document.close();

/* * /
body {
  margin: 0;
  background-color: #ddd;
  font-family: sans-serif;
}
#vitrum {
  list-style-type: none;
  padding: 1em;
  text-align: center;
}
#vitrum li {
  padding: 4em 0
}
#vitrum img {
  display: block;
  max-width: 100%;
  margin: 0 auto;
}
#vitrum a {
  display: inline-block;
  margin: 1em 0;
  color: #777;
  text-decoration: none;
}
#vitrum a:hover {
  text-decoration: underline;
}
/* */

/* * /
var currentImage = 0;
function goToImage(id){
  var el = document.getElementById('a' + id);
  window.scrollTo(0, el.offsetTop - 5);
}
window.onkeypress = function(e){
  if(e.charCode == 106){
    goToImage(++currentImage);
  }
  else if(e.charCode == 107){
    goToImage(--currentImage);
  }
}
/* */


/* -  /galFly  - */
