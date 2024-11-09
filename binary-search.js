var search = function (nums, target, index = 0) {
  if (!nums.length) {
    return -1;
  }
  if (nums.length === 1) {
    if (nums[0] !== target) {
      return -1;
    }
  }
  const half = parseInt(nums.length / 2);
  if (nums[half] === target) {
    return index + half;
  } else if (nums[half] < target) {
    return search(nums.slice(half), target, index + half);
  } else {
    return search(nums.slice(0, half), target, index);
  }
};

console.log(search([5], (target = 5)));
console.log(search([-1, 0, 3, 5, 9, 12], (target = 2)));
console.log(search([-1, 0, 3, 5, 9, 12], (target = 12)));
console.log(search([-1, 0, 3, 5, 9, 12], (target = 9)));
console.log(search([-1, 0, 3, 5, 9, 12], (target = 2)));
