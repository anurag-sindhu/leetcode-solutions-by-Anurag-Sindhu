function getSum(arr, fromIndex, toIndex, getSumConfig) {
  let sum = 0;
  for (let index = fromIndex; index <= toIndex; index++) {
    if (getSumConfig[index]) {
      sum += getSumConfig[index];
    }
  }
  return sum;
}

var maxTotalFruits = function (fruits, startPos, steps) {
  let getSumConfig = null;
  let highestIndex = startPos;
  if (!getSumConfig) {
    getSumConfig = {};
    for (let index = 0; index < fruits.length; index++) {
      const [arrIndex, fruit] = fruits[index];
      getSumConfig[arrIndex] = fruit;
      if (highestIndex < arrIndex) {
        highestIndex = arrIndex;
      }
    }
  }
  let max = 0;
  let fromIndex = startPos - steps;
  let toIndex = startPos;
  while (fromIndex <= startPos) {
    const getSubarraySum = getSum(fruits, fromIndex, toIndex, getSumConfig);
    if (max < getSubarraySum) {
      max = getSubarraySum;
    }
    fromIndex += 1;
    toIndex += 1;
    let diffOnLeft = startPos - fromIndex;
    let diffOnRight = toIndex - startPos;
    if (!(fromIndex <= startPos)) {
      break;
    }
    if (diffOnRight > diffOnLeft) {
      while (diffOnRight + diffOnLeft * 2 !== steps) {
        diffOnRight = ++toIndex - startPos;
        if (!(fromIndex <= startPos)) {
          break;
        }
      }
    } else if (diffOnLeft === diffOnRight) {
      fromIndex += 1;
      toIndex += 1;
      if (!(fromIndex <= startPos)) {
        break;
      }
    } else {
      while (diffOnRight * 2 + diffOnLeft !== steps) {
        diffOnLeft = startPos - ++fromIndex;
        if (!(fromIndex <= startPos)) {
          break;
        }
      }
    }
    if (!(fromIndex <= startPos)) {
      break;
    }
  }
  return max;
};
console.log(maxTotalFruits([[200000, 10000]], 200000, 200000));
console.log(
  maxTotalFruits(
    [
      [2, 8],
      [6, 3],
      [8, 6]
    ],
    5,
    4
  )
);
console.log(
  maxTotalFruits(
    (fruits = [
      [0, 9],
      [4, 1],
      [5, 7],
      [6, 2],
      [7, 4],
      [10, 9]
    ]),
    (startPos = 5),
    (k = 4)
  )
);
console.log(
  maxTotalFruits(
    (fruits = [
      [0, 3],
      [6, 4],
      [8, 5]
    ]),
    (startPos = 3),
    (k = 2)
  )
);

console.log(
  maxTotalFruits(
    (fruits = [
      [2, 8],
      [6, 3],
      [8, 6]
    ]),
    (startPos = 5),
    (k = 4)
  )
);
