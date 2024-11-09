var searchRange1 = function (nums, target, index = 0) {
  const half = parseInt(nums.length / 2);
  const firstHalfArray = nums.slice(0, half);
  const secondHalfArray = nums.slice(half);
  const found = function (array, foundIndex, target, orgIndex) {
    let temp = null;
    if (!foundIndex) {
      let index = null;
      temp = orgIndex;
      for (index = 1; index < array.length; index++) {
        if (target !== array[index]) {
          return [temp, temp + index - 1];
        }
      }
      return [temp, temp + index - 1];
    } else {
      let index = null;
      temp = orgIndex;
      for (index = array.length - 2; index >= 0; index--) {
        if (target !== array[index]) {
          return [orgIndex + index + 1, orgIndex + foundIndex];
        }
      }
      return [orgIndex + index + 1, orgIndex + foundIndex];
    }
  };
  if (firstHalfArray[0] === target) {
    return found(firstHalfArray, 0, target, index);
  } else if (firstHalfArray[firstHalfArray.length - 1] === target) {
    return found(firstHalfArray, firstHalfArray.length - 1, target, index);
  } else if (secondHalfArray[0] === target) {
    return found(secondHalfArray, 0, target, index + half);
  } else if (secondHalfArray[secondHalfArray.length - 1] === target) {
    return found(secondHalfArray, secondHalfArray.length - 1, target, index + half);
  } else if (secondHalfArray[0] > target) {
    return searchRange(secondHalfArray, target, index + half);
  } else {
    return searchRange(secondHalfArray, target, index + half);
  }
};

var searchRange = function (nums, target, index = 0) {
  if (!nums || !nums.length) {
    return [-1, -1];
  }
    if (nums.length === 1) {
        if (nums[0] === target) {
          return [index,index]
      }
    return [-1, -1];
  }
  const half = parseInt(nums.length / 2);
  const firstHalfArray = nums.slice(0, half);
  const secondHalfArray = nums.slice(half);
  const found = function (array, target, orgIndex) {
    let startIndex = null;
    let endIndex = null;
    let index = null;
    for (index = 0; index < array.length; index++) {
      if (array[index] === target) {
        if (startIndex === null) {
          startIndex = index;
        }
      } else if (startIndex !== null) {
        endIndex = index;
        break;
      }
    }
    if (endIndex === null) {
      endIndex = index;
    }
    return [orgIndex + startIndex, orgIndex + endIndex - 1];
  };
  if (
    firstHalfArray[0] === target ||
    firstHalfArray[half - 1] === target ||
    secondHalfArray[half] === target ||
    secondHalfArray[secondHalfArray.length - 1] === target
  ) {
    return found(nums, target, index);
  } else if (secondHalfArray[0] > target) {
    return searchRange(firstHalfArray, target, index);
  } else {
    return searchRange(secondHalfArray, target, index + half);
  }
};
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([7, 7, 8, 8, 10], 10));
console.log(searchRange([7, 7, 8, 8, 10], 7));
console.log(searchRange([5, 7, 7, 8, 8, 10], 7));
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 10], 8));
console.log(searchRange([1, 2, 3, 3, 3, 4, 5, 6, 7, 8, 8, 8, 8, 9, 10], 8));
