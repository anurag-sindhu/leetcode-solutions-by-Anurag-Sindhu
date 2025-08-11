var findMaximumScore = function (nums) {
    let sum = 0;
    let lastIndex = 0;
    for (let index = 1; index < nums.length; index++) {
        if (nums[index] > nums[lastIndex]) {
            sum += nums[lastIndex] * (index - lastIndex);
            lastIndex = index;
        } else if (index == nums.length - 1) {
            sum += nums[lastIndex] * (index - lastIndex);
        }
    }
    return sum;
};

console.log(findMaximumScore((nums = [1, 3, 1, 5])));
console.log(findMaximumScore((nums = [4, 3, 1, 3, 2])));
