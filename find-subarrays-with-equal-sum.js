var findSubarrays = function (nums) {
  let obj = {};
  let tempSum = nums[0];
  for (let index = 1; index < nums.length; index++) {
    tempSum += nums[index];
    if (obj[tempSum] || obj[tempSum] === 0) {
      return true;
    }
    obj[tempSum] = tempSum;
    tempSum -= nums[index - 1];
  }
  return false;
};

console.log(findSubarrays((nums = [4, 2, 4])));
console.log(findSubarrays((nums = [1, 2, 3, 4, 5])));
console.log(findSubarrays((nums = [0, 0, 0])));
