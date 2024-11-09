var containsNearbyDuplicate = function (nums, k) {
  for (let index = 0; index < nums.length; index++) {
    for (let index2 = index + 1; index2 <= index + k; index2++) {
      if (nums[index2] === nums[index] && Math.abs(index - index2) <= k) {
        return true;
      }
    }
  }
  return false;
};
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
