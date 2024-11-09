var maxNonOverlapping = function (nums, target) {
  const sumConfig = {};
  let count = 0;
  let start = 0;
  while (nums.length > start) {
    let tempArraySum = 0;
    if (start >= 1) {
      tempArraySum = (function () {
        let sum = 0;
        for (let index = 0; index < start; index++) {
          sum += nums[index];
        }
        return sum;
      })();
    }
    for (let index = start; index < nums.length; ) {
      while (sumConfig[index]) {
        index = sumConfig[index][sumConfig[index].length - 1] + 1;
        continue;
      }
      if (!(index < nums.length)) {
        break;
      }
      tempArraySum += nums[index];
      if (tempArraySum === target) {
        if (!sumConfig[index - start]) {
          sumConfig[index - start] = [];
        }
        sumConfig[index - start].push(index);
        count++;
      }
      if (start) {
        tempArraySum -= nums[index - 1];
      } else {
        tempArraySum = 0;
      }
      index++;
    }
    start++;
  }
  return count;
};

console.log(maxNonOverlapping((nums = [-1, 3, 5, 1, 4, 2, -9]), (target = 6)));
console.log(maxNonOverlapping((nums = [-1, 3, 5]), (target = 8)));
console.log(maxNonOverlapping((nums = [1, 1, 1, 1, 1]), (target = 2)));
