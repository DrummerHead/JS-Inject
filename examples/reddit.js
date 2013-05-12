/* -  These is a javascript snippet to be used with
      http://mcdlr.com/js-inject/              - */


/* -  reddit - http://www.reddit.com/            - *\
|* -  Open all submissions and comments visible  - *|
\* -  v1.0                                       - */


var entries = $('#siteTable').find('.entry');

entries.each(function(){
  var I = $(this);
  var link = I.find('a.title').attr('href');
  var comments = I.find('a.comments').attr('href'); //remove this line if only want submissions

  window.open(link);
  window.open(comments); //remove this line if only want submissions
});


/* -  /reddit  - */
