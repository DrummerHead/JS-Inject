/* -  This is a javascript snippet to be used with
      http://mcdlr.com/js-inject/             - */


/* -  YouTube - https://www.youtube.com                  - *\
|* -  After pausing a long video, add timestamp to video - *|
|* -  (bookmarking, restarting computer)                 - *|
\* -  v1.0                                               - */

var time = document
  .querySelector('.ytp-time-current')
  .textContent
  .split(':')
  .reverse();

var timeUnit = ['s', 'm', 'h']
var timeString = time
  .reduce((acc, curr, index) =>
    `${curr}${timeUnit[index]}${acc}`,'')

window.location.assign(
  `${window
      .location
      .href
      .replace(/&t=.*$/, '')}&t=${timeString}`
)

/* -  /YouTube  - */
