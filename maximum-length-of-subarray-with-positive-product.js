var getMaxLen = function (nums) {
  const memoization = {};
  const getProductFromIndexTillIndex = (fromIndex, tillIndex) => {
    let result = null;
    if (fromIndex === tillIndex) {
      return nums[fromIndex];
    } else if (tillIndex - fromIndex === 1) {
      result = nums[fromIndex] * nums[tillIndex];
    } else {
      result = memoization[fromIndex][tillIndex - 1] * nums[tillIndex];
    }
    if (!memoization[fromIndex]) {
      memoization[fromIndex] = {};
    }
    memoization[fromIndex][tillIndex] = result;
    return result;
  };
  let maxProductSubArray = null;
  for (let lengthSize = 1; lengthSize <= nums.length; lengthSize++) {
    for (let index = 0; index <= nums.length - lengthSize; index++) {
      const fromIndex = index;
      const tillIndex = index + lengthSize - 1;
      const product = getProductFromIndexTillIndex(fromIndex, tillIndex);
      if (product > 0) {
        const newLengthOfArray = tillIndex - fromIndex + 1;
        if (maxProductSubArray === null) {
          const newSubArray = nums.slice(fromIndex, tillIndex + 1);
          maxProductSubArray = newSubArray;
        } else if (maxProductSubArray.length < newLengthOfArray) {
          const newSubArray = nums.slice(fromIndex, tillIndex + 1);
          maxProductSubArray = newSubArray;
        }
      }
    }
  }
  return (maxProductSubArray && maxProductSubArray.length) || 0;
};

console.log(getMaxLen((nums = [1, -2, -3, 4])));
console.log(getMaxLen((nums = [-1])));
console.log(getMaxLen((nums = [0, 1, -2, -3, -4])));
console.log(getMaxLen((nums = [0, 1, -2, -3, -4])));
console.log(getMaxLen((nums = [-1, -2, -3, 0, 1])));
