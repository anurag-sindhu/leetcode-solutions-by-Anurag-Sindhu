var maxFrequency = function (nums, k) {
  let max = 1;
  if (!nums.length) {
    return 0;
  }
  if (nums.length === 1) {
    return 1;
  }
  nums.sort((a, b) => a - b);
  let startIndex = 0,
    endIndex = 1;
  let sum = nums[startIndex] + nums[endIndex];
  while (endIndex < nums.length) {
    const totalElements = endIndex - startIndex + 1;
    const totalSumRequired = nums[endIndex] * totalElements;
    if (totalSumRequired <= sum + k) {
      if (max < totalElements) {
        max = totalElements;
      }
      endIndex++;
      if (!(endIndex < nums.length)) {
        break;
      }
      sum += nums[endIndex];
    } else {
      sum -= nums[startIndex];
      startIndex++;
      if (endIndex < startIndex) {
        break;
      }
    }
  }
  return max;
};

console.log(maxFrequency((nums = [3, 9, 6]), (k = 2)));
console.log(maxFrequency([1, 4, 8, 13], (k = 5)));

console.log(maxFrequency((nums = [1, 2, 4]), (k = 5)));
