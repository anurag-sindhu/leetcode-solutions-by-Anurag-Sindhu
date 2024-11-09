var subarraySum = function (nums, target) {
  let tempSum = nums[0];
  let count = 0;

  const currentSumArray = [tempSum];
  for (let index = 1; index < nums.length; index++) {
    tempSum += nums[index];
    currentSumArray.push(tempSum);
  }
  const frequencyObject = {};
  for (const key of currentSumArray) {
    if (key === target) {
      count += 1;
    }
    if (frequencyObject[key - target]) {
      count += frequencyObject[key - target];
    }
    if (frequencyObject[key]) {
      frequencyObject[key] += 1;
    } else {
      frequencyObject[key] = 1;
    }
  }
  return count;
};
console.log(subarraySum([1, 0, 1, 2, -1], (k = 2)));
console.log(subarraySum([1, 1, 1], (k = 2)));
console.log(subarraySum([1, 2, 3], (k = 3)));
