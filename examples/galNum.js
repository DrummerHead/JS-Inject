/* -  These is a javascript snippet to be used with
      http://mcdlr.com/js-inject/              - */


/* -  galNum                                                   - *\
|* -  Create numbered sequence of images based on current one, - *|
|* -  Similar to http://mcdlr.com/gal/ but better              - *|
\* -  v1.0                                                     - */


var href = window.location.href;
var css = " body { font-family: sans-serif; margin: 0; } header { background-color: #eee; } .vessel { max-width: 40em; margin: 0 auto; padding: 1em 0; } #hrefBar { font-size: 1.2em; } #hrefBar span { color: #808080; } #hrefBar b { color: #444; cursor: pointer; } #hrefBar.done b { color: #808080; cursor: auto; font-weight: normal; } #hrefBar b.selected { color: #444; cursor: auto; font-weight: bold; } form { display: none; margin-top: 1em; } .visible { display: block; } #gal { list-style-type: none; padding: 0 1em; margin: 0; } #gal li { padding: 7em 0; } #gal img { display: block; max-width: 100%; margin: 0 auto; font-size: 3em; text-align: center; color: #ccc; } ";
var js = " var href = '" + href + "'; var hrefBar = document.getElementById('hrefBar'); var from = document.getElementById('from'); var to = document.getElementById('to'); var form = document.querySelector('form'); var main = document.querySelector('main'); var hrefBarContent = ''; var constantHref; var hrefParts = href.split(/(\\d+)/).map(function(part){ return { 'part' : part, 'isNumber' : ( /^\\d+$/.test(part) ? true : false ), 'isSelected' : false } }); var splitBySelected = function(object){ var result = ['', '']; var position = 0; for(chunk in object){ object[chunk].isSelected ? position = 1 : result[position] += object[chunk].part; } return result; }; var zeraize = function(number, length){ num = number.toString(); while(num.length < length){ num = '0' + num; } return num; }; for(part in hrefParts){ var I = hrefParts[part]; hrefBarContent += ( I.isNumber ? '<b data-position=\"' + part + '\">' + I.part + '</b>' : '<span>' + I.part+ '</span>' ); } hrefBar.innerHTML = hrefBarContent; var numbers = document.querySelectorAll('#hrefBar b'); for(var i = 0; i < numbers.length; i++){ var I = numbers.item(i); I.addEventListener('click', function(e){ form.classList.add('visible'); this.parentNode.classList.add('done'); this.classList.add('selected'); hrefParts[this.getAttribute('data-position')].isSelected = true; constantHref = splitBySelected(hrefParts); from.value = this.textContent; to.value = parseInt(this.textContent, 10) + 50; }); } form.addEventListener('submit', function(e){ e.preventDefault(); main.innerHTML = ''; var gallery = '<ul id=\"gal\">'; var zeroes = from.value.match(/^0*/); for(var i = parseInt(from.value, 10); i <= parseInt(to.value, 10); i++){ src = constantHref[0] + (zeroes[0].length > 0 ? zeraize(i, from.value.length) : i) + constantHref[1]; gallery += '<li><img src=\"' + src + '\" alt=\"' + src + '\" title=\"' + src + '\"></li>'; } gallery += '</ul>'; main.innerHTML = gallery; }); ";
var html = "<!doctype html> <html> <head> <title>galNum</title> <meta charset='utf-8'> <style>" +
css +
"</style> </head> <body> <header> <div class='vessel'> <div id='hrefBar'></div> <form> <label> from <input type='number' id='from'> </label> <label> to <input type='number' id='to'> </label> <button type='submit'>go</button> </form> </div> </header> <main> </main> <script>" +
js +
"</script> </script> </body> </html>";
document.write(html);
document.close();

/* -  /galNum  - */
