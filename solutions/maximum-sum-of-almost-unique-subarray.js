var maxSum = function (nums, numberOfDistinctElements, almostUniqueSubArraysLength) {
    let subArrayUniqueElements = {}
    let subArrayUniqueElementsCount = 0
    let maxSumOfSubArray = 0
    let sumOfKLength = (function () {
        let sum = 0
        for (let index = 0; index < almostUniqueSubArraysLength - 1; index++) {
            if (!subArrayUniqueElements[nums[index]]) {
                subArrayUniqueElements[nums[index]] = 0
                subArrayUniqueElementsCount++
            }
            subArrayUniqueElements[nums[index]] += 1
            sum += nums[index]
        }
        return sum
    })()

    for (let index = almostUniqueSubArraysLength - 1; index < nums.length; index++) {
        if (!subArrayUniqueElements[nums[index]]) {
            subArrayUniqueElements[nums[index]] = 0
            subArrayUniqueElementsCount++
        }
        subArrayUniqueElements[nums[index]] += 1
        sumOfKLength += nums[index]
        if (subArrayUniqueElementsCount >= numberOfDistinctElements) {
            if (maxSumOfSubArray < sumOfKLength) {
                maxSumOfSubArray = sumOfKLength
            }
        }
        const backIndexToBeEliminated = index - almostUniqueSubArraysLength + 1
        sumOfKLength -= nums[backIndexToBeEliminated]
        subArrayUniqueElements[nums[backIndexToBeEliminated]] -= 1
        if (subArrayUniqueElements[nums[backIndexToBeEliminated]] === 0) {
            subArrayUniqueElementsCount--
        }
    }
    return maxSumOfSubArray
};

console.log(maxSum(nums = [2, 6, 7, 3, 1, 7], m = 3, k = 4) === 18);
console.log(maxSum([1, 1, 1, 3],
    2,
    2) === 4);
console.log(maxSum(nums = [5, 9, 9, 2, 4, 5, 4], m = 1, k = 3) === 23);
console.log(maxSum(nums = [1, 2, 1, 2, 1, 2, 1], m = 3, k = 3) === 0);