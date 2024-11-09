var romanToInt = function (array) {
  const configObject = {
    I: { index: 1, value: 1 },
    V: { index: 2, value: 5 },
    X: { index: 3, value: 10 },
    L: { index: 4, value: 50 },
    C: { index: 5, value: 100 },
    D: { index: 6, value: 500 },
    M: { index: 7, value: 1000 }
  };
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    if (index !== array.length - 1) {
      if (configObject[array[index]].index < configObject[array[index + 1]].index) {
        sum -= configObject[array[index]].value;
      } else {
        sum += configObject[array[index]].value;
      }
    } else {
      sum += configObject[array[index]].value;
    }
  }
  return sum;
};

console.log(romanToInt('III'));
console.log(romanToInt('MCMXCIV'));
console.log(romanToInt('LVIII'));
