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

var css = "body{margin:0;font-family:sans-serif;text-align:center}#gal{padding:1em;margin:0;list-style-type:none}#gal li{min-height:"+innerHeight+"px;padding:4em 0}#gal img{display:block;max-width:100%;margin:0 auto;font-size:3em;text-align:center;color:#ccc}#gal a{display:inline-block;padding:1em;text-decoration:none;color:#ccc}#gal a:hover{color:gray;text-decoration:underline}#move{position:fixed;bottom:0;left:0;width:5em;padding:0;margin:0;font-size:1.4em;list-style-type:none;color:#888}#move li{float:left;width:2.75em;height:2em;line-height:2em;cursor:pointer}#move li:hover{color:#444}#down,#up{text-indent:.5em}#down{clear:left}#move #zoom{width:2em;text-indent:-.5em}#load-more{display:block;padding:1em;cursor:pointer;background-color:#eee;color:#888;font-size:1.5em;font-weight:700}#load-more:hover{background-color:#ddd;color:#777}";

// var script = "
var script = '!function(t){var e=function(e){return t.getElementById(e)},n=e("gal"),r=parseInt(getComputedStyle(n).getPropertyValue("width"),10),i=JSON.parse(\''+stringified+'\'),o=25,c=o,a=0,l=0,d=o,s=function(t){if(t>=d)scrollTo(0,77777);else if(t>=l){var n=e("a"+t);scrollTo(0,n.offsetTop-5)}},u=function(t){var e=t.currentTarget||t;e.ct++;var n=e.naturalWidth*(e.ct+1);r>=n?e.setAttribute("style","width:"+n+"px;height:"+e.naturalHeight*(e.ct+1)+"px"):e.setAttribute("style","width:100%"),3==e.ct&&(e.ct=-1)},f=function(t){for(var e=0;e<t.length;e++){var n=t.item(e);n.ct=0,n.addEventListener("click",u)}},g=function(r){n.innerHTML="";var s="";if(a=r,l=r,i.length>c){for(var u=r;r+o>u;u++)s+=i[u];c+=o,d=r+o,n.insertAdjacentHTML("afterEnd",\'<strong id="load-more">Load more</strong>\'),e("load-more").addEventListener("click",function(){scrollTo(0,0),this.outerHTML="",g(r+o)})}else{for(var u=r;u<i.length;u++)s+=i[u];d=i.length}n.innerHTML=s,f(t.querySelectorAll("img"))};onkeypress=function(t){106==t.charCode?s(++a):107==t.charCode&&s(--a)},e("up").addEventListener("click",function(){s(--a)}),e("down").addEventListener("click",function(){s(++a)}),e("zoom").addEventListener("click",function(){u(e("a"+a))}),g(0)}(document);';
// ";

var html = "<!doctype html><html><head><title>galFly</title><meta charset='utf-8'><style>" +
  css +
  "</style></head><body><ul id='gal'>" +
  "</ul><ol id='move'><li id='up'>&#9650;</li><li id='down'>&#9660;</li><li id='zoom'>&#128269;</li></ol><script>" +
  script +
  "</script></body></html>";

document.write(html);
document.close();




/* -  /galFly  - */
