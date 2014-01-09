/* -  These is a javascript snippet to be used with
      http://mcdlr.com/js-inject/              - */


/* -  Multisite                                - *\
|* -  Clicks on correct download torrent link  - *|
\* -  v1.0                                     - */

function c(target) {
  var click = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });
  var targetElement = document.querySelector(target);
  if(document.contains(targetElement)){
     targetElement.dispatchEvent(click);
  }
  else{
    alert('The element does not exist');
  }
}

var host = window.location.host;

switch(host){
  case 'thepiratebay.se':
  case 'baymirror.com':
    c('.download a:first-child');
    break;
  case 'yourbittorrent.com':
    c('#content table:nth-of-type(2) td[height="100"] a');
    break;
  case 'www.monova.org':
    c('#main .usenetd h2 > a');
    break;
  case 'www.seedpeer.me':
    c('.leftSideHolder .downloadMenu .downloadTorrent > a:first-child');
    break;
  case 'www.torrentdownloads.me':
    c('.inner_container .download li:nth-child(2) > a');
    break;
  case 'www.torrents.net':
    c('.holder .download-holder a.btn2-download');
    break;
  case 'www.torrentfunk.com':
    c('.content table[cellspacing="4"] tr:first-child td:nth-child(2) > a');
    break;
  case 'www.limetorrents.com':
    c('.dltorrent a.csprite_dltorrent');
    break;
  case 'torrentcrazy.com':
    c('#dl-links > a:first-child');
    break;
  case 'kickass.to':
  case 'kickmirror.com':
    c('.downloadButtonGroup a.siteButton');
    break;
  case 'torcache.net':
    c('.container-fluid > .row-fluid > center:nth-of-type(2) a');
    break;
  case 'bitsnoop.com':
    c('#dload a.dlbtn.dl_tor2');
    break;
  case 'www.torrentreactor.net':
    c('a#download-url');
    break;
  case 'publichd.se':
    c('#torrmain tr:nth-child(5) td:nth-child(2) a');
    break;
  case '1337x.org':
    c('.torrentInfoBox .torrentInfoBtn a.torrentDw');
    break;
  case 'extratorrent.cc':
    c('.tabledata0 a[title="Download"]');
    break;
  case 'www.torrenthound.com':
  case 'www.houndmirror.com':
    c('#torrent a');
    break;
  case 'www.torlock.com':
    c('#content > center > table tr:first-child td:nth-child(2) a');
    break;
  case 'www.torrentzap.com':
    c('#rightside .downbuts a.downloadLink');
    break;
  case 'rarbg.com':
    c('table.lista tr:first-child td.lista a');
    break;
  case 'www.vertor.com':
    c('.down_but li:nth-child(2) a.downloadLink');
    break;
  case 'www.fulldls.com':
    c('#dwl a.download_link');
    break;
  case 'www.newtorrents.info':
    c('#tablediv .sm tr:first-child td:nth-child(2) a');
    break;
  case 'h33t.to':
    c('table.lista tr:nth-child(2) td:nth-child(2) table td:nth-child(2) a');
    break;

  default:
    alert('Unknown site');
}

/* -  /Multisite  - */
