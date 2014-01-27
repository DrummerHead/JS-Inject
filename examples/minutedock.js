/* -  This is a javascript snippet to be used with
      http://mcdlr.com/js-inject/             - */


/* -  MinuteDock - http://minutedock.com/         - *\
|* -  Add timeBar to visualize progress on Goals  - *|
\* -  v1.4                                        - */




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
  , weekPercentageOverflow = miliElapsedInWeek * 100 / miliInAWorkingWeek
  , weekPercentage = ( weekPercentageOverflow < 100 ? weekPercentageOverflow : 100 )

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


var makeTimeBar = function(percentageDelta, isWorkAboveTime, timePercentage){
  var barHTML = '<div class="progress_bar_track" title="TimeBar &#183; Percentage delta = ' + percentageDelta + '%"><div class="progress_bar' + (isWorkAboveTime ? ' green' : ' red') + '"><div style="width: ' + timePercentage + '%" class="progress"></div></div></div>';
  return barHTML
};


$brief.each(function(el){
  var periodText = el.down('.normal .period').textContent.strip()
    , $progressBarTrack = el.down('.progress_bar_track')
    , $progress = el.down('.progress')
    , progressPercentage = ( $progress ? parseInt(el.down('.progress').getStyle('width')) : 0 )
    , isMonth = regexMonthly.test(periodText)
    , isWeek = regexWeekly.test(periodText)
    , isDay = regexDaily.test(periodText)
    , timePercentage
    ;

  if(isMonth){
    timePercentage = monthPercentage
  }
  else if(isWeek){
    timePercentage = weekPercentage
  }
  else if(isDay){
    timePercentage = dayPercentage
  }

  var isWorkAboveTime = progressPercentage >= timePercentage
    , percentageDelta = (progressPercentage - timePercentage).toFixed(1)
    ;

  $progressBarTrack.insert({after : makeTimeBar(percentageDelta, isWorkAboveTime, timePercentage)});
});




/* -  /MinuteDock  - */
