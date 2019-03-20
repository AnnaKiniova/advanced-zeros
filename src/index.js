module.exports = function getZerosCount(number, base) {
  let N = number;
  let B = base;
  let grade = 0;
  let count = 0;
  let totalZero = 10e20;
  
  for (factor = 2; factor<=base; factor++)
    if (base%factor == 0) {
      grade = 0;
      while (B%factor == 0){
        B = B/factor;
        grade++;
      }
      let count = 0;
      for (i=1; (Math.pow(factor, i) <= number); i++) {
        if (Math.floor(number/(Math.pow(factor, i))) >= 1){
        count += Math.floor(number/(Math.pow(factor,i)));
        }  
      }
      result = Math.floor(count/grade);
      if (result < totalZero) {
        totalZero = result;   
      }
    }
  return (totalZero);
}