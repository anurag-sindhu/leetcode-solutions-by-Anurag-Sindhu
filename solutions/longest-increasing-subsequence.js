var lengthOfLIS1 = function (nums) {
    const numsLength = nums.length;
    const obj = {};
    let index1 = 0,
        index2 = 1;
    let tempSum = 0;
    let sum = 1;
    for (let index = 0; index < numsLength; index++) {
        obj[index] = 1;
    }
    while (index2 < numsLength) {
        index1 = 0;
        while (index1 < index2) {
            if (nums[index1] < nums[index2]) {
                tempSum = 1 + obj[index1];
                if (tempSum > obj[index2]) {
                    obj[index2] = tempSum;
                    if (sum < tempSum) {
                        sum = tempSum;
                    }
                }
            }
            index1++;
        }
        index2++;
    }
    return sum;
};

/**
Use array and we keep elements in ascending order, if not in-place replace and maintain order, array is sorted binary search
*/
var lengthOfLIS = function (nums) {
    function lengthOfLISHelper(nums, index) {
        if (index >= nums.length) {
            return 0;
        }
        let max = 0;
        for (let nextIndex = index + 1; nextIndex < nums.length; nextIndex++) {
            if (nums[index] < nums[nextIndex]) {
                max = 1 + Math.max(lengthOfLISHelper(nums, nextIndex), max);
            }
        }
        console.log({ max, index, 'nums[index]': nums[index] });
        return max;
    }
    const resp = lengthOfLISHelper(nums, 0);
    return resp;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]) === 4);
console.log(lengthOfLIS([1, 2, 0, 4]));
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
