var minimizeMax = function (nums, p) {
    let tempP = p;
    nums.sort((a, b) => a - b);
    let existingDifference = -Infinity;
    let index = 1;
    while (tempP > 0) {
        const num1 = nums[index];
        const num2 = nums[index - 1];
        const temp = Math.abs(num1 - num2);
        existingDifference = Math.max(existingDifference, temp);
        index++;
        index++;
        tempP--;
    }
    return existingDifference;
};

console.log(minimizeMax((nums = [1, 2, 2, 4]), (p = 1)));
console.log(minimizeMax((nums = [4, 2, 1, 2]), (p = 1)));
console.log(minimizeMax((nums = [10, 1, 2, 7, 1, 3]), (p = 2)));
