var countSubarrays = function (nums, k) {
    let count = 0;
    let backwardIndex = 0;
    let subArrayFrequencyStorage = {};
    const maxElement = Math.max(...nums);
    for (let index = 0; index < nums.length; index++) {
        if (!subArrayFrequencyStorage[nums[index]]) {
            subArrayFrequencyStorage[nums[index]] = 0;
        }
        subArrayFrequencyStorage[nums[index]] += 1;
        while (subArrayFrequencyStorage[maxElement] === k) {
            const restElementsAfterCurrentIndex = nums.length - index - 1;
            count += 1 + restElementsAfterCurrentIndex;
            subArrayFrequencyStorage[nums[backwardIndex++]] -= 1;
        }
    }

    return count;
};

console.log(countSubarrays((nums = [1, 3, 2, 3, 3]), (k = 2)));
console.log(countSubarrays((nums = [1, 4, 2, 1]), (k = 3)));
