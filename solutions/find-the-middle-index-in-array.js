var findMiddleIndex = function (nums) {
    const leftToRightSum = (function () {
        const arr = [0];
        for (let index = 1; index < nums.length; index++) {
            arr.push(nums[index - 1] + arr[arr.length - 1]);
        }
        return arr;
    })();
    const rightToLeftSum = (function () {
        const arr = [0];
        for (let index = nums.length - 1 - 1; index >= 0; index--) {
            arr.push(nums[index + 1] + arr[arr.length - 1]);
        }
        return arr.reverse();
    })();
    for (let index = 0; index < rightToLeftSum.length; index++) {
        if (rightToLeftSum[index] === leftToRightSum[index]) {
            return index;
        }
    }
    return -1;
};

console.log(findMiddleIndex((nums = [2, 3, -1, 8, 4])));
console.log(findMiddleIndex((nums = [1, -1, 4])));
console.log(findMiddleIndex((nums = [2, 5])));
