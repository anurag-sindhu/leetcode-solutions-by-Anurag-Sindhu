var threeSumClosest = function (nums, target) {
  if (nums.length <= 3) {
    return nums.reduce((acc, current) => acc + current);
  }
  let min = Infinity;
  let sum = Infinity;
  const sortedNums = nums.sort((a, b) => a - b);
  const totalLength = sortedNums.length;
  let pointerOneIndex = 0;
  let pointerTwoIndex = 1;
  let pointerThreeIndex = totalLength - 1;
  let tempSum = null;
  let difference = null;
  let absoluteValue = null;
  while (pointerThreeIndex > pointerTwoIndex) {
    tempSum =
      sortedNums[pointerOneIndex] + sortedNums[pointerTwoIndex] + sortedNums[pointerThreeIndex];
    difference = tempSum - target;
    absoluteValue = Math.abs(tempSum - target);
    if (absoluteValue < min) {
      min = absoluteValue;
      sum = tempSum;
      if (target === tempSum) {
        return tempSum;
      }
    }
    if (tempSum > target) {
      pointerThreeIndex--;
    } else {
      if (pointerTwoIndex - pointerOneIndex >= 2) {
        pointerOneIndex++;
      } else {
        pointerTwoIndex++;
      }
    }
  }
  return sum;
};

console.log(threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2));
console.log(threeSumClosest((nums = [-1, 2, 1, -4]), (target = 1)));
console.log(threeSumClosest((nums = [0, 0, 0]), (target = 1)));
