/* -  These is a javascript snippet to be used with
      http://mcdlr.com/js-inject/              - */


/* -  Hideliminator - Any website   - *\
|* -  Hide elements on command      - *|
\* -  v1.0                          - */


var h1d3l1m1n4t04 = {

  $me : function(){
    return this
  },

  seeMe : function(){
    console.log(this.$me());
  },

  $allElem : $('body *'),

  $body : $('body'),

  $endThis : $('<a/>', {
    href : '#',
    id : 'endTheSuffering',
    css : {
      'position' : 'fixed',
      'top' : '0',
      'right' : '0',
      'background-color' : 'rgba(0,0,0,.5)',
      'display' : 'block',
      'color' : '#fff',
      'pointer' : 'cursor',
      'text-decoration' : 'none',
      'padding' : '1em',
    },
    text : 'End Hideliminator'
  }),

  hider : function(e) {
    e.stopPropagation();
    $(this).hide();
    return false;
  },

  enter : function(e) {
    e.stopPropagation();
    $(this).css({
      'outline':'1px solid red'
    });
  },

  leave : function(e) {
    e.stopPropagation();
    $(this).css({
      'outline':'none'
    });
  },

  endHideliminator : function(e) {
    e.preventDefault();
    this.$allElem.unbind('.h1d3l1m1n4t04');
  },

  initialize : function() {
    this.$allElem
      .bind('click.h1d3l1m1n4t04', this.hider)
      .bind('mouseover.h1d3l1m1n4t04', this.enter)
      .bind('mouseout.h1d3l1m1n4t04', this.leave);
    this.$body.prepend(this.$endThis);
  }
};

h1d3l1m1n4t04.initialize();

// this is wrong but I am tired of finding the way to do it right
$('#endTheSuffering').click(function(e){
  h1d3l1m1n4t04.endHideliminator(e);
  $(this).fadeOut();
});


/* -  /Hideliminator  - */
