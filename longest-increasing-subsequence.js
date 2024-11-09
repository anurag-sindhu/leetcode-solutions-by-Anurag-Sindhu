var lengthOfLIS1 = function (nums) {
  const numsLength = nums.length;
  const obj = {};
  let index1 = 0,
    index2 = 1;
  let tempSum = 0;
  let sum = 1;
  for (let index = 0; index < numsLength; index++) {
    obj[index] = 1;
  }
  while (index2 < numsLength) {
    index1 = 0;
    while (index1 < index2) {
      if (nums[index1] < nums[index2]) {
        tempSum = 1 + obj[index1];
        if (tempSum > obj[index2]) {
          obj[index2] = tempSum;
          if (sum < tempSum) {
            sum = tempSum;
          }
        }
      }
      index1++;
    }
    index2++;
  }
  return sum;
};

var lengthOfLIS = function (nums) {
  const obj = {};
  let index1 = 0,
    index2 = 1;
  let tempSum = 0;
  let sum = 1;
  for (let index = 0; index < nums.length; index++) {
    obj[index] = 1;
  }
  while (index2 < nums.length) {
    index1 = index2 - 1;
    while (index1 >= 0 && index1 < index2) {
      if (nums[index1] < nums[index2]) {
        tempSum = 1 + obj[index1];
        if (tempSum > obj[index2]) {
          obj[index2] = tempSum;
          if (sum < tempSum) {
            sum = tempSum;
            break;
          }
        }
      }
      index1--;
    }
    index2++;
  }
  return sum;
};

console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]) === 4);
console.log(lengthOfLIS([1, 2, 0, 4]));
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
