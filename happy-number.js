var isHappy = function (n) {
  const obj = {};
  let tempSum;
  while (tempSum !== 1) {
    tempSum = 0;
    n = String(n);
    for (let index = 0; index < n.length; index++) {
      tempSum += Math.pow(parseInt(n[index]), 2);
    }
    if (obj[tempSum]) {
      return false;
    }
    n = tempSum;
    obj[tempSum] = true;
  }
  return true;
};

console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(25));
console.log(isHappy(10));
