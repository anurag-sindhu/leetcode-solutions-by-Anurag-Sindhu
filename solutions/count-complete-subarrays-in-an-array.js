var countCompleteSubarrays = function (nums) {
    let count = 0;
    let totalUniqueElements = (function () {
        let object = {};
        for (const iterator of nums) {
            object[iterator] = true;
        }
        return Object.keys(object).length;
    })();
    for (let sizeIndex = totalUniqueElements; sizeIndex <= nums.length; sizeIndex++) {
        const uniqueObj = {};
        let uniqueCount = 0;
        for (let index = 0; index < sizeIndex - 1; index++) {
            const element = nums[index];
            if (uniqueObj[element] == undefined) {
                uniqueObj[element] = 1;
                uniqueCount += 1;
            } else {
                uniqueObj[element] += 1;
            }
        }
        for (let index = sizeIndex - 1; index < nums.length; index++) {
            const element = nums[index];
            if (uniqueObj[element] == undefined || uniqueObj[element] == 0) {
                uniqueObj[element] = 1;
                uniqueCount += 1;
            } else {
                uniqueObj[element] += 1;
            }
            if (uniqueCount == totalUniqueElements) {
                count += 1;
            }
            const indexToBeRemoved = 1 + index - sizeIndex;
            if (uniqueObj[nums[indexToBeRemoved]]) {
                if (uniqueObj[nums[indexToBeRemoved]] === 1) {
                    uniqueCount -= 1;
                }
                uniqueObj[nums[indexToBeRemoved]] -= 1;
            }
        }
    }
    return count;
};

console.log(countCompleteSubarrays((nums = [5, 5, 5, 5])) === 10);
console.log(countCompleteSubarrays((nums = [1, 3, 1, 2, 2])) === 4);
console.log(countCompleteSubarrays((nums = [2, 4, 2, 4, 2])) === 10);
