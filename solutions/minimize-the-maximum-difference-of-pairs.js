var minimizeMax = function(nums, p) {
    nums.sort((a, b) => a - b);
    let existingDifference = -Infinity;
    let index = 1;
    while (p--) {
        const temp = Math.abs(nums[index] - nums[index - 1]);
        existingDifference = Math.max(existingDifference, temp);
        index++;
    }
    return existingDifference;
};

console.log(minimizeMax((nums = [10, 1, 2, 7, 1, 3]), (p = 2)));
console.log(minimizeMax((nums = [4, 2, 1, 2]), (p = 1)));
