function searchInsert(nums, target) {
  let lowIndex = 0,
    highIndex = nums.length - 1;

  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((lowIndex + highIndex) / 2);
    let midValue = nums[midIndex];
    if (midValue === target) {
      return midIndex;
    } else if (midValue > target) {
      highIndex = midIndex - 1;
    } else {
      lowIndex = midIndex + 1;
    }
  }
  return lowIndex;
}

console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3], 2));
console.log(searchInsert([1], 0));
