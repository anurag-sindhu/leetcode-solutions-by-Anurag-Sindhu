var minDifference1 = function (nums) {
  if (!nums.length) {
    return -1;
  }
  if (nums.length <= 4) {
    return 0;
  }
  const totalLength = nums.length;
  const sortedNums = nums.sort((a, b) => a - b);
  //First
  const firstWay = sortedNums[totalLength - 1 - 0] - sortedNums[3];
  //Second
  const secondWay = sortedNums[totalLength - 1 - 1] - sortedNums[2];
  //Third
  const thirdWay = sortedNums[totalLength - 1 - 2] - sortedNums[1];
  //Fourth
  const fourthWay = sortedNums[totalLength - 1 - 3] - sortedNums[0];
  return Math.min(firstWay, secondWay, thirdWay, fourthWay);
};

function getHighestNumber(nums) {
  let output = -Infinity;
  for (const iterator of nums) {
    if (iterator > output) {
      output = iterator;
    }
  }
  return output;
}

function getLowestNumber(nums) {
  let output = Infinity;
  for (const iterator of nums) {
    if (iterator < output) {
      output = iterator;
    }
  }
  return output;
}

function getFourHighestNumbers(nums) {
  const lowestNumber = getLowestNumber(nums);
  let firstHighest = lowestNumber;
  let secondHighest = lowestNumber;
  let thirdHighest = lowestNumber;
  let fourthHighest = lowestNumber;
  for (let index = 0; index < nums.length; index++) {
    if (firstHighest <= nums[index]) {
      if (fourthHighest <= thirdHighest) {
        fourthHighest = thirdHighest;
      }
      if (thirdHighest <= secondHighest) {
        thirdHighest = secondHighest;
      }
      if (secondHighest <= firstHighest) {
        secondHighest = firstHighest;
      }
      firstHighest = nums[index];
    }
    if (secondHighest <= nums[index] && firstHighest !== nums[index]) {
      if (fourthHighest <= thirdHighest) {
        fourthHighest = thirdHighest;
      }
      if (thirdHighest <= secondHighest) {
        thirdHighest = secondHighest;
      }
      secondHighest = nums[index];
    }
    if (
      thirdHighest <= nums[index] &&
      firstHighest !== nums[index] &&
      secondHighest !== nums[index]
    ) {
      if (fourthHighest <= thirdHighest) {
        fourthHighest = thirdHighest;
      }
      thirdHighest = nums[index];
    }
    if (
      fourthHighest <= nums[index] &&
      firstHighest !== nums[index] &&
      secondHighest !== nums[index] &&
      thirdHighest !== nums[index]
    ) {
      fourthHighest = nums[index];
    }
  }
  return { firstHighest, secondHighest, thirdHighest, fourthHighest };
}
function getFourLowestNumbers(nums) {
  const highestNumber = getHighestNumber(nums);
  let firstLowest = highestNumber;
  let secondLowest = highestNumber;
  let thirdLowest = highestNumber;
  let fourthLowest = highestNumber;
  for (let index = 0; index < nums.length; index++) {
    if (firstLowest >= nums[index]) {
      if (fourthLowest >= thirdLowest) {
        fourthLowest = thirdLowest;
      }
      if (thirdLowest >= secondLowest) {
        thirdLowest = secondLowest;
      }
      if (secondLowest >= firstLowest) {
        secondLowest = firstLowest;
      }
      firstLowest = nums[index];
    }
    if (secondLowest >= nums[index] && firstLowest !== nums[index]) {
      if (fourthLowest >= thirdLowest) {
        fourthLowest = thirdLowest;
      }
      if (thirdLowest >= secondLowest) {
        thirdLowest = secondLowest;
      }
      secondLowest = nums[index];
    }
    if (thirdLowest >= nums[index] && firstLowest !== nums[index] && secondLowest !== nums[index]) {
      if (fourthLowest >= thirdLowest) {
        fourthLowest = thirdLowest;
      }
      thirdLowest = nums[index];
    }
    if (
      fourthLowest >= nums[index] &&
      firstLowest !== nums[index] &&
      secondLowest !== nums[index] &&
      thirdLowest !== nums[index]
    ) {
      fourthLowest = nums[index];
    }
  }
  return { firstLowest, secondLowest, thirdLowest, fourthLowest };
}

var minDifference = function (nums) {
  if (!nums.length) {
    return -1;
  }
  if (nums.length <= 4) {
    return 0;
  }
  const { firstLowest, secondLowest, thirdLowest, fourthLowest } = getFourLowestNumbers(nums);
  const { firstHighest, secondHighest, thirdHighest, fourthHighest } = getFourHighestNumbers(nums);
  //First
  const firstWay = firstHighest - fourthLowest;
  //Second
  const secondWay = secondHighest - thirdLowest;
  //Third
  const thirdWay = thirdHighest - secondLowest;
  //Fourth
  const fourthWay = fourthHighest - firstLowest;
  return Math.min(firstWay, secondWay, thirdWay, fourthWay);
};

console.log(minDifference((nums = [6, 6, 0, 1, 1, 4, 6])));
console.log(minDifference((nums = [5, 3, 2, 4])));
console.log(minDifference((nums = [1, 5, 0, 10, 14])));
