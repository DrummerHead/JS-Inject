/* -  These is a javascript snippet to be used with
      http://mcdlr.com/js-inject/              - */


/* -  MinuteDock - http://minutedock.com/         - *\
|* -  Add timeBar to visualize progress on Goals  - *|
\* -  v1.2                                        - */

(function(){




var today = new Date()
  , todayStarted = new Date().setHours(0, 0, 0, 0)

  , miliInADay = 86400000
  , miliInAWorkingWeek = miliInADay * 5
  , miliInAMonth = miliInADay * 30

  , rightNow = today.getTime()
  , miliElapsedToday = rightNow - todayStarted
  , dayPercentage = miliElapsedToday * 100 / miliInADay

  , weekDay = (today.getDay() + 6) %7
  , weekDayMili = weekDay * miliInADay
  , miliElapsedInWeek = weekDayMili + miliElapsedToday
  , weekPercentage = miliElapsedInWeek * 100 / miliInAWorkingWeek

  , monthFirstDay = today.setDate(1)
  , monthBegins = today.setHours(0, 0, 0, 0)
  , monthNow = rightNow - monthBegins
  , monthPercentage = monthNow * 100 / miliInAMonth

  , $brief = $$('.brief')
  , regexMonthly = /monthly/
  , regexWeekly = /weekly/
  , regexDaily = /daily/
  ;


/* * /
console.log('rightNow           = ' + rightNow + ' - ' + new Date(rightNow));
console.log('todayStarted       = ' + todayStarted + ' - ' + new Date(todayStarted));
console.log('miliElapsedToday   = ' + miliElapsedToday + ' - ' + new Date(miliElapsedToday));
console.log('dayPercentage      = ' + dayPercentage);

console.log('weekDay            = ' + weekDay);
console.log('weekDayMili        = ' + weekDayMili + ' - ' + new Date(weekDayMili));
console.log('miliElapsedInWeek  = ' + miliElapsedInWeek + ' - ' + new Date(miliElapsedInWeek));
console.log('weekPercentage     = ' + weekPercentage);

console.log('monthFirstDay      = ' + monthFirstDay + ' - ' + new Date(monthFirstDay));
console.log('monthBegins        = ' + monthBegins + ' - ' + new Date(monthBegins));
console.log('rightNow           = ' + rightNow + ' - ' + new Date(rightNow));
console.log('monthNow           = ' + monthNow + ' - ' + new Date(monthNow));
console.log('monthPercentage    = ' + monthPercentage);
/* */
//console.log('x   = ' + x + ' - ' + new Date(x));


var makeTimeBar = function(n){
  var barHTML = '<div class="progress_bar_track" title="If the timeBar is shorter than the bar above it: Yey!"><div class="progress_bar"><div style="width: ' + n + '%" class="progress"></div></div></div>';
  return barHTML
};


$brief.each(function(el){
  var $briefPeriod = el.down('.normal .period')
    , briefPeriodText = $briefPeriod.textContent.strip()
    , $progressBarTrack = el.down('.progress_bar_track')
    , isMonth = regexMonthly.test(briefPeriodText)
    , isWeek = regexWeekly.test(briefPeriodText)
    , isDay = regexDaily.test(briefPeriodText)
    ;

  if(isMonth){
    $progressBarTrack.insert({after : makeTimeBar(monthPercentage)});
  }
  else if(isWeek){
    $progressBarTrack.insert({after : makeTimeBar(weekPercentage)});
  }
  else if(isDay){
    $progressBarTrack.insert({after : makeTimeBar(dayPercentage)});
  }
});


$$('.progress_bar').each(function(el){
  el.setStyle({overflow : 'hidden'})
})




})()

/* -  /MinuteDock  - */
