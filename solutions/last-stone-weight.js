var lastStoneWeight = function (stones) {
  let tempArray = [];
  let arrayLength = null;
  while (stones && stones.length > 1) {
    tempArray = [];
    stones = stones.sort((a, b) => a - b);
    arrayLength = stones.length;
    if (stones[arrayLength - 1] === stones[arrayLength - 1 - 1]) {
      stones[arrayLength - 1 - 1] = undefined;
      stones[arrayLength - 1] = undefined;
    } else {
      stones[arrayLength - 1 - 1] = stones[arrayLength - 1] - stones[arrayLength - 1 - 1];
      stones[arrayLength - 1] = undefined;
    }
    for (const iterator of stones) {
      if (iterator) {
        tempArray.push(iterator);
      }
    }
    stones = tempArray;
  }
  return stones.length ? stones[0] : 0;
};
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([2, 6, 4, 1, 8, 1]));

console.log(lastStoneWeight([1]));
