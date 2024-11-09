var arrayPairSum = function (nums) {
  const findMin = (a, b) => {
    if (a > b) {
      return b;
    }
    return a;
  };
  let sum = 0;
  const sortedArray = nums.sort((a, b) => b - a);
  for (let index = 0; index < sortedArray.length; index = index + 2) {
    sum += findMin(sortedArray[index], sortedArray[index + 1]);
  }
  return sum;
};
console.log(arrayPairSum([1, 4, 3, 2]));
console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
