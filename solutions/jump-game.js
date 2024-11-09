var canJump = function (nums) {
  if (nums.length === 1) {
    return true;
  }
  let maxReach = nums[0];
  let length = nums.length;
  let tempSum = 0;
  for (let index = 1; index < length; index++) {
    tempSum = index + nums[index];
    if (maxReach < index) {
      return false;
    }
    if (tempSum > maxReach) {
      maxReach = tempSum;
    }
    if (maxReach >= length - 1) {
      return true;
    }
  }
  return false;
};
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([2, 0]));
console.log(canJump([1, 2]));
console.log(canJump([0]));
console.log(canJump([2, 3, 1, 1, 4]));
