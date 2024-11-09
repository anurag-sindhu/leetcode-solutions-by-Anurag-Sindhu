var maxProduct1 = function (nums) {
  const sortedARray = nums.sort((a, b) => a - b);
  const total = sortedARray.length;
  return (sortedARray[total - 1] - 1) * (sortedARray[total - 2] - 1);
};

function getFrequency(nums) {
  const obj = {};
  for (const iterator of nums) {
    if (!obj[iterator]) {
      obj[iterator] = 0;
    }
    obj[iterator] += 1;
  }
  return obj;
}

function findTwoLargestSum(nums) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (const iterator of nums) {
    if (iterator > firstLargest) {
      if (firstLargest > secondLargest) {
        secondLargest = firstLargest;
      }
      firstLargest = iterator;
    }

    if (iterator !== firstLargest && iterator > secondLargest) {
      secondLargest = iterator;
    }
  }
  const frequency = getFrequency(nums);
  if (frequency[firstLargest] >= 2) {
    return { firstLargest, secondLargest: firstLargest };
  }
  return { firstLargest, secondLargest };
}

var maxProduct = function (nums) {
  const { firstLargest, secondLargest } = findTwoLargestSum(nums);
  return (firstLargest - 1) * (secondLargest - 1);
};
console.log(maxProduct((nums = [1, 5, 4, 5])));
console.log(maxProduct((nums = [3, 7])));
console.log(maxProduct((nums = [5, 3, 2, 4])));
console.log(maxProduct((nums = [3, 4, 5, 2])));
