/* -  These is a javascript snippet to be used with
      http://mcdlr.com/js-inject/              - */


/* -  Hideliminator - Any website   - *\
|* -  Hide elements on command      - *|
\* -  v1.0                          - */


var h1d3r = function(e) {
  e.stopPropagation();
  $(this).hide();
  return false;
},
ent3r = function(e) {
  e.stopPropagation();
  $(this).css({
    'outline':'1px solid red'
  });
},
l34v3 = function(e) {
  e.stopPropagation();
  $(this).css({
    'outline':'none'
	});
},
endThis = '<a href="#" id="endTheSuffering" style="position:fixed;top:0;right:0;background-color:rgba(0,0,0,.5);display:block;color:#fff;pointer:cursor;text-decoration:none;padding:1em;">End Hideliminator</a>';

$('body *').bind('click', h1d3r).bind('mouseover', ent3r).bind('mouseout', l34v3);
$('body').prepend(endThis);

$('#endTheSuffering').click(function(){
  $('body *').unbind('click', h1d3r).unbind('mouseover', ent3r).unbind('mouseout', l34v3);
  $(this).fadeOut();
  return false;
});


/* -  /Hideliminator  - */
