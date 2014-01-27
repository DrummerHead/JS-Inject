/* -  This is a javascript snippet to be used with
      http://mcdlr.com/js-inject/             - */


/* -  galFly                                                    - *\
|* -  Render linked images from current page, move with j & k,  - *|
|* -  increase image size by clicking the image                 - *|
\* -  v2.2                                                      - */




var onlyLinks = Array.prototype.filter.call(document.querySelectorAll('a'), function(val, i, harry){
    return /\.(jpe?g|gif|png|tiff|svg)$/.test(val.href);
  });

var lis = Array.prototype.map.call(onlyLinks, function(val, i, harry){
    return '<li><img id="a' + i + '" src="' + val.href + '" alt="' + val.href + '"><a href="' + val.href + '">' + val.textContent + '</a></li>';
  });

var stringified = JSON.stringify(lis).replace(/\\/g, '\\\\').replace(/'/g, '\\\'');


var css = "body{margin:0;font-family:sans-serif;text-align:center}#vitrum{padding:1em;margin:0;list-style-type:none}#vitrum li{padding:4em 0}#vitrum img{display:block;max-width:100%;margin:0 auto;font-size:3em;text-align:center;color:#ccc}#vitrum a{display:inline-block;padding:1em;text-decoration:none;color:#ccc}#vitrum a:hover{color:#808080;text-decoration:underline}#move{position:fixed;bottom:1em;left:1em;padding:0;margin:0;font-size:1.4em;list-style-type:none;color:#888}#up,#down{cursor:pointer;padding:.2em}#load-more{display:block;padding:1em;cursor:pointer;background-color:#eee;color:#888;font-size:1.5em;font-weight:bold}#load-more:hover{background-color:#ddd;color:#777}";

// var imageLinks = JSON.parse('" + stringified +"');
// var script = "
var script = "var $gal=document.getElementById('vitrum');var $up=document.getElementById('up');var $down=document.getElementById('down');var imageLinks=JSON.parse('"+stringified+"');var shift=25;var increase=shift;var currentImage=0;var minImage=0;var maxImage=shift;var goToImage=function(id){if(id>=maxImage){window.scrollTo(0,77777);}else if(id>=minImage){var el=document.getElementById('a'+id);window.scrollTo(0,el.offsetTop-5);}};var imagesResize=function(imgs){for(var i=0;i<imgs.length;i++){var I=imgs.item(i);I.clickedTimes=0;I.addEventListener('click',function(el){var J=el.currentTarget;J.clickedTimes++;J.setAttribute('style','width: '+J.naturalWidth*(J.clickedTimes+1)+'px; height: '+J.naturalHeight*(J.clickedTimes+1)+'px;');if(J.clickedTimes==3){J.clickedTimes=-1;}});}};var inject=function(start){$gal.innerHTML='';var load='';currentImage=start;minImage=start;if(imageLinks.length>increase){for(var i=start;i<start+shift;i++){load+=imageLinks[i];}increase+=shift;maxImage=start+shift;$gal.insertAdjacentHTML('afterEnd','<strong id=\"load-more\">Load more</strong>');document.getElementById('load-more').addEventListener('click',function(){window.scrollTo(0,0);this.outerHTML='';inject(start+shift);});}else{for(var i=start;i<imageLinks.length;i++){load+=imageLinks[i];}maxImage=imageLinks.length;}$gal.innerHTML=load;imagesResize(document.querySelectorAll('img'));};window.onkeypress=function(e){if(e.charCode==106){goToImage(++currentImage);}else if(e.charCode==107){goToImage(--currentImage);}};up.addEventListener('click',function(){goToImage(--currentImage);});down.addEventListener('click',function(){goToImage(++currentImage);});inject(0);";
// ";

var html = "<!doctype html><html><head><title>Image gallery</title><meta charset='utf-8'><style>" +
  css +
  "</style></head><body><ul id='vitrum'>" +
  "</ul><ol id='move'><li id='up'>&#9650;</li><li id='down'>&#9660;</li></ol><script>" +
  script +
  "</script></body></html>";

document.write(html);
document.close();

/* * /
body {
  margin: 0;
  font-family: sans-serif;
  text-align: center;
}
#vitrum {
  padding: 1em;
  margin: 0;
  list-style-type: none;
}
#vitrum li {
  padding: 4em 0
}
#vitrum img {
  display: block;
  max-width: 100%;
  margin: 0 auto;
  font-size: 3em;
  text-align: center;
  color: #ccc;
}
#vitrum a {
  display: inline-block;
  padding: 1em;
  text-decoration: none;
  color: #ccc;
}
#vitrum a:hover {
  color: #808080;
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
#load-more {
  display: block;
  padding: 1em;
  cursor: pointer;
  background-color: #eee;
  color: #888;
  font-size: 1.5em;
  font-weight: bold;
}
#load-more:hover {
  background-color: #ddd;
  color: #777;
}
/* */


/* * /
var $gal = document.getElementById('vitrum');
var $up = document.getElementById('up');
var $down = document.getElementById('down');
var imageLinks = JSON.parse('');
var shift = 25;
var increase = shift;
var currentImage = 0;
var minImage = 0;
var maxImage = shift;

var goToImage = function(id){
  if(id >= maxImage){
    window.scrollTo(0, 77777777777);
  }
  else if(id >= minImage){
    var el = document.getElementById('a' + id);
    window.scrollTo(0, el.offsetTop - 5);
  }
};

var imagesResize = function(imgs){
  for(var i = 0; i < imgs.length; i++){
    var I = imgs.item(i);
    I.clickedTimes = 0;
    I.addEventListener('click', function(el){
      var J = el.currentTarget;
      J.clickedTimes++;
      J.setAttribute('style', 'width: ' + J.naturalWidth * (J.clickedTimes + 1) + 'px; height: ' + J.naturalHeight * (J.clickedTimes + 1) + 'px;');
      if(J.clickedTimes == 3){
        J.clickedTimes = -1;
      }
    });
  }
};

var inject = function(start){
  $gal.innerHTML = '';
  var load = '';
  currentImage = start;
  minImage = start;

  if(imageLinks.length > increase){
    for(var i = start; i < start + shift; i++){
      load += imageLinks[i];
    }
    increase += shift;
    maxImage = start + shift;

    $gal.insertAdjacentHTML('afterEnd', '<strong id=\"load-more\">Load more</strong>');
    document.getElementById('load-more').addEventListener('click', function(){
      window.scrollTo(0, 0);
      this.outerHTML = '';
      inject(start + shift);
    });
  }
  else {
    for(var i = start; i < imageLinks.length; i++){
      load += imageLinks[i];
    }
    maxImage = imageLinks.length;
  }

  $gal.innerHTML = load;
  imagesResize(document.querySelectorAll('img'));
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

inject(0);
/* */




/* -  /galFly  - */
