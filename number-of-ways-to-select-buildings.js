var numberOfWays1 = function (s) {
  let count = 0;
  const length = s.length;
  let pointer1 = 0;
  let pointer2 = 1;
  let pointer3 = 2;
  while (pointer1 < length - 2) {
    let first = s[pointer1];
    pointer2 = pointer1 + 1;
    while (pointer2 < length - 1) {
      let second = s[pointer2];
      if (first === second) {
        pointer2++;
        continue;
      }
      pointer3 = pointer2 + 1;
      while (pointer3 < length) {
        let third = s[pointer3];
        if (third === second) {
          pointer3++;
          continue;
        }
        count++;
        pointer3++;
      }
      pointer2++;
    }
    pointer1++;
  }
  return count;
};

var numberOfWays = function (array) {
  const ones = [];
  const zeroes = [];
  for (let index = 0; index < array.length; index++) {
    if (index === 0) {
      if (array[index] === `1`) {
        ones.push(1);
      } else {
        ones.push(0);
      }
    } else {
      if (array[index] === `1`) {
        ones.push(1 + Number(ones[ones.length - 1]));
      } else {
        ones.push(Number(ones[ones.length - 1]));
      }
    }
    if (index === 0) {
      if (array[index] === `0`) {
        zeroes.push(1);
      } else {
        zeroes.push(0);
      }
    } else {
      if (array[index] === `0`) {
        zeroes.push(1 + Number(zeroes[zeroes.length - 1]));
      } else {
        zeroes.push(Number(zeroes[zeroes.length - 1]));
      }
    }
  }
  const length = array.length;
  let count = 0;
  for (let index = array.length - 1; index > 1; index--) {
    for (let childIndex = index - 1; childIndex > 0; childIndex--) {
      if (array[index] !== array[childIndex]) {
        if (array[childIndex] === `0`) {
          count += ones[childIndex];
        } else {
          count += zeroes[childIndex];
        }
      }
    }
  }
  return count;
};
console.log(numberOfWays((s = '11100')));

console.log(numberOfWays((s = '001101')));
