/* -  This is a javascript snippet to be used with
      http://mcdlr.com/js-inject/             - */


/* -  galNum                                                   - *\
|* -  Create numbered sequence of images based on current one, - *|
|* -  Similar to http://mcdlr.com/gal/ but better              - *|
\* -  v2.0                                                     - */




var css = "body{font-family:sans-serif;margin:0}header{background-color:#eee}.vessel{max-width:40em;margin:0 auto;padding:1em 0}#hb{font-size:1.2em}#hb span{color:gray}#hb b{color:#444;cursor:pointer}#hb.done b{color:gray;cursor:auto;font-weight:400}#hb b.s{color:#444;cursor:auto;font-weight:700}form{display:none;margin-top:1em}.v{display:block}main,#move{text-align:center}#gal{list-style-type:none;padding:0 1em;margin:0}#gal li{min-height:"+innerHeight+"px;padding:7em 0}#gal img{display:block;max-width:100%;margin:0 auto;font-size:3em;color:#ccc}#gal a{display:inline-block;padding:1em;text-decoration:none;color:#ccc}#gal a:hover{color:gray;text-decoration:underline}#move{position:fixed;bottom:0;left:0;width:5em;padding:0;margin:0;font-size:1.4em;list-style-type:none;color:#888;-webkit-user-select:none;-moz-user-select:none;user-select:none}#move li{float:left;width:2.75em;height:2em;line-height:2em;cursor:pointer}#move li:hover{color:#444}#down,#up{text-indent:.5em}#down{clear:left}#move #zoom{width:2em;text-indent:-.5em}#more{padding:1em;font-size:1.5em;font-weight:700;background-color:#eee;color:#888;cursor:pointer}#more:hover{background-color:#ddd;color:#777}";

var js = '!function(t){var e,n=function(e){return t.querySelector(e)},r=function(t){return parseInt(t,10)},i=n("#hb"),a=n("#start"),o=n("#shift"),c=n("form"),s=n("main"),l=25,u=0,d=0,f=l,v="",h=parseInt(getComputedStyle(s).getPropertyValue("width"),10),p="'+location.href+'".split(/(\\d+)/).map(function(t){return{prt:t,isN:/^\\d+$/.test(t),isS:!1}}),g=function(t){var e=["",""],n=0;for(chunk in t)t[chunk].isS?n=1:e[n]+=t[chunk].prt;return e},m=function(t,e){for(var n=""+t;n.length<e;)n="0"+n;return n},L=function(t){if(t>f)scrollTo(0,77777);else if(t>=d){var e=n("#a"+t);scrollTo(0,e.offsetTop-5)}},b=function(t){var e=t.currentTarget||t;e.ct++;var n=e.naturalWidth*(e.ct+1);h>=n?e.setAttribute("style","width:"+n+"px;height:"+e.naturalHeight*(e.ct+1)+"px"):(e.setAttribute("style","width:100%"),e.ct=-1),3==e.ct&&(e.ct=-1)},k=function(t){for(var e=0;e<t.length;e++){var n=t.item(e);n.ct=0,n.addEventListener("click",b)}},y=function(i,o){s.innerHTML="";var c=\'<ul id="gal">\',l=/^0*/.test(i),v=f=r(i)+r(o);u=i,d=i;for(var h=r(i);v>=h;h++){var p=l?m(h,i.length):h,g=e[0]+p+e[1];c+=\'<li><img id="a\'+h+\'" src="\'+g+\'" alt="\'+p+\'"><a href="\'+g+\'">\'+g+"</a></li>"}c+="</ul>",s.innerHTML=c,s.insertAdjacentHTML("beforeEnd",\'<div id="more">Load more</div>\'),n("#more").addEventListener("click",function(){scrollTo(0,0);var t=l?m(v,i.length):v;a.value=t,y(t,o)}),k(t.querySelectorAll("img"))};for(part in p){var T=p[part];v+=T.isN?\'<b data-position="\'+part+\'">\'+T.prt+"</b>":"<span>"+T.prt+"</span>"}i.innerHTML=v;for(var E=t.querySelectorAll("#hb b"),S=0;S<E.length;S++){var T=E.item(S);T.addEventListener("click",function(){c.classList.add("v"),i.classList.add("done"),this.classList.add("s"),p[this.getAttribute("data-position")].isS=!0,e=g(p),a.value=this.textContent,o.value=l})}onkeypress=function(t){106==t.charCode?L(++u):107==t.charCode&&L(--u)},n("#up").addEventListener("click",function(){L(--u)}),n("#down").addEventListener("click",function(){L(++u)}),n("#zoom").addEventListener("click",function(){b(n("#a"+u))}),c.addEventListener("submit",function(t){t.preventDefault(),y(a.value,o.value)})}(document)';

var html = "<!doctype html><html><head><title>galNum</title><meta charset='utf-8'><style>" +
css +
"</style></head><body><header><div class='vessel'><div id='hb'></div><form><label>start <input type='number' id='start'></label> <label>shift <input type='number' id='shift'></label> <button type='submit'>go</button></form></div></header><main></main><ol id='move'><li id='up'>&#9650;</li><li id='down'>&#9660;</li><li id='zoom'>&#128269;</li></ol><script>" +
js +
"</script></body></html>";
window.open('data:text/html,' + encodeURIComponent(html));
// document.write(html);
// document.close();

/* -  /galNum  - */
