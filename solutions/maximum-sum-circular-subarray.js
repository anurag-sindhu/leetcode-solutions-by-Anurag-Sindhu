/**
https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/3066636/weird-kadane-explanation-with-images-by-y4b1m/?envType=study-plan-v2&envId=top-interview-150
maxSubArray
minSubArray
totalSum
 */

var maxSubArray = function (nums) {
    let currentSum = 0;
    let finalSum = -Infinity;
    for (let index = 0; index < nums.length; index++) {
        currentSum += nums[index];

        if (finalSum < currentSum) {
            finalSum = currentSum;
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return finalSum;
};

var minSubArray = function (nums) {
    let maxSum = nums[0];
    let minSum = nums[0];
    let currMaxSum = nums[0];
    let currMinSum = nums[0];
    let totalSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currMinSum = Math.min(currMinSum + nums[i], nums[i]);
        minSum = Math.min(minSum, currMinSum);
        totalSum += nums[i];
    }
    return minSum;
};

var maxSubarraySumCircular = function (nums) {
    const minSumArray = minSubArray(nums);
    const maxSumArray = maxSubArray(nums);
    let maxSum = nums[0];
    let minSum = nums[0];
    let currMaxSum = nums[0];
    let totalSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        totalSum += nums[i];
    }

    const circularSum = totalSum - minSumArray;
    if (circularSum === 0) {
        return maxSumArray;
    }
    return Math.max(maxSumArray, circularSum);
};

console.log(maxSubarraySumCircular((nums = [-3, -2, -3])) === -2);
console.log(maxSubarraySumCircular((nums = [1, -2, 1, 3, -2])) === 4);
console.log(maxSubarraySumCircular((nums = [1, -2, 3, -2])) === 4);
console.log(maxSubarraySumCircular((nums = [5, -3, 5])) === 10);
