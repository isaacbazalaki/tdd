//multiplying any integer with all integers smaller than it;
//n! = n * (n - 1) * (n - 2) * (n - 3);


function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  let n = 4;
  answer = factorial(n)
  console.log("The factorial of " + n + " is " + answer);

  module.exports = factorial;