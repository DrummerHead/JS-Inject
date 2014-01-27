/* -  This is a javascript snippet to be used with
      http://mcdlr.com/js-inject/             - */


/* -  Imgur - http://imgur.com/gallery  - *\
|* -  Open several images in new tabs   - *|
\* -  v1.1                              - */


$('#imagelist .posts').find('a').each(function(e){
  if(e >= 50){
    return false;
  }
  var url = $(this).attr('href');
  window.open(url);
});


/* -  /Imgur  - */
