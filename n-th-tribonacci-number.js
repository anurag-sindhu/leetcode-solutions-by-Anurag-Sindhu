var tribonacci1 = function (n) {
  if (!n) {
    return 0;
  }
  const obj = {
    0: 0,
    1: 1,
    2: 1
  };
  for (let index = 3; index <= n; index++) {
    obj[index] = obj[index - 3] + obj[index - 2] + obj[index - 1];
  }
  return obj[n];
};

var tribonacci = function (n) {
  if (!n) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }

  let zero = 0;
  let one = 1;
  let two = 1;
  let update = 0;
  n = n - 2;
  while (n--) {
    update = zero + one + two;
    zero = one;
    one = two;
    two = update;
  }
  return update;
};

console.log(tribonacci(4));
console.log(tribonacci(25));
