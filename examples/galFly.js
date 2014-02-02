/* -  This is a javascript snippet to be used with
      http://mcdlr.com/js-inject/             - */


/* -  galFly                                                    - *\
|* -  Render linked images from current page, move with j & k,  - *|
|* -  increase image size by clicking the image                 - *|
\* -  v2.3                                                      - */




var onlyLinks = Array.prototype.filter.call(document.querySelectorAll('a'), function(val, i, harry){
    return /\.(jpe?g|gif|png|tiff|svg)$/i.test(val.href);
  });

var lis = Array.prototype.map.call(onlyLinks, function(val, i, harry){
    return '<li><img id="a' + i + '" src="' + val.href + '" alt="' + val.href + '"><a href="' + val.href + '">' + val.textContent + '</a></li>';
  });

var stringified = JSON.stringify(lis).replace(/\\/g, '\\\\').replace(/'/g, '\\\'');


var css = "body{margin:0;font-family:sans-serif;text-align:center}#gal{padding:1em;margin:0;list-style-type:none}#gal li{padding:4em 0}#gal img{display:block;max-width:100%;margin:0 auto;font-size:3em;text-align:center;color:#ccc}#gal a{display:inline-block;padding:1em;text-decoration:none;color:#ccc}#gal a:hover{color:#808080;text-decoration:underline}#move{position:fixed;bottom:1em;left:1em;padding:0;margin:0;font-size:1.4em;list-style-type:none;color:#888}#up,#down{cursor:pointer;padding:.2em}#load-more{display:block;padding:1em;cursor:pointer;background-color:#eee;color:#888;font-size:1.5em;font-weight:bold}#load-more:hover{background-color:#ddd;color:#777}";

// var imageLinks = JSON.parse('" + stringified +"');
// var script = "
var script ='!function(t,e){var n=function(t){return e.getElementById(t)},r=n("gal"),o=n("up"),i=n("down"),a=parseInt(t.getComputedStyle(r).getPropertyValue("width"),10),l=JSON.parse(\''+stringified+'\'),c=25,s=c,d=0,u=0,f=c,h=function(e){if(e>=f)t.scrollTo(0,77777);else if(e>=u){var r=n("a"+e);t.scrollTo(0,r.offsetTop-5)}},m=function(t){for(var e=0;e<t.length;e++){var n=t.item(e);n.ct=0,n.addEventListener("click",function(t){var e=t.currentTarget;e.ct++;var n=e.naturalWidth*(e.ct+1);a>=n?e.setAttribute("style","width:"+n+"px;height:"+e.naturalHeight*(e.ct+1)+"px"):e.setAttribute("style","width:100%"),3==e.ct&&(e.ct=-1)})}},p=function(o){r.innerHTML="";var i="";if(d=o,u=o,l.length>s){for(var a=o;o+c>a;a++)i+=l[a];s+=c,f=o+c,r.insertAdjacentHTML("afterEnd",\'<strong id="load-more">Load more</strong>\'),n("load-more").addEventListener("click",function(){t.scrollTo(0,0),this.outerHTML="",p(o+c)})}else{for(var a=o;a<l.length;a++)i+=l[a];f=l.length}r.innerHTML=i,m(e.querySelectorAll("img"))};t.onkeypress=function(t){106==t.charCode?h(++d):107==t.charCode&&h(--d)},o.addEventListener("click",function(){h(--d)}),i.addEventListener("click",function(){h(++d)}),p(0)}(window,document)';
// ";

var html = "<!doctype html><html><head><title>galFly</title><meta charset='utf-8'><style>" +
  css +
  "</style></head><body><ul id='gal'>" +
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
#gal {
  padding: 1em;
  margin: 0;
  list-style-type: none;
}
#gal li {
  padding: 4em 0
}
#gal img {
  display: block;
  max-width: 100%;
  margin: 0 auto;
  font-size: 3em;
  text-align: center;
  color: #ccc;
}
#gal a {
  display: inline-block;
  padding: 1em;
  text-decoration: none;
  color: #ccc;
}
#gal a:hover {
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
(function(window, document){


var $ = function(element){
  return document.getElementById(element)
};
var $gal = $('gal');
var $up = $('up');
var $down = $('down');
var galWidth = parseInt(window.getComputedStyle($gal).getPropertyValue('width'), 10);
var imageLinks = JSON.parse('');
var shift = 25;
var increase = shift;
var currentImage = 0;
var minImage = 0;
var maxImage = shift;

var goToImage = function(id){
  if(id >= maxImage){
    window.scrollTo(0, 77777);
  }
  else if(id >= minImage){
    var el = $('a' + id);
    window.scrollTo(0, el.offsetTop - 5);
  }
};

var imagesResize = function(imgs){
  for(var i = 0; i < imgs.length; i++){
    var I = imgs.item(i);
    I.ct = 0;
    I.addEventListener('click', function(el){
      var J = el.currentTarget;
      J.ct++;
      var newWidth = J.naturalWidth * (J.ct + 1);
      if(newWidth <= galWidth){
        J.setAttribute('style', 'width:' + newWidth + 'px;height:' + J.naturalHeight * (J.ct + 1) + 'px');
      }
      else{
        J.setAttribute('style', 'width:100%');
      }
      if(J.ct == 3){
        J.ct = -1;
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
    $('load-more').addEventListener('click', function(){
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

$up.addEventListener('click', function(){
  goToImage(--currentImage);
});
$down.addEventListener('click', function(){
  goToImage(++currentImage);
});

inject(0);


})(window, document)
/* */




/* -  /galFly  - */
