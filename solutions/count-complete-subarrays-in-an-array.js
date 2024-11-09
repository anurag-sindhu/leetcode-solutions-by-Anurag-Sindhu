var countCompleteSubarrays = function (nums) {
    let count = 0
    let backwardIndex = 0
    let subArrayUniqueElements = {}
    let totalUniqueElements = (function () {
        let object = {}
        for (const iterator of nums) {
            object[iterator] = true
        }
        return Object.keys(object).length
    })()
    for (let index = 0; index < nums.length; index++) {
        if (!subArrayUniqueElements[nums[index]]) {
            subArrayUniqueElements[nums[index]] = 0
        }
        subArrayUniqueElements[nums[index]] += 1
        while (Object.keys(subArrayUniqueElements).length === totalUniqueElements) {
            const restElements = nums.length - index - 1
            count += 1 + restElements
            subArrayUniqueElements[nums[backwardIndex]] -= 1
            if (!subArrayUniqueElements[nums[backwardIndex]]) {
                delete subArrayUniqueElements[nums[backwardIndex]]
            }
            backwardIndex += 1
        }
    }

    return count
};

console.log(countCompleteSubarrays(nums = [1, 3, 1, 2, 2]) === 4);
console.log(countCompleteSubarrays(nums = [5, 5, 5, 5]) === 10);
console.log(countCompleteSubarrays(nums = [2, 4, 2, 4, 2]) === 10);