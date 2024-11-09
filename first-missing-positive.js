var firstMissingPositive = function (nums) {
  let smallestNumber = Infinity;
  let greatestNumber = -Infinity;
  const numsObj = {};
  for (const iterator of nums) {
    if (iterator > 0) {
      if (smallestNumber > iterator) {
        smallestNumber = iterator;
      }
      if (greatestNumber < iterator) {
        greatestNumber = iterator;
      }
      numsObj[iterator] = true;
    }
  }
  if (smallestNumber !== 1) {
    return 1;
  }
  for (let index = 2; index <= greatestNumber; index++) {
    if (!numsObj[index]) {
      return index;
    }
  }

  return greatestNumber + 1;
};

console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
