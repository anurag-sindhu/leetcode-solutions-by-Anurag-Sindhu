var minimumAverageDifference = function (nums) {
  const totalSum = (function () {
    return nums.reduce((acc, num) => acc + num);
  })();
  let leftSum = 0;
  let rightSum = totalSum;
  const sumConfig = {};
  const length = nums.length;
  for (let index = 0; index < length; index++) {
    leftSum += nums[index];
    rightSum -= nums[index];
    let diff = null;
    if (!rightSum) {
      diff = Math.abs(parseInt(leftSum / (index + 1)));
    } else {
      diff = Math.abs(parseInt(leftSum / (index + 1)) - parseInt(rightSum / (length - index - 1)));
    }

    if (!sumConfig[diff]) {
      sumConfig[diff] = [];
    }
    sumConfig[diff].push(index);
  }
  let min = Infinity;
  for (const key in sumConfig) {
    if (min > Number(key)) {
      min = Number(key);
    }
  }
  return sumConfig[min][0];
};

console.log(minimumAverageDifference((nums = [0])));
console.log(minimumAverageDifference((nums = [2, 5, 3, 9, 5, 3])));
