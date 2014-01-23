/* -  These is a javascript snippet to be used with
      http://mcdlr.com/js-inject/              - */


/* -  viewportMobile                                                            - *\
|* -  Some sites don't allow you to zoom freely on mobile, probably because ads - *|
|* -  With this snippet you can recover your freedomz                           - *|
\* -  v1.0                                                                      - */


var head = document.querySelector('head');
var viewport = head.querySelector('meta[name="viewport"]');
if(head.contains(viewport)){
  viewport.setAttribute('content', 'width=device-width, initial-scale=1');
};


/* -  /viewportMobile  - */
