// exports.factorial = function (num) {};

function factorial(num) {
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return console.log(product);
}

factorial(5);
