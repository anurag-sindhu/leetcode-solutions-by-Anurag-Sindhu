var findErrorNums = function (nums) {
  const obj = {};
  for (const iterator of nums) {
    if (!obj[iterator]) {
      obj[iterator] = 1;
    } else {
      obj[iterator] += 1;
    }
  }
  let missing = null,
    extra = null;
  for (let index = 1; index <= nums.length; index++) {
    if (!obj[index]) {
      missing = index;
    }
    if (obj[index] > 1) {
      extra = index;
    }
  }
  return [extra, missing];
};

console.log(findErrorNums([2, 2]));
console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 1]));
