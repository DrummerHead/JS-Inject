/* -  These is a javascript snippet to be used with
      http://mcdlr.com/js-inject/              - */


/* -  MinuteDock - http://minutedock.com/         - *\
|* -  Add timeBar to visualize progress on Goals  - *|
\* -  v0.8                                        - */


var tempus = new Date()

  , miliInADay = 86400000
  , miliInAWeek = miliInADay * 7
  , miliInAMonth = miliInADay * 30

  , rightNow = tempus.getTime()

  , weekNow = tempus.getDay()+1
  , weekPercentage = weekNow * 100 / 7

  , monthDateFirst = tempus.setDate(1)
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
    $progressBarTrack.insert({after : makeTimeBar(monthPercentage)});
  }
  else if(isWeek){
    $progressBarTrack.insert({after : makeTimeBar(weekPercentage)});
  }

});


/* -  /MinuteDock  - */
