var maxSubArrayHelper = function (nums) {
    let currentSum = 0;
    let finalSum = -Infinity;
    for (let index = 0; index < nums.length; index++) {
        currentSum += nums[index];
        finalSum = Math.max(finalSum, currentSum);
    }
    return finalSum;
};

var maxSubArray = function (nums) {
    let midIndex = parseInt(nums.length / 2);
    let sum1 = maxSubArrayHelper(nums.splice(0, midIndex));
    let sum2 = maxSubArrayHelper(nums.splice(midIndex));
    return finalSum;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-1, -2, -3, -4]));
console.log(maxSubArray([-1]));
console.log(maxSubArray([1, -1, 2, -3, 5, -1, 3]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([5, -1, 3]));
console.log(maxSubArray([1, -1]));
console.log(maxSubArray([1]));
