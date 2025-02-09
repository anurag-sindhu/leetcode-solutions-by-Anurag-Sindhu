var findNumberOfLIS = function (nums) {
    let store = 1;
    let tempStore = 1;
    let min = Infinity;
    for (let index = 0; index < nums.length; index++) {
        if (min > nums[index]) {
            min = nums[index];
            store = 1;
            tempStore = 1;
        } else if (min === nums[index]) {
            tempStore += 1;
        } else {
            if (nums[index - 1] >= nums[index]) {
                tempStore += 1;
            } else {
                store *= tempStore;
                tempStore = 1;
            }
        }                                       
    }
    return store * tempStore;
};

console.log(findNumberOfLIS((nums = [4, 1, 5, 2, 4, 5, 3, 4, 5, 6])) === 1);
console.log(findNumberOfLIS((nums = [2, 2, 2, 2, 2])) === 5);
console.log(findNumberOfLIS((nums = [10, 9, 2, 5, 3, 7, 101, 18])) === 4);
console.log(findNumberOfLIS((nums = [1, 3, 5, 4, 7])) === 2);
