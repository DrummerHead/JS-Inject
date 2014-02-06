(function(document, stringified){



// Helper functions
//
var $ = function(element){
  return document.querySelector(element)
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
var $gal = $('#gal');
var imageLinks = JSON.parse(stringified);
var increase = galCommons.defaultShift;


// Specifics of galFly related to creating the gallery and injecting
//
var createGal = function(start){
  var galleryHTML = $gal.innerHTML = '';
  galCommons.currentImage = galCommons.minImage = start;

  if(imageLinks.length > increase){
    for(var i = start; i < start + galCommons.defaultShift; i++){
      galleryHTML += imageLinks[i];
    }
    increase += galCommons.defaultShift;
    galCommons.maxImage = start + galCommons.defaultShift;

    $gal.insertAdjacentHTML('afterEnd', '<div id=\"more\">Load more</div>');
    $('#more').addEventListener('click', function(){
      scrollTo(0, 0);
      this.outerHTML = '';
      createGal(start + galCommons.defaultShift);
    });
  }
  else {
    for(var i = start; i < imageLinks.length; i++){
      galleryHTML += imageLinks[i];
    }
    galCommons.maxImage = imageLinks.length;
    $gal.insertAdjacentHTML('afterEnd', '<div id=\"end\"></div>');
  }

  $gal.innerHTML = galleryHTML;
  galCommons.bindResize(document.querySelectorAll('img'));
};


galCommons.init($gal);

createGal(0);




})(document, stringified)
