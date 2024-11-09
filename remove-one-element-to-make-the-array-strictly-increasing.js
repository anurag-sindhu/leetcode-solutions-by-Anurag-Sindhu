var canBeIncreasing = function (nums) {
    let hasDecreasingFound = false;
    for (let index = 1; index < nums.length; index++) {
        if (!(nums[index] > nums[index - 1])) {
            if (hasDecreasingFound) {
                return false;
            } else {
                hasDecreasingFound = true;
            }
        }
    }
    return true;
};

console.log(canBeIncreasing((nums = [1, 2, 10, 5, 7])));
console.log(canBeIncreasing((nums = [2, 3, 1, 2])));
console.log(canBeIncreasing((nums = [1, 1, 1])));
