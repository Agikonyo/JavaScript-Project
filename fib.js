var fibonac = function(a) {
    if (a === 1) {
      return [0, 1];
    } else {
      var num = fibonac (a - 1);
     num.push(num[num.length - 1] + num[num.length - 2]);
      return num;
    }
  };
  
  console.log(fibonac(2));