var maxArrayValue = function (nums) {
    let tempSum = nums[nums.length - 1];
    for (let index = nums.length - 1 - 1; index >= 0; index--) {
        if (nums[index] <= nums[index + 1]) {
            nums[index] = tempSum + nums[index];
            tempSum = nums[index];
        } else {
            tempSum = nums[index];
        }
    }
    return nums[0];
};

console.log(maxArrayValue([2, 4, 7, 9, 2, 3, 7, 9, 3]) === 43);
console.log(maxArrayValue([2, 3, 7, 9, 3]) === 21);
console.log(maxArrayValue([5, 3, 3]) === 11);
