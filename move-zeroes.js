var moveZeroes = function (nums) {
  let pos = 0;
  for (const iterator of nums) {
    if (iterator != 0) {
      nums[pos++] = iterator;
    }
  }
  for (let index = pos; index < nums.length; index++) {
    nums[pos++] = 0;
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));
