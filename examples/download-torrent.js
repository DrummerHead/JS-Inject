/* -  This is a javascript snippet to be used with
      http://mcdlr.com/js-inject/             - */


/* -  Multisite                                - *\
|* -  Clicks on correct download torrent link  - *|
\* -  v1.0                                     - */

(function(document){

var flash = function(message, isNice){
  document.querySelector('body').insertAdjacentHTML('beforeEnd', '<div style="position: fixed; top: 0; left: 0; z-index: 7777; width: 99%; padding: 1%; text-align: center; background-color: ' + (isNice ? 'green' : 'red') + '; color: #fff; font-weight: bold; font-family: sans-serif;">' + message + '</div>');
};

var c = function(target) {
  var click = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });
  var targetElement = document.querySelector(target);
  if(document.contains(targetElement)){
    targetElement.dispatchEvent(click);
    flash('Downloaded successfully', true);
  }
  else{
    flash('The element does not exist', false);
  }
};

var host = window.location.host;

switch(host){
  case 'thepiratebay.se':
  case 'baymirror.com':
  case 'fastpiratebay.eu':
    c('.download a:first-child');
    break;
  case 'yourbittorrent.com':
    c('#content table:nth-of-type(2) td[height="100"] a');
    break;
  case 'www.monova.org':
    c('#downloadbox h2 a');
    break;
  case 'www.seedpeer.me':
  case 'www.seedpeer.eu':
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
  case 'www.limetorrents.cc':
    c('.dltorrent a.csprite_dltorrent');
    break;
  case 'torrentcrazy.com':
    c('#dl-links > a:first-child');
    break;
  case 'kickass.to':
  case 'kickass.so':
  case 'kickmirror.com':
  case 'katproxy.com':
    c('.downloadButtonGroup a.verifTorrentButton');
    break;
  case 'torcache.net':
    c('.container-fluid > .row-fluid > center:nth-of-type(2) a');
    break;
  case 'bitsnoop.com':
    c('#dload a.dlbtn.dl_tor2');
    break;
  case 'www.torrentreactor.net':
    c('a#download-magnet');
    break;
  case 'publichd.se':
    c('#torrmain tr:nth-child(5) td:nth-child(2) a');
    break;
  case '1337x.org':
  case '1337x.to':
    c('a.torrent');
    break;
  case 'extratorrent.cc':
    c('.tabledata0 a[title="Download"]');
    break;
  case 'www.torrenthound.com':
  case 'www.houndmirror.com':
    c('#torrent a');
    break;
  case 'www.torlock.com':
    c('a[href^="/tor/"]');
    break;
  case 'www.torrentzap.com':
    c('#rightside .downbuts a.downloadLink');
    break;
  case 'rarbg.com':
    c('table.lista tr:first-child td.lista a');
    break;
  case 'www.vertor.com':
  case 'vertor.eu':
    c('.down_but li:nth-child(2) a.downloadLink');
    break;
  case 'www.fulldls.com':
    c('.downl-buttons .btn-grp a:first-child');
    break;
  case 'www.newtorrents.info':
    c('#tablediv .sm tr:first-child td:nth-child(2) a');
    break;
  case 'h33t.to':
    c('table.lista tr:nth-child(2) td:nth-child(2) table td:nth-child(2) a');
    break;
  case 'www.torrentbit.net':
    c('.tor_item a[title="Download torrent"]');
    break;
  case 'torrentproject.se':
    c('#download .usite:nth-child(2) a');
    break;
  case 'www.bt-chat.com':
    window.open(document.querySelector('a[href^="download"]').getAttribute('href').replace('download', 'download1') + '&type=torrent');
    flash('Downloaded in new tab', true);
    break;
  case 'www.demonoid.pw':
    c('[src="/images/arrows/blue.png"]');
    break;
  case 'yts.re':
    c('.std-btn.torrentDwl');
    break;
  case 'isohunt.to':
    c('.btn-download');
    break;

  /*
  case '':
    c('');
    break;
  */

  default:
    flash('Unknown site', false);
}


})(document);




/* -  /Multisite  - */
