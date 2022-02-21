//A JavaScript program that checks whether a year is leap year or not

function leapyear(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 00;
  }
  console.log(leapyear(2022));
  console.log(leapyear(2016));
  console.log(leapyear(2015));
  console.log(leapyear(1992));
  console.log(leapyear(1989));