var findMaxAverage = function (nums, k) {
  let maxProd = -Infinity;
  let tempSum = 0;
  for (let index = 0; index < nums.length; index++) {
    tempSum += nums[index];
    if (index >= k) {
      tempSum -= nums[index - k];
    }
    if (index >= k - 1) {
      if (maxProd < tempSum) {
        maxProd = tempSum;
      }
    }
  }
  maxProd = maxProd / k;
  return maxProd.toFixed(5);
};
console.log(findMaxAverage((nums = [1, 12, -5, -6, 50, 3]), (k = 4)));
console.log(findMaxAverage((nums = [5]), (k = 1)));
