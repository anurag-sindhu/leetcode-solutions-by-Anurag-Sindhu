var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  const sumPair = [];
  for (let index = 0; index < nums.length / 2; index++) {
    sumPair.push(nums[index] + nums[nums.length - 1 - index]);
  }
  return Math.max(...sumPair);
};

console.log(minPairSum((nums = [3, 5, 2, 3])));
console.log(minPairSum((nums = [3, 5, 4, 2, 4, 6])));
