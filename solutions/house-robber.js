var rob1 = function (nums) {
    for (let index = nums.length - 3; index >= 0; index--) {
        if (nums[index + 3] !== undefined) {
            nums[index] += Math.max(nums[index + 2], nums[index + 3]);
        } else {
            nums[index] += nums[index + 2];
        }
    }
    return Math.max(nums[0], nums[1] || 0);
};

var rob11 = function (nums) {
    for (let index = nums.length - 3; index >= 0; index--) {
        nums[index] +=
            nums[index + 3] !== undefined
                ? Math.max(nums[index + 2], nums[index + 3])
                : nums[index + 2];
    }
    return Math.max(nums[0], nums[1] || 0);
};

var rob = function (nums) {
    for (let index = nums.length - 3; index >= 0; index--) {
        nums[index] +=
            nums[index + 3] !== undefined
                ? Math.max(nums[index + 2], nums[index + 3])
                : nums[index + 2];
    }
    return Math.max(nums[0], nums[1] || 0);
};

console.log(rob((nums = [2, 7, 9, 3, 1])));
console.log(rob((nums = [2, 1, 1, 2])));
console.log(rob((nums = [1, 2, 3, 1])));
