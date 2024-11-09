var isMonotonic = function (nums) {
    let hasFound = false;
    for (let index = 1; index < nums.length; index++) {
        if (!(nums[index - 1] <= nums[index])) {
            hasFound = true;
            break;
        }
    }
    if (hasFound) {
        for (let index = nums.length - 1; index > 0; index--) {
            if (!(nums[index - 1] >= nums[index])) {
                return false;
            }
        }
    }

    return true;
};

console.log(isMonotonic((nums = [6, 5, 4, 4])));
console.log(isMonotonic((nums = [1, 2, 2, 3])));
console.log(isMonotonic((nums = [1, 3, 2])));
