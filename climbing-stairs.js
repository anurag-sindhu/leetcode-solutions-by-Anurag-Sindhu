var climbStairs = function (n) {
  let secondLast = 1;
  let last = 2;
  let sum = 0;
  if (n === 1) {
    return secondLast;
  } else if (n === 2) {
    return last;
  } else {
    for (let index = 3; index <= n; index++) {
      sum = secondLast + last;
      secondLast = last;
      last = sum;
    }
    return sum;
  }
};

console.log(climbStairs(5));
