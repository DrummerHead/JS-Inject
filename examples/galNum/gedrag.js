(function(document, href){



// Helper functions
//
var $ = function(element){
  return document.querySelector(element)
};
var p = function(num){
  return parseInt(num, 10);
};


// Features common to galFly and galNum
//
var galCommons = (function(){
  return {
    defaultShift: 25,
    currentImage: 0,
    minImage: 0,
    maxImage: this.defaultShift,

    init: function(galWidthElement){
      var _this = this;
      _this.galWidth = parseInt(getComputedStyle(galWidthElement).getPropertyValue('width'), 10);
      onkeypress = function(e){
        if(e.charCode == 106){
          _this.goToImage(true);
        }
        else if(e.charCode == 107){
          _this.goToImage(false);
        }
        else if(e.charCode == 108){
          _this.zoom($('#a' + _this.currentImage));
        }
      };
      $('#down').addEventListener('click', function(){
        _this.goToImage(true);
      });
      $('#up').addEventListener('click', function(){
        _this.goToImage(false);
      });
      $('#zoom').addEventListener('click', function(){
        _this.zoom($('#a' + _this.currentImage));
      });
    },

    goToImage: function(isGoingDown){
      if(isGoingDown){
        if((this.currentImage + 1) >= this.maxImage){
          scrollTo(0, document.body.scrollHeight);
        }
        else{
          scrollTo(0, $('#a' + ++this.currentImage).offsetTop - 5);
        }
      }
      else{
        if((this.currentImage - 1) >= this.minImage){
          scrollTo(0, $('#a' + --this.currentImage).offsetTop - 5);
        }
      }
    },

    zoom: function(el){
      var t = el.currentTarget || el;
      var newWidth = t.naturalWidth * (t.ct + 1);
      if(newWidth <= this.galWidth){
        t.ct++;
        t.setAttribute('style', 'width:' + newWidth + 'px;height:' + t.naturalHeight * t.ct + 'px');
      }
      else{
        t.ct = 0;
        t.setAttribute('style', 'width:100%');
      }
    },

    bindResize: function(imgs){
      for(var i = 0; i < imgs.length; i++){
        var I = imgs.item(i);
        I.ct = 1;
        I.addEventListener('click', this.zoom.bind(this));
      }
    }
  }
})();


// Selector variables and source of data
//
var $hrefBar = $('#hb');
var $start = $('#start');
var $shift = $('#shift');
var $form = $('form');
var $main = $('main');
var hrefBarContent = '';
var constantHref;
var hrefParts = href.split(/(\d+)/).map(function(part){
  return {
    'prt' : part,
    'isN' : /^\d+$/.test(part),
    'isS' : false
  }
});


// Specifics of galNum related to creating the gallery and injecting
//
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

var createGal = function(start, shift){
  $main.innerHTML = '';
  var galleryHTML = '<ul id="gal">';
  var hasZeros = /^0*/.test(start);
  var end = galCommons.maxImage = p(start) + p(shift);
  galCommons.currentImage = galCommons.minImage = p(start);

  for(var i = p(start); i < end; i++){
    var num = (hasZeros ? zeroize(i, start.length) : i);
    var src = constantHref[0] + num + constantHref[1];
    galleryHTML += '<li><img id="a' + i + '" src="' + src + '" alt="' + num + '"><a href="' + src + '">' + src + '</a></li>';
  }
  galleryHTML += '</ul>';
  $main.innerHTML = galleryHTML;

  $main.insertAdjacentHTML('beforeEnd', '<div id="more">Load more</div>');
  $('#more').addEventListener('click', function(){
    scrollTo(0, 0);
    var newStart = (hasZeros ? zeroize(end, start.length) : end);
    $start.value = newStart;
    createGal(newStart, shift);
  });

  galCommons.bindResize(document.querySelectorAll('img'));
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
    $shift.value = galCommons.defaultShift;
  });
}

galCommons.init($main);

$form.addEventListener('submit', function(e){
  e.preventDefault();
  createGal($start.value, $shift.value);
});




})(document, href)
