var singleNumber2 = function (nums) {
  const obj = {};
  for (const iterator of nums) {
    if (!obj[iterator]) {
      obj[iterator] = 1;
    } else {
      obj[iterator] += 1;
    }
  }
  for (const key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
};

var singleNumber1 = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  nums = nums.sort((a, b) => a - b);
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== nums[index + 1]) {
      return nums[index];
    }
    while (nums[index] === nums[index + 1]) {
      index++;
    }
  }
};

var singleNumber = function (nums) {
  for (let index = 0; index < nums.length; index++) {
    nums[index] = parseInt(nums[index]).toString(2).split('').reverse().join('');
  }
  let finalSum = 0;
  let tempSum = 0;
  for (let indexBits = 0; indexBits < 32; indexBits++) {
    for (let index = 0; index < nums.length; index++) {
      if (parseInt(nums[index][indexBits])) {
        tempSum += parseInt(nums[index][indexBits]);
      }
    }
    if (!isNaN(tempSum)) {
      const mode = tempSum % 3;
      if (mode) {
        finalSum += Math.pow(2, indexBits);
      }
    }
    tempSum = 0;
  }
  return finalSum;
};
console.log(singleNumber([30000, 500, 100, 30000, 100, 30000, 100]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
console.log(singleNumber([2, 2, 2, 3]));
console.log(singleNumber([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5]));
console.log(singleNumber([1, 1, 1, 2, 2, 2, 3, 4, 4, 4]));
