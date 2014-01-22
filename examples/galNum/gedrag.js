var href = 'http://photos.safaribookings.com/library/botswana/xxl/Mokolodi_Nature_Reserve_001.jpg';
var hrefBar = document.getElementById('hrefBar');
var from = document.getElementById('from');
var to = document.getElementById('to');
var form = document.querySelector('form');
var main = document.querySelector('main');
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

var zeraize = function(number, length){
  num = number.toString();
  while(num.length < length){
    num = '0' + num;
  }
  return num;
};

for(part in hrefParts){
  var I = hrefParts[part];
  hrefBarContent += ( I.isNumber ? '<b data-position="' + part + '">' + I.part + '</b>' : '<span>' + I.part+ '</span>' );
}

hrefBar.innerHTML = hrefBarContent;
var numbers = document.querySelectorAll('#hrefBar b');

for(var i = 0; i < numbers.length; i++){
  var I = numbers.item(i);
  I.addEventListener('click', function(e){
    form.classList.add('visible');
    this.parentNode.classList.add('done');
    this.classList.add('selected');
    hrefParts[this.getAttribute('data-position')].isSelected = true;
    constantHref = splitBySelected(hrefParts);
    from.value = this.textContent;
    to.value = parseInt(this.textContent, 10) + 50;
  });
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  main.innerHTML = '';
  var gallery = '<ul id="gal">';
  var zeroes = from.value.match(/^0*/);

  for(var i = parseInt(from.value, 10); i <= parseInt(to.value, 10); i++){
    src = constantHref[0] + (zeroes[0].length > 0 ? zeraize(i, from.value.length) : i) + constantHref[1];
    gallery += '<li><img src="' + src + '" alt="' + src + '" title="' + src + '"></li>';
  }
  gallery += '</ul>';
  main.innerHTML = gallery;
});
