var findMaxLength1 = function (nums) {
  let maxCount = 0;
  let tempCount = 0;
  let sum = 0;
  const updateSum = (sum, element) => {
    if (element) {
      sum += 1;
    } else {
      sum -= 1;
    }
    return sum;
  };
  for (let index = 0; index < nums.length - 1; index++) {
    sum = updateSum(0, nums[index]);

    for (let index2 = index + 1; index2 < nums.length; index2++) {
      sum = updateSum(sum, nums[index2]);
      tempCount = index2 - index + 1;
      if (!sum && tempCount > maxCount) {
        maxCount = tempCount;
      }
    }
  }
  return maxCount;
};

var findMaxLength = function (nums) {
  let maxCount = 0;
  let tempCount = 0;
  let sum = 0;
  let lowest = { 0: -1 };
  const updateSum = (sum, element) => {
    if (element) {
      sum += 1;
    } else {
      sum -= 1;
    }
    return sum;
  };
  for (let index = 0; index < nums.length; index++) {
    sum = updateSum(sum, nums[index]);
    if (lowest[sum] || lowest[sum] === 0) {
      tempCount = index - lowest[sum];
      if (maxCount < index - lowest[sum]) {
        maxCount = tempCount;
      }
    } else {
      lowest[sum] = index;
    }
  }

  return maxCount;
};
console.log(findMaxLength([0, 1, 0, 1]));
console.log(findMaxLength([0, 1, 0]));
console.log(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1]));
console.log(findMaxLength([0, 1, 1]));
console.log(findMaxLength([0, 1, 0, 0, 1, 1, 0]));
console.log(findMaxLength([0, 1]));
