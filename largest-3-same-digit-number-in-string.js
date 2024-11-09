var largestGoodInteger = function (num) {
  let tempNum = `${num[0]}${num[1]}`;
  const obj = {};
  for (let index = 2; index < num.length; index++) {
    tempNum += `${num[index]}`;
    if (tempNum[0] === tempNum[1] && tempNum[1] === tempNum[2] && tempNum[0] === tempNum[2]) {
      if (!obj[tempNum]) {
        obj[tempNum] = 0;
      }
      obj[tempNum] += 1;
    }
    tempNum = `${tempNum[1]}${tempNum[2]}`;
  }
  if (!Object.keys(obj).length) {
    return ``;
  }
  let max = -Infinity;
  for (const key in obj) {
    if (max < Number(key)) {
      max = key;
    }
  }
  return max;
};

console.log(largestGoodInteger((num = '222')));
console.log(largestGoodInteger((num = '42352338')));
console.log(largestGoodInteger((num = '2300019')));
console.log(largestGoodInteger((num = '6777133339')));
