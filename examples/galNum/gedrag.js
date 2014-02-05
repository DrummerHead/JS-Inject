(function(document){




var $ = function(element){
  return document.querySelector(element)
};
var p = function(num){
  return parseInt(num, 10);
};
var $hrefBar = $('#hb');
var $start = $('#start');
var $shift = $('#shift');
var $form = $('form');
var $main = $('main');
var defaultShift = 25;
var currentImage = 0;
var minImage = 0;
var maxImage = defaultShift;
var hrefBarContent = '';
var constantHref;
var galWidth = parseInt(getComputedStyle($main).getPropertyValue('width'), 10);
var hrefParts = 'http://photos.safaribookings.com/library/botswana/xxl/Mokolodi_Nature_Reserve_001.jpg'.split(/(\d+)/).map(function(part){
  return {
    'prt' : part,
    'isN' : /^\d+$/.test(part),
    'isS' : false
  }
});

var splitBySelected = function(object){
  var result = ['', ''];
  var position = 0;
  for(chunk in object){
    object[chunk].isS ? position = 1 : result[position] += object[chunk].prt;
  }
  return result;
};

var zeroize = function(number, length){
  var num = number.toString();
  while(num.length < length){
    num = '0' + num;
  }
  return num;
};

var goToImage = function(id){
  if(id > maxImage){
    scrollTo(0, 77777);
  }
  else if(id >= minImage){
    var el = $('#a' + id);
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
    t.ct = -1;
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

var createGal = function(start, shift){
  $main.innerHTML = '';
  var gallery = '<ul id="gal">';
  var hasZeros = /^0*/.test(start);
  var end = maxImage = p(start) + p(shift);
  currentImage = start;
  minImage = start;

  for(var i = p(start); i <= end; i++){
    var num = (hasZeros ? zeroize(i, start.length) : i);
    var src = constantHref[0] + num + constantHref[1];
    gallery += '<li><img id="a' + i + '" src="' + src + '" alt="' + num + '"><a href="' + src + '">' + src + '</a></li>';
  }
  gallery += '</ul>';
  $main.innerHTML = gallery;

  $main.insertAdjacentHTML('beforeEnd', '<div id="more">Load more</div>');
  $('#more').addEventListener('click', function(){
    scrollTo(0, 0);
    var newStart = (hasZeros ? zeroize(end, start.length) : end);
    $start.value = newStart;
    createGal(newStart, shift);
  });

  bindResize(document.querySelectorAll('img'));
};


for(part in hrefParts){
  var I = hrefParts[part];
  hrefBarContent += ( I.isN ? '<b data-position="' + part + '">' + I.prt + '</b>' : '<span>' + I.prt + '</span>' );
}
$hrefBar.innerHTML = hrefBarContent;
var $numbers = document.querySelectorAll('#hb b');

for(var i = 0; i < $numbers.length; i++){
  var I = $numbers.item(i);
  I.addEventListener('click', function(e){
    $form.classList.add('v');
    $hrefBar.classList.add('done');
    this.classList.add('s');
    hrefParts[this.getAttribute('data-position')].isS = true;
    constantHref = splitBySelected(hrefParts);
    $start.value = this.textContent;
    $shift.value = defaultShift;
  });
}

onkeypress = function(e){
  if(e.charCode == 106){
    goToImage(++currentImage);
  }
  else if(e.charCode == 107){
    goToImage(--currentImage);
  }
};

$('#up').addEventListener('click', function(){
  goToImage(--currentImage);
});
$('#down').addEventListener('click', function(){
  goToImage(++currentImage);
});
$('#zoom').addEventListener('click', function(){
  zoom($('#a' + currentImage));
});

$form.addEventListener('submit', function(e){
  e.preventDefault();
  createGal($start.value, $shift.value);
});




})(document)
