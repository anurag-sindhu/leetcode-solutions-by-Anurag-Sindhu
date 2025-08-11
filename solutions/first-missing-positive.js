var firstMissingPositive = function (nums) {
    for (let parentIndex = 0; parentIndex < nums.length; parentIndex++) {
        let index = parentIndex;
        while (true) {
            const element = nums[index];
            if (element == null) {
                break;
            }
            if (element - 1 == index) {
                break;
            }
            const store = nums[element - 1];
            if (store === undefined) {
                nums[index] = null;
                continue;
            }
            nums[element - 1] = element;
            if (element == store) {
                nums[index] = null;
                continue;
            }
            if (store <= 0) {
                nums[index] = null;
                continue;
            }
            nums[index] = store;
        }
    }
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (element == null || element == undefined) {
            return index + 1;
        }
    }
    return nums.length + 1;
};
console.log(firstMissingPositive([1, 1]));
console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([77, 8, 9, 11, 12]));
console.log(firstMissingPositive([1, 2, 3]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
console.log(firstMissingPositive([1, 2, 0]));
