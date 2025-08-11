var cyclicSort = function (nums) {
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
            nums[element - 1] = element;
            if (store <= 0) {
                nums[index] = null;
            } else {
                nums[index] = store;
            }
            console.log({ element });
        }
    }
    return;
};
