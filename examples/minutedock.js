
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
  , $briefMonthly
  , regexMonthly = /monthly/
  ;

$brief.each(function(el){
  var briefPeriod = el.select('.normal .period')
    , briefPeriodText = briefPeriod[0].textContent.strip()
    , isMonth = regexMonthly.test(briefPeriodText)
    ;

  if(isMonth){
    console.log('siii carajooo');
  }
  else{
    console.log('noooo carajooo');
  }

});

