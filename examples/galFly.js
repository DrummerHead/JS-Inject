/* -  This is a javascript snippet to be used with
      http://mcdlr.com/js-inject/             - */


/* -  galFly                                                    - *\
|* -  Render linked images from current page, move with j & k,  - *|
|* -  increase image size by clicking the image                 - *|
\* -  v2.5                                                      - */




var imgs = Array.prototype.filter.call(document.links, function(val){
    return /\.(jpe?g|gif|png|tiff|svg)$/i.test(val.href);
  });

var noRepeats = [];

for(var i = 0; i < imgs.length; i++){
  if(imgs[i].href !== imgs[(i+1) % imgs.length].href){
    noRepeats.push(imgs[i])
  }
}

var lis = Array.prototype.map.call(noRepeats, function(val, i){
    return '<li><img id="a' + i + '" src="' + val.href + '" alt="' + val.href + '"><a href="' + val.href + '">' + val.textContent + '</a></li>';
  });

var stringified = JSON.stringify(lis).replace(/\\/g, '\\\\').replace(/'/g, '\\\'');

var css = "body{margin:0;font-family:sans-serif;text-align:center}#gal{padding:1em;margin:0;list-style-type:none}#gal li{min-height:"+innerHeight+"px;padding:4em 0}#gal img{display:block;max-width:100%;margin:0 auto;font-size:3em;text-align:center;color:#ccc}#gal a{display:inline-block;padding:1em;text-decoration:none;color:#ccc}#gal a:hover{color:gray;text-decoration:underline}#move{position:fixed;bottom:0;left:0;width:5em;padding:0;margin:0;font-size:1.4em;list-style-type:none;color:#888;-webkit-user-select:none;-moz-user-select:none;user-select:none}#move li{float:left;width:2.75em;height:2em;line-height:2em;cursor:pointer}#move li:hover{color:#444}#down,#up{text-indent:.5em}#down{clear:left}#move #zoom{width:2em;text-indent:-.5em}#more{padding:1em;cursor:pointer;background-color:#eee;color:#888;font-size:1.5em;font-weight:700}#more:hover{background-color:#ddd;color:#777}#end{background-color:#ffb1ba;height:10em}";

// var script = '
var script = '!function(t){var e=function(e){return t.getElementById(e)},n=e("gal"),r=parseInt(getComputedStyle(n).getPropertyValue("width"),10),i=JSON.parse(\''+stringified+'\'),o=25,c=o,a=0,d=0,l=o,s=function(t){if(t>=l)scrollTo(0,77777);else if(t>=d){var n=e("a"+t);scrollTo(0,n.offsetTop-5)}},u=function(t){var e=t.currentTarget||t;e.ct++;var n=e.naturalWidth*(e.ct+1);r>=n?e.setAttribute("style","width:"+n+"px;height:"+e.naturalHeight*(e.ct+1)+"px"):(e.setAttribute("style","width:100%"),e.ct=-1),3==e.ct&&(e.ct=-1)},f=function(t){for(var e=0;e<t.length;e++){var n=t.item(e);n.ct=0,n.addEventListener("click",u)}},v=function(r){n.innerHTML="";var s="";if(a=r,d=r,i.length>c){for(var u=r;r+o>u;u++)s+=i[u];c+=o,l=r+o,n.insertAdjacentHTML("afterEnd",\'<div id="more">Load more</div>\'),e("more").addEventListener("click",function(){scrollTo(0,0),this.outerHTML="",v(r+o)})}else{for(var u=r;u<i.length;u++)s+=i[u];l=i.length,n.insertAdjacentHTML("afterEnd",\'<div id="end"></div>\')}n.innerHTML=s,f(t.querySelectorAll("img"))};onkeypress=function(t){106==t.charCode?s(++a):107==t.charCode&&s(--a)},e("up").addEventListener("click",function(){s(--a)}),e("down").addEventListener("click",function(){s(++a)}),e("zoom").addEventListener("click",function(){u(e("a"+a))}),v(0)}(document)';
// ';

var html = "<!doctype html><html><head><title>galFly</title><meta charset='utf-8'><style>" +
  css +
  "</style></head><body><ul id='gal'></ul><ol id='move'><li id='up'>&#9650;</li><li id='down'>&#9660;</li><li id='zoom'>&#128269;</li></ol><script>" +
  script +
  "</script></body></html>";

document.write(html);
document.close();




/* -  /galFly  - */
