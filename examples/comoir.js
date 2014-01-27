/* -  This is a javascript snippet to be used with
      http://mcdlr.com/js-inject/             - */


/* -  Cómo ir - http://comoir.montevideo.gub.uy/stmWEB/  - *\
|* -  Make the map area significantly bigger             - *|
|* -  Automatically fill departure point                 - *|
|* -  NOTE: Change {{address}} and {{number}}            - *|
\* -  v1.0                                               - */


var style = document.createElement('style');
style.innerHTML = 'body > table {' +
'  width: 94%;' +
'}' +
'#map {' +
'  width: 100%;' +
'  height: 640px;' +
'}';

var head = document.querySelector('head');
head.appendChild(style);

document.getElementById('form_input:panel_input_combinada:filtroGrupo').value = '{{address}}';
document.getElementById('form_input:panel_input_combinada:filtroEsquina').value = '{{number}}';
document.getElementById('form_input:panel_input_combinada:ido').onclick();


/* -  /Cómo ir  - */
