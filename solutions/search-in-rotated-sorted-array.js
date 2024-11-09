function binarySearch(arr, search, index = 0) {
  if (!arr.length) {
    return -1;
  }
  if (arr.length === 1) {
    if (arr[0] !== search) {
      return -1;
    }
    return index;
  }
  const half = Math.floor(arr.length / 2);
  if (arr[half] === search) {
    return index + half;
  } else if (arr[half] > search) {
    return binarySearch(arr.slice(0, half), search, index);
  } else {
    return binarySearch(arr.slice(half), search, index + half);
  }
}

const findOriginalStartingIndex = (num, index = 0) => {
  if (num.length === 1) {
    return index;
  }
  if (num.length === 2) {
    if (num[0] > num[1]) {
      return index + 1;
    }
    return index;
  }
  const half = Math.floor(num.length / 2);
  if (num[half] < num[half - 1] && num[half] < num[half + 1]) {
    return half + index;
  } else if (num[half] > num[num.length - 1]) {
    return findOriginalStartingIndex(num.slice(half), index + half);
  } else {
    return findOriginalStartingIndex(num.slice(0, half), index);
  }
};

var search = function (nums, target) {
  if (!nums.length) {
    return -1;
  }
  const getStartingIndex = findOriginalStartingIndex(nums);
  if (nums[getStartingIndex] === target) {
    return getStartingIndex;
  } else if (nums[nums.length - 1] < target) {
    return binarySearch(nums.slice(0, getStartingIndex), target);
  } else {
    return binarySearch(nums.slice(getStartingIndex), target, getStartingIndex);
  }
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 2));
console.log(search([4, 5, 6, 7, 8, 9, 0, 1, 2], 6));
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 1, 2, 3], 3));
console.log(search([4, 5, 6, 7, 0, 1, 2], 1));
console.log(search([4, 5, 6, 7, 0, 1, 2], 5));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));
