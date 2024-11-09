var validMountainArray = function (array) {
  if (array.length < 3) {
    return false;
  }
  let hasIncrementStarted = null;
  let hasDecrementStarted = null;
  for (let index = 0; index < array.length - 1; index++) {
    if (array[index] === array[index + 1]) {
      return false;
    }
    if (array[index] < array[index + 1]) {
      if (hasDecrementStarted) {
        return false;
      }
      hasIncrementStarted = true;
    } else {
      hasDecrementStarted = true;
    }
  }
  return (hasIncrementStarted && hasDecrementStarted) || false;
};

console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(validMountainArray([3, 5, 5]));
console.log(validMountainArray([1, 3, 2]));
console.log(validMountainArray([2, 1]));
