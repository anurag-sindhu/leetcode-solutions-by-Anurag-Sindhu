var minOperations = function (nums) {
    let sum = 0;
    for (let index = 1; index < nums.length; index++) {
        if (nums[index] <= nums[index - 1]) {
            const diff = nums[index - 1] - nums[index];
            sum += diff + 1;
            nums[index] = nums[index - 1] + 1;
        }
    }
    return sum;
};

console.log(minOperations((nums = [1, 1, 1])));
console.log(minOperations((nums = [1, 5, 2, 4, 1])));
console.log(minOperations((nums = [8])));
