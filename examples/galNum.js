/* -  This is a javascript snippet to be used with
      http://mcdlr.com/js-inject/             - */


/* -  galNum                                                   - *\
|* -  Create numbered sequence of images based on current one, - *|
|* -  Similar to http://mcdlr.com/gal/ but better              - *|
\* -  v1.2                                                     - */


var css = "body{font-family:sans-serif;margin:0}header{background-color:#eee}.vessel{max-width:40em;margin:0 auto;padding:1em 0}#hb{font-size:1.2em}#hb span{color:gray}#hb b{color:#444;cursor:pointer}#hb.done b{color:gray;cursor:auto;font-weight:400}#hb b.s{color:#444;cursor:auto;font-weight:700}form{display:none;margin-top:1em}.v{display:block}main{text-align:center}#gal{list-style-type:none;padding:0 1em;margin:0}#gal li{padding:7em 0}#gal img{display:block;max-width:100%;margin:0 auto;font-size:3em;color:#ccc}#gal a{display:inline-block;padding:1em;text-decoration:none;color:#ccc}#gal a:hover{color:gray;text-decoration:underline}#more{padding:1em;font-size:1.5em;font-weight:700;background-color:#eee;color:#888;cursor:pointer}#more:hover{background-color:#ddd;color:#777}";
var js = '!function(t){var e,n=function(e){return t.querySelector(e)},r=n("#hb"),o=n("#from"),i=n("#to"),a=n("form"),l=n("main"),c=25,s="",d=parseInt,u="'+location.href+'".split(/(\\d+)/).map(function(t){return{prt:t,isN:/^\\d+$/.test(t),isS:!1}}),f=function(t){var e=["",""],n=0;for(chunk in t)t[chunk].isS?n=1:e[n]+=t[chunk].prt;return e},h=function(t,e){for(var n=""+t;n.length<e;)n="0"+n;return n},m=function(t,r){l.innerHTML="";for(var a=\'<ul id="gal">\',s=/^0*/.test(""+t),u=d(t,10);u<=d(r,10);u++){var f=s?h(u,t.length):u,p=e[0]+f+e[1];a+=\'<li><img src="\'+p+\'" alt="\'+f+\'"><a href="\'+p+\'">\'+p+"</a></li>"}a+="</ul>",l.innerHTML=a,l.insertAdjacentHTML("beforeEnd",\'<div id="more">Load more</div>\'),n("#more").addEventListener("click",function(){scrollTo(0,0);var e=s?h(r,t.length):r,n=d(r,10)+c;o.value=e,i.value=n,m(e,n)})};for(part in u){var p=u[part];s+=p.isN?\'<b data-position="\'+part+\'">\'+p.prt+"</b>":"<span>"+p.prt+"</span>"}r.innerHTML=s;for(var v=t.querySelectorAll("#hb b"),g=0;g<v.length;g++){var p=v.item(g);p.addEventListener("click",function(){a.classList.add("v"),r.classList.add("done"),this.classList.add("s"),u[this.getAttribute("data-position")].isS=!0,e=f(u),o.value=this.textContent,i.value=d(this.textContent,10)+c})}a.addEventListener("submit",function(t){t.preventDefault(),m(o.value,i.value)})}(document)';
var html = "<!doctype html><html><head><title>galNum</title><meta charset='utf-8'><style>" +
css +
"</style></head><body><header><div class='vessel'><div id='hb'></div><form><label>from <input type='number' id='from'></label> <label>to <input type='number' id='to'></label> <button type='submit'>go</button></form></div></header><main></main><script>" +
js +
"</script></script></body></html>";
window.open('data:text/html,' + encodeURIComponent(html));
// document.write(html);
// document.close();

/* -  /galNum  - */
