// remove stringified when minifying
(function(document, stringified){


var $ = function(element){
  return document.getElementById(element)
};
var $gal = $('gal');
var galWidth = parseInt(getComputedStyle($gal).getPropertyValue('width'), 10);
// change this line when minifying, parse raw string
var imageLinks = JSON.parse(stringified);
var shift = 25;
var increase = shift;
var currentImage = 0;
var minImage = 0;
var maxImage = shift;

var goToImage = function(id){
  if(id >= maxImage){
    scrollTo(0, 77777);
  }
  else if(id >= minImage){
    var el = $('a' + id);
    scrollTo(0, el.offsetTop - 5);
  }
};

var zoom = function(el){
  var t = el.currentTarget || el;
  t.ct++;
  var newWidth = t.naturalWidth * (t.ct + 1);
  if(newWidth <= galWidth){
    t.setAttribute('style', 'width:' + newWidth + 'px;height:' + t.naturalHeight * (t.ct + 1) + 'px');
  }
  else{
    t.setAttribute('style', 'width:100%');
  }
  if(t.ct == 3){
    t.ct = -1;
  }
}

var bindResize = function(imgs){
  for(var i = 0; i < imgs.length; i++){
    var I = imgs.item(i);
    I.ct = 0;
    I.addEventListener('click', zoom);
  }
};

var inject = function(start){
  $gal.innerHTML = '';
  var load = '';
  currentImage = start;
  minImage = start;

  if(imageLinks.length > increase){
    for(var i = start; i < start + shift; i++){
      load += imageLinks[i];
    }
    increase += shift;
    maxImage = start + shift;

    $gal.insertAdjacentHTML('afterEnd', '<strong id=\"load-more\">Load more</strong>');
    $('load-more').addEventListener('click', function(){
      scrollTo(0, 0);
      this.outerHTML = '';
      inject(start + shift);
    });
  }
  else {
    for(var i = start; i < imageLinks.length; i++){
      load += imageLinks[i];
    }
    maxImage = imageLinks.length;
  }

  $gal.innerHTML = load;
  bindResize(document.querySelectorAll('img'));
};

onkeypress = function(e){
  if(e.charCode == 106){
    goToImage(++currentImage);
  }
  else if(e.charCode == 107){
    goToImage(--currentImage);
  }
};

$('up').addEventListener('click', function(){
  goToImage(--currentImage);
});
$('down').addEventListener('click', function(){
  goToImage(++currentImage);
});
$('zoom').addEventListener('click', function(){
  zoom($('a' + currentImage));
});

inject(0);


// remove stringified when minifying
})(document, stringified)
