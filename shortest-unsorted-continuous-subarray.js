var findUnsortedSubarray = function (nums) {
  let tillUnsortedIndex = 0;
  for (; tillUnsortedIndex < nums.length - 1; tillUnsortedIndex++) {
    if (nums[tillUnsortedIndex] > nums[tillUnsortedIndex + 1]) {
      break;
    }
  }

  if (tillUnsortedIndex === nums.length - 1) {
    return 0;
  }

  let fromSortedIndex = nums.length - 1;
  for (; fromSortedIndex >= 0; fromSortedIndex--) {
    if (nums[fromSortedIndex] < nums[fromSortedIndex - 1]) {
      break;
    }
  }

  let min = Infinity;
  let max = -Infinity;
  for (let index = tillUnsortedIndex; index <= fromSortedIndex; index++) {
    if (min > nums[index]) {
      min = nums[index];
    }
    if (max < nums[index]) {
      max = nums[index];
    }
  }
  let newTillUnsortedIndex = tillUnsortedIndex;
  while (tillUnsortedIndex >= 0) {
    if (nums[tillUnsortedIndex] > min) {
      newTillUnsortedIndex = tillUnsortedIndex;
    }
    tillUnsortedIndex--;
  }
  let newFromSortedIndex = fromSortedIndex;
  while (fromSortedIndex < nums.length) {
    if (nums[fromSortedIndex] < max) {
      newFromSortedIndex = fromSortedIndex;
    }
    fromSortedIndex++;
  }
  let res = newFromSortedIndex - newTillUnsortedIndex + 1;
  return res;
};

console.log(findUnsortedSubarray((nums = [2, 3, 1, 4, 5])) === 3);
console.log(findUnsortedSubarray((nums = [2, 6, 4, 8, 10, 9, 15])) === 5);
console.log(findUnsortedSubarray((nums = [4, 1, 5, 5, 5])) === 2);
console.log(findUnsortedSubarray((nums = [1, 3, 2, 2, 2])) === 4);
console.log(findUnsortedSubarray((nums = [1, 2, 3, 3, 3])) === 0);
console.log(findUnsortedSubarray((nums = [1, 2, 3, 4])) === 0);
console.log(findUnsortedSubarray((nums = [4, 3, 2, 1])) === 4);
console.log(findUnsortedSubarray((nums = [1])) === 0);
