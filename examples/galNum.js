/* -  This is a javascript snippet to be used with
      http://mcdlr.com/js-inject/             - */


/* -  galNum                                                   - *\
|* -  Create numbered sequence of images based on current one, - *|
|* -  Similar to http://mcdlr.com/gal/ but better              - *|
\* -  v1.2                                                     - */


var href = window.location.href;
var css = " body { font-family: sans-serif; margin: 0; } header { background-color: #eee; } .vessel { max-width: 40em; margin: 0 auto; padding: 1em 0; } #hrefBar { font-size: 1.2em; } #hrefBar span { color: #808080; } #hrefBar b { color: #444; cursor: pointer; } #hrefBar.done b { color: #808080; cursor: auto; font-weight: normal; } #hrefBar b.selected { color: #444; cursor: auto; font-weight: bold; } form { display: none; margin-top: 1em; } .visible { display: block; } main { text-align: center; } #gal { list-style-type: none; padding: 0 1em; margin: 0; } #gal li { padding: 7em 0; } #gal img { display: block; max-width: 100%; margin: 0 auto; font-size: 3em; text-align: center; color: #ccc; } #gal a { display: inline-block; padding: 1em; text-decoration: none; color: #ccc; } #gal a:hover { color: #808080; text-decoration: underline; } #load-more { display: block; padding: 1em; cursor: pointer; background-color: #eee; color: #888; font-size: 1.5em; font-weight: bold; } #load-more:hover { background-color: #ddd; color: #777; } ";
var js = " var href = '" + href + "'; var $hrefBar = document.getElementById('hrefBar'); var $from = document.getElementById('from'); var $to = document.getElementById('to'); var $form = document.querySelector('form'); var $main = document.querySelector('main'); var loadShift = 50; var hrefBarContent = ''; var constantHref; var hrefParts = href.split(/(\\d+)/).map(function(part){ return { 'part' : part, 'isNumber' : ( /^\\d+$/.test(part) ? true : false ), 'isSelected' : false } }); var splitBySelected = function(object){ var result = ['', '']; var position = 0; for(chunk in object){ object[chunk].isSelected ? position = 1 : result[position] += object[chunk].part; } return result; }; var zeroize = function(number, length){ var num = number.toString(); while(num.length < length){ num = '0' + num; } return num; }; var createGal = function(from, to){ $main.innerHTML = ''; var gallery = '<ul id=\"gal\">'; var hasZeros = from.toString().match(/^0*/)[0].length > 0; for(var i = parseInt(from, 10); i <= parseInt(to, 10); i++){ var num = (hasZeros ? zeroize(i, from.length) : i); var src = constantHref[0] + num + constantHref[1]; gallery += '<li><img src=\"' + src + '\" alt=\"' + num + '\"><a href=\"' + src + '\">' + src + '</a></li>'; } gallery += '</ul>'; $main.innerHTML = gallery; $main.insertAdjacentHTML('beforeEnd', '<strong id=\"load-more\">Load more</strong>'); document.getElementById('load-more').addEventListener('click', function(){ window.scrollTo(0, 0); var newFrom = (hasZeros ? zeroize(to, from.length) : to); var newTo = parseInt(to, 10) + loadShift; $from.value = newFrom; $to.value = newTo; createGal(newFrom, newTo); }); }; for(part in hrefParts){ var I = hrefParts[part]; hrefBarContent += ( I.isNumber ? '<b data-position=\"' + part + '\">' + I.part + '</b>' : '<span>' + I.part+ '</span>' ); } $hrefBar.innerHTML = hrefBarContent; var $numbers = document.querySelectorAll('#hrefBar b'); for(var i = 0; i < $numbers.length; i++){ var I = $numbers.item(i); I.addEventListener('click', function(e){ $form.classList.add('visible'); this.parentNode.classList.add('done'); this.classList.add('selected'); hrefParts[this.getAttribute('data-position')].isSelected = true; constantHref = splitBySelected(hrefParts); $from.value = this.textContent; $to.value = parseInt(this.textContent, 10) + loadShift; }); } $form.addEventListener('submit', function(e){ e.preventDefault(); createGal($from.value, $to.value); }); ";
var html = "<!doctype html> <html> <head> <title>galNum</title> <meta charset='utf-8'> <style>" +
css +
"</style> </head> <body> <header> <div class='vessel'> <div id='hrefBar'></div> <form> <label> from <input type='number' id='from'> </label> <label> to <input type='number' id='to'> </label> <button type='submit'>go</button> </form> </div> </header> <main> </main> <script>" +
js +
"</script> </script> </body> </html>";
document.write(html);
document.close();

/* -  /galNum  - */
