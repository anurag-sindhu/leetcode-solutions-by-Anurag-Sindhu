var singleNonDuplicate = function (nums = []) {
  if (nums.length === 1) {
    return nums[0];
  }
  const half = Math.floor(nums.length / 2);
  if (nums[half] !== nums[half - 1] && nums[half] !== nums[half + 1]) {
    return nums[half];
  } else if (half % 2 === 0) {
    if (nums[half] === nums[half - 1]) {
      return singleNonDuplicate(nums.slice(0, half - 1));
    }
    return singleNonDuplicate(nums.slice(half + 2));
  } else {
    if (nums[half] === nums[half - 1]) {
      return singleNonDuplicate(nums.slice(half + 1));
    }
    return singleNonDuplicate(nums.slice(0, half));
  }
};
console.log(singleNonDuplicate((nums = [1, 1, 2, 2, 4, 4, 5, 5, 9])));
console.log(singleNonDuplicate((nums = [1, 1, 2, 3, 3])));
console.log(singleNonDuplicate((nums = [1, 1, 2, 3, 3, 4, 4, 8, 8])));
console.log(singleNonDuplicate((nums = [3, 3, 7, 7, 10, 11, 11])));
console.log(singleNonDuplicate((nums = [3, 7, 7, 10, 10, 11, 11])));
