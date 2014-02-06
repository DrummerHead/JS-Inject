/* -  This is a javascript snippet to be used with
      http://mcdlr.com/js-inject/             - */


/* -  galNum                                                   - *\
|* -  Create numbered sequence of images based on current one, - *|
|* -  Similar to http://mcdlr.com/gal/ but better              - *|
\* -  v2.2                                                     - */




var css = "body{font-family:sans-serif;margin:0}header{background-color:#eee}.vessel{max-width:40em;margin:0 auto;padding:1em 0}#hb{font-size:1.2em}#hb span{color:gray}#hb b{color:#444;cursor:pointer}#hb.done b{color:gray;cursor:auto;font-weight:400}#hb b.s{color:#444;cursor:auto;font-weight:700}form{display:none;margin-top:1em}.v{display:block}main,#move{text-align:center}#gal{list-style-type:none;padding:0 1em;margin:0}#gal li{min-height:"+innerHeight+"px;padding:7em 0}#gal img{display:block;max-width:100%;margin:0 auto;font-size:3em;color:#ccc}#gal a{display:inline-block;padding:1em;text-decoration:none;color:#ccc}#gal a:hover{color:gray;text-decoration:underline}#move{position:fixed;bottom:0;left:0;width:5em;padding:0;margin:0;font-size:1.4em;list-style-type:none;color:#888;-webkit-user-select:none;-moz-user-select:none;user-select:none}#move li{float:left;width:2.75em;height:2em;line-height:2em;cursor:pointer}#move li:hover{color:#444}#down,#up{text-indent:.5em}#down{clear:left}#move #zoom{width:2em;text-indent:-.5em}#more{padding:1em;font-size:1.5em;font-weight:700;background-color:#eee;color:#888;cursor:pointer}#more:hover{background-color:#ddd;color:#777}";

var js = '!function(t){var e,n=function(e){return t.querySelector(e)},i=function(t){return parseInt(t,10)},r=function(){return{defaultShift:25,currentImage:0,minImage:0,maxImage:this.defaultShift,init:function(t){var e=this;e.galWidth=parseInt(getComputedStyle(t).getPropertyValue("width"),10),onkeypress=function(t){106==t.charCode?e.goToImage(++e.currentImage):107==t.charCode?e.goToImage(--e.currentImage):108==t.charCode&&e.zoom(n("#a"+e.currentImage))},n("#up").addEventListener("click",function(){e.goToImage(--e.currentImage)}),n("#down").addEventListener("click",function(){e.goToImage(++e.currentImage)}),n("#zoom").addEventListener("click",function(){e.zoom(n("#a"+e.currentImage))})},goToImage:function(t){t>=this.maxImage?scrollTo(0,77777):t>=this.minImage&&scrollTo(0,n("#a"+t).offsetTop-5)},zoom:function(t){var e=t.currentTarget||t;e.ct++;var n=e.naturalWidth*(e.ct+1);n<=this.galWidth?e.setAttribute("style","width:"+n+"px;height:"+e.naturalHeight*(e.ct+1)+"px"):(e.setAttribute("style","width:100%"),e.ct=-1),3==e.ct&&(e.ct=-1)},bindResize:function(t){for(var e=0;e<t.length;e++){var n=t.item(e);n.ct=0,n.addEventListener("click",this.zoom.bind(this))}}}}(),a=n("#hb"),o=n("#start"),c=n("#shift"),u=n("form"),d=n("main"),l="",s="'+location.href+'".split(/(\\d+)/).map(function(t){return{prt:t,isN:/^\\d+$/.test(t),isS:!1}}),g=function(t){var e=["",""],n=0;for(chunk in t)t[chunk].isS?n=1:e[n]+=t[chunk].prt;return e},m=function(t,e){for(var n=""+t;n.length<e;)n="0"+n;return n},f=function(a,c){d.innerHTML="";var u=\'<ul id="gal">\',l=/^0*/.test(a),s=r.maxImage=i(a)+i(c);r.currentImage=a,r.minImage=a;for(var g=i(a);s>g;g++){var h=l?m(g,a.length):g,v=e[0]+h+e[1];u+=\'<li><img id="a\'+g+\'" src="\'+v+\'" alt="\'+h+\'"><a href="\'+v+\'">\'+v+"</a></li>"}u+="</ul>",d.innerHTML=u,d.insertAdjacentHTML("beforeEnd",\'<div id="more">Load more</div>\'),n("#more").addEventListener("click",function(){scrollTo(0,0);var t=l?m(s,a.length):s;o.value=t,f(t,c)}),r.bindResize(t.querySelectorAll("img"))};for(part in s){var h=s[part];l+=h.isN?\'<b data-position="\'+part+\'">\'+h.prt+"</b>":"<span>"+h.prt+"</span>"}a.innerHTML=l;for(var v=t.querySelectorAll("#hb b"),I=0;I<v.length;I++){var h=v.item(I);h.addEventListener("click",function(){u.classList.add("v"),a.classList.add("done"),this.classList.add("s"),s[this.getAttribute("data-position")].isS=!0,e=g(s),o.value=this.textContent,c.value=r.defaultShift})}r.init(d),u.addEventListener("submit",function(t){t.preventDefault(),f(o.value,c.value)})}(document)';

var html = "<!doctype html><html><head><title>galNum</title><meta charset='utf-8'><style>" +
  css +
  "</style></head><body><header><div class='vessel'><div id='hb'></div><form><label>start <input type='number' id='start'></label> <label>shift <input type='number' id='shift'></label> <button type='submit'>go</button></form></div></header><main></main><ol id='move'><li id='up'>&#9650;</li><li id='down'>&#9660;</li><li id='zoom'>&#128269;</li></ol><script>" +
  js +
  "</script></body></html>";

// window.open('data:text/html,' + encodeURIComponent(html));
document.write(html);
document.close();

/* -  /galNum  - */
