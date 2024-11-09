function findSecondHighest(num) {
  let firstHighest = -Infinity;
  let secondHighest = -Infinity;
  for (let index = 0; index < num.length; index++) {
    const numInt = Number(num[index]);
    if (firstHighest < numInt) {
      if (firstHighest > secondHighest) {
        secondHighest = firstHighest;
      }
      firstHighest = numInt;
    }
    if (numInt > secondHighest && numInt !== firstHighest) {
      secondHighest = numInt;
    }
  }
  if (secondHighest === -Infinity) {
    return -1;
  }
  return secondHighest;
}

var secondHighest = function (s) {
  let numericKeys = ``;
  for (let index = 0; index < s.length; index++) {
    if (!isNaN(s[index])) {
      numericKeys += s[index];
    }
  }
  return findSecondHighest(numericKeys);
};

console.log(secondHighest('dfa12321afd'));
console.log(secondHighest('abc1111'));
