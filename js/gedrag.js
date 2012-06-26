(function($){




// Start codeMirror
var editor = CodeMirror.fromTextArea(document.getElementById('codeInput'), {
  lineNumbers: true,
  matchBrackets: true
});


// Define DOM areas
var $form = $('#magia')
  , $targetLink = $('#a-holder')
  , $codeInput = $('#codeInput')
  , $linkName = $('#nome')


// Make the form parse JS User Input
$form.submit(function(e){
  e.preventDefault();

  var raw = $codeInput.val()
    , parsedJs = raw
        .replace(/\/\*[\s\S]*?\*\//g,'') // Delete block commentaries
        .replace(/\/\/.*/g,'')           // Delete single line commentaries
        .replace(/'/g,'%27')             // Safe single quotes
        .replace(/"/g,'%22')             // Safe double quotes
        .replace(/[\r\n\t]/g,' ')        // No newlines or tabs
        .replace(/ +/g,' ')              // No extra spaces
    , nome = $linkName.val()
    , hasJq = $('#hasJQuery:checked').length
    , aHref = hasJq ?
        "javascript:(function(){if(typeof ZHJ1bW1lcg === 'undefined'){var jQueryScript=document.createElement('script');jQueryScript.setAttribute('src','//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js');var caput=document.getElementsByTagName('head');caput[0].appendChild(jQueryScript);ZHJ1bW1lcg=true;}setTimeout(function(){$(document).ready(function(){"+ parsedJs +"});},200);})();"
          :
        "javascript:(function(){"+ parsedJs +"})();"
    , aElement = '<a href="'+aHref+'">'+nome+'</a>'

  $targetLink.empty().append(aElement);
});




})(jQuery)
