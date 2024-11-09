var maxAbsoluteSum = function (nums) {
  let maxArray = [nums[0]];
  let minArray = [nums[0]];
  for (let index = 1; index < nums.length; index++) {
    maxArray.push(Math.max(maxArray[index - 1] + nums[index], nums[index]));
    minArray.push(Math.min(minArray[index - 1] + nums[index], nums[index]));
  }
  const greatest = (function () {
    let max = -Infinity;
    for (const iterator of maxArray) {
      if (max < iterator) {
        max = iterator;
      }
    }
    return max;
  })();
  const smallest = (function () {
    let min = Infinity;
    for (const iterator of minArray) {
      if (min > iterator) {
        min = iterator;
      }
    }
    return min;
  })();
  return Math.max(Math.abs(greatest), Math.abs(smallest));
};

console.log(maxAbsoluteSum((nums = [2, -5, 1, -4, 3, -2])));
console.log(
  maxAbsoluteSum(
    (nums = [-7, -1, 0, -2, 1, 3, 8, -2, -6, -1, -10, -6, -6, 8, -4, -9, -4, 1, 4, -9])
  )
);
console.log(maxAbsoluteSum((nums = [1, -3, 2, 3, -4])));
