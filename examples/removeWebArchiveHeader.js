/* -  This is a javascript snippet to be used with
      http://mcdlr.com/js-inject/             - */


/* -  Wayback Machine - https://web.archive.org/web/               - *\
|* -  Remove the header, for display purposes of old created sites - *|
\* -  v1.0                                                         - */


const webArchiveHead = document.querySelector('#wm-ipp');

const removeUntilComment = elem => {
  const next = elem.nextSibling;
  if (next.nodeName === "#comment" && next.nodeValue === " END WAYBACK TOOLBAR INSERT ") {
    next.remove();
  } else {
    removeUntilComment(next);
    elem.remove();
  }
};

removeUntilComment(webArchiveHead);


/* -  /Wayback Machine  - */
