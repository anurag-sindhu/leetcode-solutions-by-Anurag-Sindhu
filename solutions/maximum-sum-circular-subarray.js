function getIndexOfFirstNegativeNumber(arr) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < 0) {
      return index;
    }
  }
}

function getIndexOfLastNegativeNumber(arr) {
  for (let index = arr.length - 1; index >= 0; index--) {
    if (arr[index] < 0) {
      return index;
    }
  }
}

function areAllPositive(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < 0) {
      return false;
    }
    sum += arr[index];
  }
  return sum;
}

function areAllNegative(arr) {
  let smallest = -Infinity;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > -1) {
      return false;
    }
    if (smallest < arr[index]) {
      smallest = arr[index];
    }
  }
  return smallest;
}

var maxSubarraySumCircular = function (arr) {
  const positiveSum = areAllPositive(arr);
  const negativeSum = areAllNegative(arr);
  if (positiveSum || positiveSum === 0) {
    return positiveSum;
  } else if (areAllNegative(arr)) {
    return negativeSum;
  } else {
    let indexOfFirstNegativeNumber = getIndexOfFirstNegativeNumber(arr);
    let indexOfLastNegativeNumber = getIndexOfLastNegativeNumber(arr);
    if (indexOfFirstNegativeNumber !== indexOfLastNegativeNumber) {
      let maxSum = 0;
      let maxMiddleSum = null;
      let tempSum = 0;
      for (let index = indexOfFirstNegativeNumber + 1; index < indexOfLastNegativeNumber; index++) {
        if (maxMiddleSum !== null && arr[index] < 0) {
          tempSum = 0;
        } else {
          tempSum += arr[index];
          if (maxMiddleSum < tempSum) {
            maxMiddleSum = tempSum;
          }
        }
      }

      let leftSum = 0;
      let rightSum = 0;
      for (let index = 0; index < indexOfFirstNegativeNumber; index++) {
        leftSum += arr[index];
      }
      for (let index = indexOfLastNegativeNumber + 1; index < arr.length; index++) {
        rightSum += arr[index];
      }
      maxSum = Math.max(leftSum + rightSum, maxMiddleSum);
      return maxSum;
    } else {
      let leftSum = 0;
      let rightSum = 0;
      for (let index = 0; index < indexOfFirstNegativeNumber; index++) {
        leftSum += arr[index];
      }
      for (let index = indexOfFirstNegativeNumber + 1; index < arr.length; index++) {
        rightSum += arr[index];
      }
      return leftSum + rightSum;
    }
  }
};

console.log(maxSubarraySumCircular((nums = [-3, -2, -3])));
console.log(maxSubarraySumCircular((nums = [1, -2, 3, -2])));
console.log(maxSubarraySumCircular((nums = [1, -2, 1, 3, -2])));
console.log(maxSubarraySumCircular((nums = [5, -3, 5])));
