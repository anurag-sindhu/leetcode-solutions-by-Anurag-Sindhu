var minDeletion = function (nums) {
  let count = 0;
  for (let index = 0; index < nums.length; index++) {
    let updatedIndex = index - count;
    if (updatedIndex % 2 === 0 && nums[index] === nums[index + 1]) {
      count++;
    }
  }
  if ((nums.length - count) % 2 !== 0) {
    count++;
  }
  return count;
};

console.log(minDeletion((nums = [1, 1, 2, 2, 3, 3])));
console.log(minDeletion((nums = [1, 1, 2, 3, 5])));
