var sortColors = function (nums) {
  const countConfig = { 0: 0, 1: 0, 2: 0 };
  for (const iterator of nums) {
    countConfig[iterator] += 1;
  }
  let index = 0;
  for (const key in countConfig) {
    while (countConfig[key]--) {
      nums[index++] = Number(key);
    }
  }
  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
