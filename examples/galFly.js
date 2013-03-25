/* -  These is a javascript snippet to be used with
      http://mcdlr.com/js-inject/              - */


/* -  galFly                                                         - *\
|* -  Render images based on links to those images in a single page  - *|
\* -  v1.0                                                           - */

var links = $('a');
var hrefs = [];
var texts = [];
var vacuna = "<ul id='vitrum'>";

var css = "body{margin:0}#vitrum{list-style-type:none; padding:1em; background-color: #ddd; text-align: center; font-family: sans-serif;} #vitrum li{padding: 4em 0} #vitrum img{display: block; max-width: 100%; margin: 0 auto;} #vitrum a{display: inline-block; margin: 1em 0; color: #777; text-decoration: none; } #vitrum a:hover{text-decoration: underline;}";
$('head').append("<style>"+css+"</style>");

var imgo = function(leenk, text){
  var li = "<li><img src='"+leenk+"'><a href='"+leenk+"'>"+text+"</a></li>";
  return li;
};

links.each(function(i){
  var I = $(this);
  hrefs[i] = I.attr('href');
  texts[i] = I.text();
});

for(j in hrefs){
  var li = imgo(hrefs[j], texts[j]);
  vacuna += li;
};
  
console.log(hrefs);
 $('body').html(vacuna+"</ul>");

/* -  /Sitename  - */
