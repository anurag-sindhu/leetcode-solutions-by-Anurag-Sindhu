var maximumSubarraySum = function (nums, k) {
    let sum = 0;
    let result = -Infinity;
    const val2minSum = {};
    for (const [i, val] of nums.entries()) {
        const prevSum = sum;
        sum += val;
        const a = val - k,
            b = val + k;

        const minSumA = val2minSum[a];
        if (minSumA !== undefined) {
            result = Math.max(result, sum - minSumA);
        }
        const minSumB = val2minSum[b];
        if (minSumB !== undefined) {
            result = Math.max(result, sum - minSumB);
        }

        const existing = val2minSum[val] ?? Infinity;
        if (prevSum < existing) {
            val2minSum[val] = prevSum;
        }
    }

    if (result === -Infinity) {
        result = 0;
    }
    return result;
};

console.log(maximumSubarraySum([4, 7, 3, 5, 5], 2) === 20);
console.log(maximumSubarraySum((nums = [-1, 3, 2, 4, 5]), (k = 3)) === 11);
console.log(
    maximumSubarraySum(
        [
            3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3,
            1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1,
            3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3,
            1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1,
        ],
        (k = 2),
    ) === 220,
);
console.log(maximumSubarraySum((nums = [-1, -2, -3, -4]), (k = 2)) === -6);
console.log(maximumSubarraySum((nums = [1, 2, 3, 4, 5, 6]), (k = 1)) === 11);
