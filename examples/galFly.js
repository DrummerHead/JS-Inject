/* -  This is a javascript snippet to be used with
      http://mcdlr.com/js-inject/             - */


/* -  galFly                                                    - *\
|* -  Render linked images from current page, move with j & k,  - *|
|* -  increase image size by clicking the image                 - *|
\* -  v2.6                                                      - */




var imgs = Array.prototype.filter.call(document.links, function(val){
    return /\.(jpe?g|gif|png|tiff|svg)(\?.*)?$/i.test(val.href);
  });

var noRepeats = [];

for(var i = 0; i < imgs.length; i++){
  if(imgs[i].href !== imgs[(i+1) % imgs.length].href){
    noRepeats.push(imgs[i])
  }
}

var lis = noRepeats.map(function(val, i){
  return '<li><img id="a' + i + '" src="' + val.href + '" alt="' + val.href + '"><a href="' + val.href + '">' + val.textContent + '</a></li>';
  });

var stringified = JSON.stringify(lis).replace(/\\/g, '\\\\').replace(/'/g, '\\\'');

var css = "body{margin:0;font-family:sans-serif;text-align:center}#gal{padding:1em;margin:0;list-style-type:none}#gal li{min-height:"+innerHeight+"px;padding:4em 0}#gal img{display:block;max-width:100%;margin:0 auto;font-size:3em;text-align:center;color:#ccc}#gal a{display:inline-block;padding:1em;text-decoration:none;color:#ccc}#gal a:hover{color:gray;text-decoration:underline}#move{position:fixed;bottom:0;left:0;width:5em;padding:0;margin:0;font-size:1.4em;list-style-type:none;color:#888;-webkit-user-select:none;-moz-user-select:none;user-select:none}#move li{float:left;width:2.75em;height:2em;line-height:2em;cursor:pointer}#move li:hover{color:#444}#down,#up{text-indent:.5em}#down{clear:left}#move #zoom{width:2em;text-indent:-.5em}#more{padding:1em;cursor:pointer;background-color:#eee;color:#888;font-size:1.5em;font-weight:700}#more:hover{background-color:#ddd;color:#777}#end{background-color:#ffb1ba;height:10em}";

var js = '!function(t){var e=function(e){return t.querySelector(e)},n=function(){return{defaultShift:25,currentImage:0,minImage:0,maxImage:this.defaultShift,init:function(t){var n=this;n.galWidth=parseInt(getComputedStyle(t).getPropertyValue("width"),10),onkeypress=function(t){106==t.charCode?n.goToImage(!0):107==t.charCode?n.goToImage(!1):108==t.charCode&&n.zoom(e("#a"+n.currentImage))},e("#down").addEventListener("click",function(){n.goToImage(!0)}),e("#up").addEventListener("click",function(){n.goToImage(!1)}),e("#zoom").addEventListener("click",function(){n.zoom(e("#a"+n.currentImage))})},goToImage:function(t){t?this.currentImage+1>=this.maxImage?scrollTo(0,scrollMaxY):scrollTo(0,e("#a"+ ++this.currentImage).offsetTop-5):this.currentImage-1>=this.minImage&&scrollTo(0,e("#a"+--this.currentImage).offsetTop-5)},zoom:function(t){var e=t.currentTarget||t,n=e.naturalWidth*(e.ct+1);n<=this.galWidth?(e.ct++,e.setAttribute("style","width:"+n+"px;height:"+e.naturalHeight*e.ct+"px")):(e.ct=0,e.setAttribute("style","width:100%"))},bindResize:function(t){for(var e=0;e<t.length;e++){var n=t.item(e);n.ct=1,n.addEventListener("click",this.zoom.bind(this))}}}}(),i=e("#gal"),r=JSON.parse(\''+stringified+'\'),a=n.defaultShift,o=function(c){var s=i.innerHTML="";if(n.currentImage=n.minImage=c,r.length>a){for(var u=c;u<c+n.defaultShift;u++)s+=r[u];a+=n.defaultShift,n.maxImage=c+n.defaultShift,i.insertAdjacentHTML("afterEnd",\'<div id="more">Load more</div>\'),e("#more").addEventListener("click",function(){scrollTo(0,0),this.outerHTML="",o(c+n.defaultShift)})}else{for(var u=c;u<r.length;u++)s+=r[u];n.maxImage=r.length,i.insertAdjacentHTML("afterEnd",\'<div id="end"></div>\')}i.innerHTML=s,n.bindResize(t.querySelectorAll("img"))};n.init(i),o(0)}(document)';

var html = "<!doctype html><html><head><title>galFly</title><meta charset='utf-8'><style>" +
  css +
  "</style></head><body><ul id='gal'></ul><ol id='move'><li id='up'>&#9650;</li><li id='down'>&#9660;</li><li id='zoom'>&#128269;</li></ol><script>" +
  js +
  "</script></body></html>";

// window.open('data:text/html,' + encodeURIComponent(html));
document.write(html);
document.close();




/* -  /galFly  - */
