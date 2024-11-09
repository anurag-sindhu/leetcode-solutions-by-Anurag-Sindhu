var powerfulIntegers1 = function (x, y, bound, xPow = 0, yPow = 0, arr = {}) {
  if (x === 1 && y === 1) {
    let tempRes = 1 + 1;
    if (tempRes <= bound) {
      arr[tempRes] = tempRes;
    }
    return Object.values(arr);
  } else if (x === 1 || y === 1) {
    if (x === 1) {
      let tempRes = 1 + Math.pow(y, yPow);
      if (tempRes <= bound) {
        arr[tempRes] = tempRes;
      } else {
        return;
      }
      powerfulIntegers(x, y, bound, xPow, yPow + 1, arr);
      return Object.values(arr);
    } else {
      let tempRes = Math.pow(x, xPow) + 1;
      if (tempRes <= bound) {
        arr[tempRes] = tempRes;
      } else {
        return;
      }
      powerfulIntegers(x, y, bound, xPow + 1, yPow, arr);
      return Object.values(arr);
    }
  } else {
    let tempRes = Math.pow(x, xPow) + Math.pow(y, yPow);
    if (tempRes <= bound) {
      arr[tempRes] = tempRes;
    } else {
      return;
    }
    powerfulIntegers(x, y, bound, xPow + 1, yPow, arr);
    powerfulIntegers(x, y, bound, xPow, yPow + 1, arr);
    return Object.values(arr);
  }
};

var powerfulIntegers = function (x, y, bound) {
  const sumX = [];
  const sumy = [];
  let xPow = 0;
  let temp = Math.pow(x, xPow);
  if (x === 1) {
    sumX.push(1);
  } else {
    while (temp <= bound) {
      sumX.push(temp);
      temp = Math.pow(x, xPow++);
    }
  }

  let yPow = 0;
  temp = Math.pow(x, yPow);
  if (y === 1) {
    sumy.push(1);
  } else {
    while (temp <= bound) {
      sumy.push(temp);
      temp = Math.pow(y, yPow++);
    }
  }
  const output = {};
  let tempSum = 0;
  for (const key of sumX) {
    tempSum = key;
    for (const key2 of sumy) {
      const temp2 = tempSum + key2;
      if (temp2 <= bound) {
        output[temp2] = temp2;
      }
    }
  }
  return Object.values(output);
};

let res;
res = powerfulIntegers((x = 2), (y = 1), (bound = 10));
console.log(res);
res = powerfulIntegers((x = 1), (y = 1), (bound = 0));
console.log(res);
res = powerfulIntegers((x = 2), (y = 3), (bound = 10));
console.log(res);
res = powerfulIntegers(2, 2, 400000);
console.log(res);
res = powerfulIntegers((x = 3), (y = 5), (bound = 15));
console.log(res);
