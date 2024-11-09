var bulbSwitch1 = function (n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return n;
  }
  const arr = (function () {
    const array = [];
    for (let index = 0; index < n; index++) {
      array.push(1);
    }
    return array;
  })();
  for (let index = 2; index <= n; index++) {
    for (let arrayIndex = 1; arrayIndex <= arr.length; arrayIndex++) {
      if (arrayIndex % index === 0) {
        if (arr[arrayIndex - 1]) {
          arr[arrayIndex - 1] = 0;
        } else {
          arr[arrayIndex - 1] = 1;
        }
      }
    }
  }
  return arr.filter((value) => value == 1).length;
};

var bulbSwitch = function (n) {
  if (n === 0) {
    return 0;
  }
  if (n <= 3) {
    return 1;
  }
  let start = 1;
  let initialPlus = 3;
  let repeat = 1;
  while (n >= start + initialPlus) {
    start += initialPlus;
    initialPlus += 2;
    repeat += 1;
  }
  return repeat;
};
for (let index = 1; index < 1000; index++) {
  console.log(bulbSwitch(index));
}
console.log(bulbSwitch(8));
console.log(bulbSwitch(9));
console.log(bulbSwitch(10));
console.log(bulbSwitch(2));
console.log(bulbSwitch(3));
console.log(bulbSwitch(4));
console.log(bulbSwitch(5));
console.log(bulbSwitch(6));
console.log(bulbSwitch(7));
console.log(bulbSwitch(3));
console.log(bulbSwitch(4));
