var tempus = new Date()

  , miliInADay = 86400000
  , miliInAWeek = miliInADay * 7
  , miliInAMonth = miliInADay * 30

  , rightNow = tempus.getTime()

  , monthDateFirst = tempus.setDate(1)
  , monthDateLast = tempus.setDate(30)

  , monthStart = 0
  , monthNow = rightNow - monthDateFirst

  , monthPercentage = monthNow * 100 / miliInAMonth


  , $brief = $$('.brief')
  , regexMonthly = /monthly/
  , regexWeekly = /weekly/
  ;

var makeTimeBar = function(n){
  var barHTML = '<div class="progress_bar_track"><div class="progress_bar"><div style="width: ' + n + '%" class="progress">&nbsp;</div></div></div>';

  return barHTML
};

$brief.each(function(el){
  var $briefPeriod = el.down('.normal .period')
    , briefPeriodText = $briefPeriod.textContent.strip()
    , $progressBarTrack = el.down('.progress_bar_track')
    , isMonth = regexMonthly.test(briefPeriodText)
    , isWeek = regexWeekly.test(briefPeriodText)
    ;

  if(isMonth){
    $progressBarTrack.insert({after : makeTimeBar(77)});
  }
  else if(isWeek){
    $progressBarTrack.insert({after : makeTimeBar(20)});
  }
  else{
    console.log('noooo carajooo');
  }

});

