var minimumSum = function (nums) {
    const minLeftToRight = [Infinity];
    const minRightToLeft = [Infinity];
    for (let index = 0; index < nums.length; index++) {
        const minNum = minLeftToRight[minLeftToRight.length - 1];
        if (minNum < nums[index]) {
            minLeftToRight.push(minNum);
        } else {
            minLeftToRight.push(nums[index]);
        }
    }
    for (let index = nums.length - 1; index >= 0; index--) {
        const minNum = minRightToLeft[minRightToLeft.length - 1];
        if (minNum < nums[index]) {
            minRightToLeft.push(minNum);
        } else {
            minRightToLeft.push(nums[index]);
        }
    }
    minRightToLeft.reverse();
    let minSum = Infinity;
    for (let index = 1; index < nums.length - 1; index++) {
        if (nums[index] > minLeftToRight[index] && nums[index] > minRightToLeft[index]) {
            minSum = Math.min(minSum, nums[index] + minLeftToRight[index] + minRightToLeft[index]);
        }
    }
    return minSum === Infinity ? -1 : minSum;
};

console.log(minimumSum((nums = [8, 6, 1, 5, 3])));
console.log(minimumSum((nums = [5, 4, 8, 7, 10, 2])));
console.log(minimumSum((nums = [6, 5, 4, 3, 4, 5])));
