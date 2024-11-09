var removeElement1 = function (nums, val) {
  let index = 0;
  while (index !== nums.length) {
    if (nums[index] === val) {
      nums[index] = false;
    }
    index++;
  }
  nums = nums.filter((value) => typeof value !== 'boolean');
  return nums.length;
};

var removeElement = function (nums, val) {
  let start = 0;
  let index = 0;
  while (index !== nums.length) {
    if (nums[index] !== val) {
      nums[start++] = nums[index];
    }
    index++;
  }
  return start;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 3, 4], 2));
console.log(removeElement([0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 1));
console.log(removeElement([1, 1, 2]));
