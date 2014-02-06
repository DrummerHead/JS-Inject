/* -  This is a javascript snippet to be used with
      http://mcdlr.com/js-inject/             - */


/* -  galNum                                                   - *\
|* -  Create numbered sequence of images based on current one, - *|
|* -  Similar to http://mcdlr.com/gal/ but better              - *|
\* -  v2.2                                                     - */




var css = "body{font-family:sans-serif;margin:0}header{background-color:#eee}.vessel{max-width:40em;margin:0 auto;padding:1em 0}#hb{font-size:1.2em}#hb span{color:gray}#hb b{color:#444;cursor:pointer}#hb.done b{color:gray;cursor:auto;font-weight:400}#hb b.s{color:#444;cursor:auto;font-weight:700}form{display:none;margin-top:1em}.v{display:block}#move,main{text-align:center}#gal{padding:1em;margin:0;list-style-type:none}#gal li{min-height:"+innerHeight+"px;padding:4em 0}#gal img{display:block;max-width:100%;margin:0 auto;font-size:3em;color:#ccc}#gal a{display:inline-block;padding:1em;text-decoration:none;color:#ccc}#gal a:hover{color:gray;text-decoration:underline}#move{position:fixed;bottom:0;left:0;width:5em;padding:0;margin:0;font-size:1.4em;list-style-type:none;color:#888;-webkit-user-select:none;-moz-user-select:none;user-select:none}#move li{float:left;width:2.75em;height:2em;line-height:2em;cursor:pointer}#move li:hover{color:#444}#down,#up{text-indent:.5em}#down{clear:left}#move #zoom{width:2em;text-indent:-.5em}#more{padding:1em;font-size:1.5em;font-weight:700;background-color:#eee;color:#888;cursor:pointer}#more:hover{background-color:#ddd;color:#777}";

var js = '!function(t,e){var n,i=function(e){return t.querySelector(e)},r=function(t){return parseInt(t,10)},a=function(){return{defaultShift:25,currentImage:0,minImage:0,maxImage:this.defaultShift,init:function(t){var e=this;e.galWidth=parseInt(getComputedStyle(t).getPropertyValue("width"),10),onkeypress=function(t){106==t.charCode?e.goToImage(!0):107==t.charCode?e.goToImage(!1):108==t.charCode&&e.zoom(i("#a"+e.currentImage))},i("#down").addEventListener("click",function(){e.goToImage(!0)}),i("#up").addEventListener("click",function(){e.goToImage(!1)}),i("#zoom").addEventListener("click",function(){e.zoom(i("#a"+e.currentImage))})},goToImage:function(t){t?this.currentImage+1>=this.maxImage?scrollTo(0,scrollMaxY):scrollTo(0,i("#a"+ ++this.currentImage).offsetTop-5):this.currentImage-1>=this.minImage&&scrollTo(0,i("#a"+--this.currentImage).offsetTop-5)},zoom:function(t){var e=t.currentTarget||t,n=e.naturalWidth*(e.ct+1);n<=this.galWidth?(e.ct++,e.setAttribute("style","width:"+n+"px;height:"+e.naturalHeight*e.ct+"px")):(e.ct=0,e.setAttribute("style","width:100%"))},bindResize:function(t){for(var e=0;e<t.length;e++){var n=t.item(e);n.ct=1,n.addEventListener("click",this.zoom.bind(this))}}}}(),o=i("#hb"),c=i("#start"),s=i("#shift"),u=i("form"),l=i("main"),d="",m=e.split(/(\\d+)/).map(function(t){return{prt:t,isN:/^\\d+$/.test(t),isS:!1}}),h=function(t){var e=["",""],n=0;for(chunk in t)t[chunk].isS?n=1:e[n]+=t[chunk].prt;return e},f=function(t,e){for(var n=""+t;n.length<e;)n="0"+n;return n},g=function(e,o){l.innerHTML="";var s=\'<ul id="gal">\',u=/^0*/.test(e),d=a.maxImage=r(e)+r(o);a.currentImage=a.minImage=r(e);for(var m=r(e);d>m;m++){var h=u?f(m,e.length):m,v=n[0]+h+n[1];s+=\'<li><img id="a\'+m+\'" src="\'+v+\'" alt="\'+h+\'"><a href="\'+v+\'">\'+v+"</a></li>"}s+="</ul>",l.innerHTML=s,l.insertAdjacentHTML("beforeEnd",\'<div id="more">Load more</div>\'),i("#more").addEventListener("click",function(){scrollTo(0,0);var t=u?f(d,e.length):d;c.value=t,g(t,o)}),a.bindResize(t.querySelectorAll("img"))};for(part in m){var v=m[part];d+=v.isN?\'<b data-position="\'+part+\'">\'+v.prt+"</b>":"<span>"+v.prt+"</span>"}o.innerHTML=d;for(var p=t.querySelectorAll("#hb b"),I=0;I<p.length;I++){var v=p.item(I);v.addEventListener("click",function(){u.classList.add("v"),o.classList.add("done"),this.classList.add("s"),m[this.getAttribute("data-position")].isS=!0,n=h(m),c.value=this.textContent,s.value=a.defaultShift})}a.init(l),u.addEventListener("submit",function(t){t.preventDefault(),g(c.value,s.value)})}(document,href)';

var html = "<!doctype html><html><head><title>galNum</title><meta charset='utf-8'><style>" +
  css +
  "</style></head><body><header><div class='vessel'><div id='hb'></div><form><label>start <input type='number' id='start'></label> <label>shift <input type='number' id='shift'></label> <button type='submit'>go</button></form></div></header><main></main><ol id='move'><li id='up'>&#9650;</li><li id='down'>&#9660;</li><li id='zoom'>&#128269;</li></ol><script>var href = '"+location.href+"'</script><script>" +
  js +
  "</script></body></html>";

// window.open('data:text/html,' + encodeURIComponent(html));
document.write(html);
document.close();




/* -  /galNum  - */
