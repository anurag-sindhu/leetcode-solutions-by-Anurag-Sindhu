var searchMatrix = function (matrix, target) {
  var isElementPresentInArray = function (nums, target, index = 0) {
    if (!nums.length) {
      return false;
    }
    if (nums.length === 1) {
      if (nums[0] !== target) {
        return false;
      }
      return true;
    }
    const half = parseInt(nums.length / 2);
    if (nums[half] === target) {
      return index + half;
    } else if (nums[half] < target) {
      return isElementPresentInArray(nums.slice(half), target, index + half);
    } else {
      return isElementPresentInArray(nums.slice(0, half), target, index);
    }
  };
  if (!matrix.length) {
    return false;
  }
  const length = matrix.length;
  const half = Math.floor(length / 2);
  const tempLength = matrix[half].length - 1;
  if (matrix[half][0] === target) {
    return true;
  } else if (matrix[half][tempLength] === target) {
    return true;
  } else if (matrix[half][0] < target && matrix[half][tempLength] > target) {
    return isElementPresentInArray(matrix[half].slice(1, tempLength), target);
  } else if (matrix[half][0] < target) {
    return searchMatrix(matrix.slice(half + 1), target);
  } else {
    return searchMatrix(matrix.slice(0, half), target);
  }
};
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60]
    ],
    3
  )
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60]
    ],
    13
  )
);
