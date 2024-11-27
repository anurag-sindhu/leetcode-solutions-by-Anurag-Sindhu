var waysToSplitArray = function (nums) {
    const leftToRight = [];
    const rightToLeft = [];
    for (let index = 0; index < nums.length; index++) {
        leftToRight.push((leftToRight[index - 1] || 0) + nums[index]);
    }
    for (let index = nums.length - 1; index >= 0; index--) {
        rightToLeft.push((rightToLeft[nums.length - 1 - 1 - index] || 0) + nums[index]);
    }
    rightToLeft.reverse();
    let count = 0;
    for (let index = 0; index < leftToRight.length - 1; index++) {
        if (leftToRight[index] >= rightToLeft[index + 1]) {
            count += 1;
        }
    }
    return count;
};

console.log(waysToSplitArray((nums = [10, 4, -8, 7])));
console.log(waysToSplitArray((nums = [2, 3, 1, 0])));
