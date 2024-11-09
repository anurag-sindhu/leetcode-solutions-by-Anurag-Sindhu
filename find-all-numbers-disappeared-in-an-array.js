var findDisappearedNumbers = function (nums) {
  const obj = {};
  for (let index = 0; index < nums.length; index++) {
    if (!obj[nums[index]]) {
      obj[nums[index]] = true;
    }
  }
  const absent = [];
  for (let index = 1; index <= nums.length; index++) {
    if (!obj[index]) {
      absent.push(index);
    }
  }
  return absent;
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
