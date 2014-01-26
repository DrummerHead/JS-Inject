var href = 'http://photos.safaribookings.com/library/botswana/xxl/Mokolodi_Nature_Reserve_001.jpg';
var $hrefBar = document.getElementById('hrefBar');
var $from = document.getElementById('from');
var $to = document.getElementById('to');
var $form = document.querySelector('form');
var $main = document.querySelector('main');
var loadShift = 50;
var hrefBarContent = '';
var constantHref;
var hrefParts = href.split(/(\d+)/).map(function(part){
  return {
    'part' : part,
    'isNumber' : ( /^\d+$/.test(part) ? true : false ),
    'isSelected' : false
  }
});

var splitBySelected = function(object){
  var result = ['', ''];
  var position = 0;
  for(chunk in object){
    object[chunk].isSelected ? position = 1 : result[position] += object[chunk].part;
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
  var hasZeros = from.toString().match(/^0*/)[0].length > 0;

  for(var i = parseInt(from, 10); i <= parseInt(to, 10); i++){
    var num = (hasZeros ? zeroize(i, from.length) : i);
    var src = constantHref[0] + num + constantHref[1];
    gallery += '<li><img src="' + src + '" alt="' + num + '"><a href="' + src + '">' + src + '</a></li>';
  }
  gallery += '</ul>';
  $main.innerHTML = gallery;

  $main.insertAdjacentHTML('beforeEnd', '<strong id="load-more">Load more</strong>');
  document.getElementById('load-more').addEventListener('click', function(){
    window.scrollTo(0, 0);
    var newFrom = (hasZeros ? zeroize(to, from.length) : to);
    var newTo = parseInt(to, 10) + loadShift;
    $from.value = newFrom;
    $to.value = newTo;
    createGal(newFrom, newTo);
  });
};


for(part in hrefParts){
  var I = hrefParts[part];
  hrefBarContent += ( I.isNumber ? '<b data-position="' + part + '">' + I.part + '</b>' : '<span>' + I.part+ '</span>' );
}
$hrefBar.innerHTML = hrefBarContent;
var $numbers = document.querySelectorAll('#hrefBar b');

for(var i = 0; i < $numbers.length; i++){
  var I = $numbers.item(i);
  I.addEventListener('click', function(e){
    $form.classList.add('visible');
    this.parentNode.classList.add('done');
    this.classList.add('selected');
    hrefParts[this.getAttribute('data-position')].isSelected = true;
    constantHref = splitBySelected(hrefParts);
    $from.value = this.textContent;
    $to.value = parseInt(this.textContent, 10) + loadShift;
  });
}

$form.addEventListener('submit', function(e){
  e.preventDefault();
  createGal($from.value, $to.value);
});
