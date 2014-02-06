/* -  This is a javascript snippet to be used with
      http://mcdlr.com/js-inject/             - */


/* -  galFly                                                    - *\
|* -  Render linked images from current page, move with j & k,  - *|
|* -  increase image size by clicking the image                 - *|
\* -  v2.6                                                      - */




var imgs = Array.prototype.filter.call(document.links, function(val){
    return /\.(jpe?g|gif|png|tiff|svg)\??.*$/i.test(val.href);
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

var js = '!function(t){var e=function(e){return t.querySelector(e)},i=function(){return{defaultShift:25,currentImage:0,minImage:0,maxImage:this.defaultShift,init:function(t){var i=this;i.galWidth=parseInt(getComputedStyle(t).getPropertyValue("width"),10),onkeypress=function(t){106==t.charCode?i.goToImage(++i.currentImage):107==t.charCode?i.goToImage(--i.currentImage):108==t.charCode&&i.zoom(e("#a"+i.currentImage))},e("#up").addEventListener("click",function(){i.goToImage(--i.currentImage)}),e("#down").addEventListener("click",function(){i.goToImage(++i.currentImage)}),e("#zoom").addEventListener("click",function(){i.zoom(e("#a"+i.currentImage))})},goToImage:function(t){t>=this.maxImage?scrollTo(0,77777):t>=this.minImage&&scrollTo(0,e("#a"+t).offsetTop-5)},zoom:function(t){var e=t.currentTarget||t;e.ct++;var i=e.naturalWidth*(e.ct+1);i<=this.galWidth?e.setAttribute("style","width:"+i+"px;height:"+e.naturalHeight*(e.ct+1)+"px"):(e.setAttribute("style","width:100%"),e.ct=-1),3==e.ct&&(e.ct=-1)},bindResize:function(t){for(var e=0;e<t.length;e++){var i=t.item(e);i.ct=0,i.addEventListener("click",this.zoom.bind(this))}}}}(),n=e("#gal"),r=JSON.parse(\''+stringified+'\'),a=i.defaultShift,o=function(c){n.innerHTML="";var d="";if(i.currentImage=c,i.minImage=c,r.length>a){for(var u=c;u<c+i.defaultShift;u++)d+=r[u];a+=i.defaultShift,i.maxImage=c+i.defaultShift,n.insertAdjacentHTML("afterEnd",\'<div id="more">Load more</div>\'),e("#more").addEventListener("click",function(){scrollTo(0,0),this.outerHTML="",o(c+i.defaultShift)})}else{for(var u=c;u<r.length;u++)d+=r[u];i.maxImage=r.length,n.insertAdjacentHTML("afterEnd",\'<div id="end"></div>\')}n.innerHTML=d,i.bindResize(t.querySelectorAll("img"))};i.init(n),o(0)}(document)';

var html = "<!doctype html><html><head><title>galFly</title><meta charset='utf-8'><style>" +
  css +
  "</style></head><body><ul id='gal'></ul><ol id='move'><li id='up'>&#9650;</li><li id='down'>&#9660;</li><li id='zoom'>&#128269;</li></ol><script>" +
  js +
  "</script></body></html>";

// window.open('data:text/html,' + encodeURIComponent(html));
document.write(html);
document.close();




/* -  /galFly  - */
