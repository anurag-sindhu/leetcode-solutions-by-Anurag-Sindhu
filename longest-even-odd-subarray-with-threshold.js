var longestAlternatingSubarray = function (nums, threshold) {
    let tempLen = 0;
    let maxLength = 0;
    let startIndex = null;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] <= threshold) {
            if (startIndex === null && nums[index] % 2 === 0) {
                maxLength = Math.max(maxLength, tempLen);
                startIndex = null;
                startIndex = index;
                tempLen = 1;
            } else if (
                nums[index - 1] !== undefined &&
                nums[index - 1] % 2 === 0 &&
                nums[index] % 2 === 0
            ) {
                maxLength = Math.max(maxLength, tempLen);
                startIndex = null;
                startIndex = index;
                tempLen = 1;
            } else if (startIndex !== null && nums[index] % 2 != nums[index - 1] % 2) {
                tempLen++;
            } else {
                maxLength = Math.max(maxLength, tempLen);
                startIndex = null;
            }
        } else {
            maxLength = Math.max(maxLength, tempLen);
            startIndex = null;
        }
    }
    maxLength = Math.max(maxLength, tempLen);
    return maxLength;
};

console.log(longestAlternatingSubarray((nums = [2, 3, 3, 10]), (threshold = 18)) === 2);
console.log(longestAlternatingSubarray((nums = [4, 10, 3]), (threshold = 10)) === 2);
console.log(longestAlternatingSubarray((nums = [3, 2, 5, 4]), (threshold = 5)) === 3);
console.log(longestAlternatingSubarray((nums = [4, 3, 1]), (threshold = 4)) === 2);
console.log(longestAlternatingSubarray((nums = [2, 2]), (threshold = 18)) === 1);
console.log(longestAlternatingSubarray((nums = [2, 8]), (threshold = 4)) === 1);
console.log(longestAlternatingSubarray((nums = [4]), (threshold = 1)) === 0);
console.log(longestAlternatingSubarray((nums = [1, 2]), (threshold = 2)) === 1);
console.log(longestAlternatingSubarray((nums = [2, 3, 4, 5]), (threshold = 4)) === 3);
