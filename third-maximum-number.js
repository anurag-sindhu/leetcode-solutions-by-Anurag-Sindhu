var thirdMax = function (nums) {
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  let thirdMax = -Infinity;
  for (let index = 0; index < nums.length; index++) {
    if (firstMax === nums[index] || secondMax === nums[index] || thirdMax === nums[index]) {
      continue;
    }
    if (firstMax < nums[index]) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = nums[index];
    } else if (secondMax < nums[index]) {
      thirdMax = secondMax;
      secondMax = nums[index];
    } else if (thirdMax < nums[index]) {
      thirdMax = nums[index];
    }
  }
  return thirdMax !== -Infinity ? thirdMax : firstMax;
};
console.log(thirdMax([1, 2, 2, 5, 3, 5]));
console.log(thirdMax([2, 2, 2, 1]));
console.log(thirdMax([5, 2, 2]));
console.log(thirdMax([2, 2, 3, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([3, 2, 1]));
