var longestEqualSubarray = function (nums, k) {
    let totalElementsInThePicture = 0;
    let mostFrequentElement = 0;
    let elementMapping = {};
    let backPointer = 0;
    for (let index = 0; index < nums.length; index++) {
        if (!elementMapping[nums[index]]) {
            elementMapping[nums[index]] = 0
        }
        elementMapping[nums[index]] += 1
        mostFrequentElement = Math.max(elementMapping[nums[index]], mostFrequentElement)
        totalElementsInThePicture++
        while (totalElementsInThePicture - mostFrequentElement > k) {
            elementMapping[nums[backPointer++]] -= 1;
            totalElementsInThePicture--
        }
    }
    return mostFrequentElement
};

console.log(longestEqualSubarray(nums = [9, 5, 1, 4, 2, 3, 4, 13, 5, 2, 7, 2, 2, 14], k = 4) === 3);
console.log(longestEqualSubarray(nums = [1, 1, 2, 2, 1, 1], k = 2) === 4);
console.log(longestEqualSubarray(nums = [1, 3, 2, 3, 1, 3], k = 3) === 3);
console.log(longestEqualSubarray(nums = [3, 1, 5, 3, 1, 1], k = 0) === 2);