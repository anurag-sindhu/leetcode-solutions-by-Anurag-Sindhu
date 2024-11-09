var containsDuplicate = function (nums) {
  const obj = {};
  for (const iterator of nums) {
    if (!obj[iterator]) {
      obj[iterator] = 1;
    } else {
      return true;
    }
  }
  return false;
};

console.log(singleNumber([1, 2, 3, 1]));
console.log(singleNumber([1, 2, 3, 4]));
console.log(singleNumber([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
