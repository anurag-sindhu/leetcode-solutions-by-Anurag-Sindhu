var maxProduct1 = function (nums) {
  let max = -Infinity;
  const memoization = {};
  function getProduct(fromIndex, toIndex) {
    let prod = null;
    if (!memoization[fromIndex]) {
      memoization[fromIndex] = {};
    }
    if (toIndex === fromIndex) {
      prod = nums[fromIndex];
    } else if (toIndex - fromIndex === 1) {
      prod = nums[fromIndex] * nums[toIndex];
    } else {
      prod = memoization[fromIndex][toIndex - 1] * nums[toIndex];
    }
    memoization[fromIndex][toIndex] = prod;
    return prod;
  }
  for (let length = 1; length <= nums.length; length++) {
    for (let index = 0; index <= nums.length - length; index++) {
      const product = getProduct(index, index + length - 1);
      if (product > max) {
        max = product;
      }
    }
  }
  return max;
};

var maxProduct = function (nums) {
  let finalMax = nums[0];
  let max = 1;
  let min = 1;
  for (const iterator of nums) {
    if (iterator < 0) {
      const store = max;
      max = min;
      min = store;
    }
    max = Math.max(iterator * max, iterator);
    min = Math.min(iterator * min, iterator);
    finalMax = Math.max(max, finalMax);
  }
  return finalMax;
};

console.log(maxProduct((nums = [2, 3, 0, 5, 6])));
console.log(maxProduct((nums = [-2, 0, -1])));
console.log(maxProduct((nums = [2, 3, -2, 4])));
console.log(maxProduct((nums = [-3, -3, -3])));
console.log(maxProduct((nums = [2, 2, 2])));
console.log(maxProduct((nums = [1, 1, 1, 1])));
console.log(maxProduct((nums = [-2])));
console.log(maxProduct((nums = [-2, 0, -1])));
