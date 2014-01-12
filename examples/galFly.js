/* -  These is a javascript snippet to be used with
      http://mcdlr.com/js-inject/              - */


/* -  galFly                                                    - *\
|* -  Render linked images from current page, move width j & k  - *|
\* -  v2.0                                                      - */


var links = document.querySelectorAll('a');
var vacuna = "<ul id='vitrum'>";
var imageIndex = 0;

var imgo = function(leenk, text, id){
  return "<li><img id='" + id + "' src='" + leenk + "'><a href='" + leenk + "'>" + text + "</a></li>";
};

for(var i = 0; i < links.length; i++){
  var I = links.item(i);
  var href = I.getAttribute('href');
  if(/\.(jpe?g|gif|png|tiff|svg)$/.test(href)){
    vacuna += imgo(href, I.textContent, "a" + ++imageIndex);
  }
}

var css = "body { margin: 0; background-color: #ddd; font-family: sans-serif; } #vitrum { padding: 1em; margin: 0; border-bottom: 1.4em solid #977; list-style-type: none; text-align: center; } #vitrum li { padding: 4em 0 } #vitrum img { display: block; max-width: 100%; margin: 0 auto; } #vitrum a { display: inline-block; margin: 1em 0; color: #777; text-decoration: none; } #vitrum a:hover { text-decoration: underline; } #move { position: fixed; bottom: 1em; left: 1em; padding: 0; margin: 0; font-size: 1.4em; list-style-type: none; color: #888; } #up, #down { cursor: pointer; padding: .2em; }";
var script = "var up = document.getElementById('up'); var down = document.getElementById('down'); var imgs = document.querySelectorAll('img'); var currentImage = 0; function goToImage(id){ var el = document.getElementById('a' + id); window.scrollTo(0, el.offsetTop - 5); }; window.onkeypress = function(e){ if(e.charCode == 106){ goToImage(++currentImage); } else if(e.charCode == 107){ goToImage(--currentImage); } }; up.addEventListener('click', function(){ goToImage(--currentImage); }); down.addEventListener('click', function(){ goToImage(++currentImage); }); for(var i = 0; i < imgs.length; i++){ var I = imgs.item(i); I.clickedTimes = 0; I.addEventListener('click', function(el){ var J = el.currentTarget; if(J.clickedTimes == 0){ J.setAttribute('style', 'width: ' + J.naturalWidth * 2 + 'px; height: ' + J.naturalHeight * 2 + 'px;'); J.clickedTimes++; } else if(J.clickedTimes == 1){ J.setAttribute('style', 'width: ' + J.naturalWidth * 3 + 'px; height: ' + J.naturalHeight * 3 + 'px;'); J.clickedTimes++; } else if(J.clickedTimes == 2){ J.setAttribute('style', 'width: ' + J.naturalWidth * 4 + 'px; height: ' + J.naturalHeight * 4 + 'px;'); J.clickedTimes++; } else { J.setAttribute('style', 'width: ' + J.naturalWidth + 'px; height: ' + J.naturalHeight + 'px;'); J.clickedTimes = 0; } }); }";

document.write("<!doctype html><html><head><title>Image gallery</title><meta charset='utf-8'><style>" +
  css +
  "</style></head><body>" +
  vacuna +
  "</ul><ol id='move'><li id='up'>&#9650;</li><li id='down'>&#9660;</li></ol><script>" +
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
  padding: 1em;
  margin: 0;
  border-bottom: 1.4em solid #977;
  list-style-type: none;
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
#move {
  position: fixed;
  bottom: 1em;
  left: 1em;
  padding: 0;
  margin: 0;
  font-size: 1.4em;
  list-style-type: none;
  color: #888;
}
#up,
#down {
  cursor: pointer;
  padding: .2em;
}
/* */

/* * /
var up = document.getElementById('up');
var down = document.getElementById('down');
var imgs = document.querySelectorAll('img');
var currentImage = 0;
function goToImage(id){
  var el = document.getElementById('a' + id);
  window.scrollTo(0, el.offsetTop - 5);
};
window.onkeypress = function(e){
  if(e.charCode == 106){
    goToImage(++currentImage);
  }
  else if(e.charCode == 107){
    goToImage(--currentImage);
  }
};
up.addEventListener('click', function(){
  goToImage(--currentImage);
});
down.addEventListener('click', function(){
  goToImage(++currentImage);
});
for(var i = 0; i < imgs.length; i++){
  var I = imgs.item(i);
  I.clickedTimes = 0;
  I.addEventListener('click', function(el){
    var J = el.currentTarget;
    if(J.clickedTimes == 0){
      J.setAttribute('style', 'width: ' + J.naturalWidth * 2 + 'px; height: ' + J.naturalHeight * 2 + 'px;');
      J.clickedTimes++;
    }
    else if(J.clickedTimes == 1){
      J.setAttribute('style', 'width: ' + J.naturalWidth * 3 + 'px; height: ' + J.naturalHeight * 3 + 'px;');
      J.clickedTimes++;
    }
    else if(J.clickedTimes == 2){
      J.setAttribute('style', 'width: ' + J.naturalWidth * 4 + 'px; height: ' + J.naturalHeight * 4 + 'px;');
      J.clickedTimes++;
    }
    else {
      J.setAttribute('style', 'width: ' + J.naturalWidth + 'px; height: ' + J.naturalHeight + 'px;');
      J.clickedTimes = 0;
    }
  });
}

/* */


/* -  /galFly  - */
