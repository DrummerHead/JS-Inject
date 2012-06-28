/* -  These is a javascript snippet to be used with
      http://mcdlr.com/js-inject/              - */


/* -  MinuteDock - http://minutedock.com/         - *\
|* -  Add timeBar to visualize progress on Goals  - *|
\* -  v0.9                                        - */


var tempus = new Date()

  , miliInADay = 86400000
  , miliInAWeek = miliInADay * 7
  , miliInAMonth = miliInADay * 30

  , rightNow = tempus.getTime()
  , todayStarted = new Date().setHours(0, 0, 0, 0)
  , miliElapsedToday = rightNow - todayStarted

  , weekDay = tempus.getDay()
  , weekDayMili = weekDay * miliInADay
  , miliElapsedInWeek = weekDayMili + miliElapsedToday
  , weekPercentage = miliElapsedInWeek * 100 / miliInAWeek

  , monthFirstDay = tempus.setDate(1)
  , monthBegins = tempus.setHours(0, 0, 0, 0)
  , monthNow = rightNow - monthBegins
  , monthPercentage = monthNow * 100 / miliInAMonth

  , $brief = $$('.brief')
  , regexMonthly = /monthly/
  , regexWeekly = /weekly/
  ;


/*
console.log('rightNow           = ' + rightNow );
console.log('todayStarted       = ' + todayStarted );
console.log('miliElapsedToday   = ' + miliElapsedToday );

console.log('weekDay            = ' + weekDay );
console.log('weekDayMili        = ' + weekDayMili );
console.log('miliElapsedInWeek  = ' + miliElapsedInWeek );
console.log('weekPercentage     = ' + weekPercentage );

console.log('monthFirstDay      = ' + monthFirstDay);
console.log('monthBegins        = ' + monthBegins);
console.log('rightNow           = ' + rightNow);
console.log('monthNow           = ' + monthNow);
console.log('monthPercentage    = ' + monthPercentage);
*/
//console.log(' = ' + );


var makeTimeBar = function(n){
  var barHTML = '<div class="progress_bar_track"><div class="progress_bar"><div style="width: ' + n + '%" class="progress"></div></div></div>';
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
