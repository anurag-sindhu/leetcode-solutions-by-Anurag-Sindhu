var shiftingLetters = function (str, shifts) {
  let totalSum = (function () {
    let sum = 0;
    for (const iterator of shifts) {
      sum += iterator;
    }
    return sum;
  })();
  let output = ``;
  for (let index = 0; index < str.length; index++) {
    totalSum -= shifts[index - 1] || 0;
    let tempSum = str.charCodeAt(index) + (totalSum % 26);
    while (tempSum > 122) {
      tempSum = tempSum - 122 + 96;
    }
    output += String.fromCharCode(tempSum);
  }
  return output;
};

console.log(shiftingLetters('ruu', [26, 9, 17]));
console.log(shiftingLetters((s = 'abc'), (shifts = [3, 5, 9])));
console.log(shiftingLetters((s = 'aaa'), (shifts = [1, 2, 3])));
