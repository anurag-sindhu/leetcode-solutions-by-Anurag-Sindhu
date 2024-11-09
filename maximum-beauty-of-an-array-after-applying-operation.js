var maximumBeauty = function (nums, k) {
    nums.sort((a, b) => a - b)
    let output = 1;
    let pointerOne = 0;
    let pointerTwo = 0;
    while (pointerTwo < nums.length) {
        if (nums[pointerTwo] - nums[pointerOne] <= 2 * k) {
            output = Math.max(output, pointerTwo - pointerOne + 1);
            pointerTwo++
        } else {
            pointerOne++
        }
    }
    return output
};

console.log(maximumBeauty(nums = [4, 6, 1, 2], k = 2));
console.log(maximumBeauty(nums = [1, 1, 1, 1], k = 10));