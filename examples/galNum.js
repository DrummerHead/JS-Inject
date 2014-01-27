/* -  This is a javascript snippet to be used with
      http://mcdlr.com/js-inject/             - */


/* -  galNum                                                   - *\
|* -  Create numbered sequence of images based on current one, - *|
|* -  Similar to http://mcdlr.com/gal/ but better              - *|
\* -  v1.2                                                     - */


var href = window.location.href;
var css = "body{font-family:sans-serif;margin:0}header{background-color:#eee}.vessel{max-width:40em;margin:0 auto;padding:1em 0}#hrefBar{font-size:1.2em}#hrefBar span{color:gray}#hrefBar b{color:#444;cursor:pointer}#hrefBar.done b{color:gray;cursor:auto;font-weight:400}#hrefBar b.selected{color:#444;cursor:auto;font-weight:700}form{display:none;margin-top:1em}.visible{display:block}main{text-align:center}#gal{list-style-type:none;padding:0 1em;margin:0}#gal li{padding:7em 0}#gal img{display:block;max-width:100%;margin:0 auto;font-size:3em;text-align:center;color:#ccc}#gal a{display:inline-block;padding:1em;text-decoration:none;color:#ccc}#gal a:hover{color:gray;text-decoration:underline}#load-more{display:block;padding:1em;cursor:pointer;background-color:#eee;color:#888;font-size:1.5em;font-weight:700}#load-more:hover{background-color:#ddd;color:#777}";
var js = '!function(t,e){var n,r=function(e){return t.querySelector(e)},a="'+href+'",i=r("#from"),o=r("#to"),s=r("form"),l=r("main"),d=25,u="",c=a.split(/(\\d+)/).map(function(t){return{prt:t,isN:/^\\d+$/.test(t)?!0:!1,isS:!1}}),p=function(t){var e=["",""],n=0;for(chunk in t)t[chunk].isS?n=1:e[n]+=t[chunk].prt;return e},f=function(t,e){for(var n=""+t;n.length<e;)n="0"+n;return n},v=function(t,a){l.innerHTML="";for(var s=\'<ul id="gal">\',u=(""+t).match(/^0*/)[0].length>0,c=parseInt(t,10);c<=parseInt(a,10);c++){var p=u?f(c,t.length):c,h=n[0]+p+n[1];s+=\'<li><img src="\'+h+\'" alt="\'+p+\'"><a href="\'+h+\'">\'+h+"</a></li>"}s+="</ul>",l.innerHTML=s,l.insertAdjacentHTML("beforeEnd",\'<strong id="load-more">Load more</strong>\'),r("#load-more").addEventListener("click",function(){e.scrollTo(0,0);var n=u?f(a,t.length):a,r=parseInt(a,10)+d;i.value=n,o.value=r,v(n,r)})};for(part in c){var h=c[part];u+=h.isN?\'<b data-position="\'+part+\'">\'+h.prt+"</b>":"<span>"+h.prt+"</span>"}r("#hrefBar").innerHTML=u;for(var m=t.querySelectorAll("#hrefBar b"),g=0;g<m.length;g++){var h=m.item(g);h.addEventListener("click",function(){s.classList.add("visible"),this.parentNode.classList.add("done"),this.classList.add("selected"),c[this.getAttribute("data-position")].isS=!0,n=p(c),i.value=this.textContent,o.value=parseInt(this.textContent,10)+d})}s.addEventListener("submit",function(t){t.preventDefault(),v(i.value,o.value)})}(document,window)';
var html = "<!doctype html><html><head><title>galNum</title><meta charset='utf-8'><style>" +
css +
"</style></head><body><header><div class='vessel'><div id='hrefBar'></div><form><label>from <input type='number' id='from'></label> <label>to <input type='number' id='to'></label> <button type='submit'>go</button></form></div></header><main></main><script>" +
js +
"</script></script></body></html>";
window.open('data:text/html,' + encodeURIComponent(html));
// document.write(html);
// document.close();

/* -  /galNum  - */
