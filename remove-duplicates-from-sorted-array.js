var removeDuplicates1 = function (nums) {
  for (let index = 0; index < nums.length; index++) {
    if (index !== nums.length) {
      if (nums[index] === nums[index + 1]) {
        nums[index] = false;
      }
    }
  }
  nums = nums.filter((value) => typeof value !== 'boolean');
  return nums.length;
};

var removeDuplicates = function (nums) {
  let pointer = 1;
  let index = 0;
  while (index !== nums.length && pointer < nums.length) {
    if (nums[index] !== nums[pointer]) {
      index++;
      nums[index] = nums[pointer];
    }
    pointer++;
  }
  return ++index;
};
console.log(removeDuplicates([0, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 1, 2]));
