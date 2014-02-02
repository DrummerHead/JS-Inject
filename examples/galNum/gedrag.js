(function(document){




var $ = function(element){
  return document.querySelector(element)
};
var $hrefBar = $('#hb');
var $from = $('#from');
var $to = $('#to');
var $form = $('form');
var $main = $('main');
var loadShift = 25;
var hrefBarContent = '';
var constantHref;
var p = parseInt;
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

var createGal = function(from, to){
  $main.innerHTML = '';
  var gallery = '<ul id="gal">';
  var hasZeros = /^0*/.test(from.toString());

  for(var i = p(from, 10); i <= p(to, 10); i++){
    var num = (hasZeros ? zeroize(i, from.length) : i);
    var src = constantHref[0] + num + constantHref[1];
    gallery += '<li><img src="' + src + '" alt="' + num + '"><a href="' + src + '">' + src + '</a></li>';
  }
  gallery += '</ul>';
  $main.innerHTML = gallery;

  $main.insertAdjacentHTML('beforeEnd', '<div id="more">Load more</div>');
  $('#more').addEventListener('click', function(){
    scrollTo(0, 0);
    var newFrom = (hasZeros ? zeroize(to, from.length) : to);
    var newTo = p(to, 10) + loadShift;
    $from.value = newFrom;
    $to.value = newTo;
    createGal(newFrom, newTo);
  });
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
    $from.value = this.textContent;
    $to.value = p(this.textContent, 10) + loadShift;
  });
}

$form.addEventListener('submit', function(e){
  e.preventDefault();
  createGal($from.value, $to.value);
});




})(document)
