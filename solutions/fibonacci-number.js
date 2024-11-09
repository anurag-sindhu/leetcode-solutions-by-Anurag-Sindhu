var fib = function (n) {
  if (!n) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 1;
  } else {
    let a = 1;
    let b = 1;
    let tempSum = 0;
    for (let index = 3; index <= n; index++) {
      tempSum = a + b;
      a = b;
      b = tempSum;
    }
    return tempSum;
  }
};
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(2));
console.log(fib(3));
