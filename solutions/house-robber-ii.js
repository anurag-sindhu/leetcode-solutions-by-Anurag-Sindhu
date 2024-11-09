function getMax(nums) {
  for (let index = nums.length - 3; index >= 0; index--) {
    if (nums[index + 3] !== undefined) {
      nums[index] += Math.max(nums[index + 2], nums[index + 3]);
    } else {
      nums[index] += nums[index + 2];
    }
  }
  return Math.max(nums[0] || 0, nums[1] || 0);
}

var rob = function (nums) {
  if (!nums.length) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  if (nums.length === 3) {
    return Math.max(Math.max(nums[0], nums[1]), Math.max(nums[1], nums[2]));
  }
  return Math.max(getMax(nums.slice(1)), getMax(nums.slice(0, nums.length - 1)));
};
console.log(rob((nums = [0, 0])));
console.log(rob((nums = [1])));
console.log(rob((nums = [0])));
console.log(rob((nums = [1, 2, 3, 1])));
console.log(rob((nums = [2, 3, 2])));
