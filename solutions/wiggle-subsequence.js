var wiggleMaxLength = function (nums = []) {
  if (nums.length <= 1) {
    return nums.length;
  }
  let count = 1;
  let expecting = null;
  for (let index = 1; index < nums.length; index++) {
    if (nums[index] > nums[index - 1]) {
      const currentState = 'U';
      if (expecting === null) {
        expecting = 'D';
        count++;
      } else if (expecting === currentState) {
        count++;
        expecting = 'D';
      }
    } else if (nums[index] < nums[index - 1]) {
      const currentState = 'D';
      if (expecting === null) {
        expecting = 'U';
        count++;
      } else if (expecting === currentState) {
        count++;
        expecting = 'U';
      }
    }
  }
  return count;
};

console.log(wiggleMaxLength((nums = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8])));
console.log(wiggleMaxLength((nums = [1, 7, 4, 9, 2, 5])));
console.log(wiggleMaxLength((nums = [1, 2, 3, 4, 5, 6, 7, 8, 9])));
