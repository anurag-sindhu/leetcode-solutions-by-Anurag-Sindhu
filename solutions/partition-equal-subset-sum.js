var canPartition = function (nums) {
    const totalSum = nums.reduce((a, b) => a + b);
    if (totalSum % 2 != 0) {
        return false;
    }
    nums.sort((a, b) => a - b);
    const arr = [];
    for (let index1 = 1; index1 <= nums.length; index1++) {
        if (!arr[index1]) {
            arr[index1] = [];
        }
        const element = nums[index1 - 1];
        for (let index = 1; index <= nums.length * 100; index++) {
            const maxWeight = index;
            const cond1 = Math.max(
                (arr[index1] && arr[index1][index - 1]) || 0,
                (arr[index1 - 1] && arr[index1 - 1][index]) || 0,
            );
            let cond2 = null;
            if (element <= maxWeight) {
                cond2 = element + ((arr[index1 - 1] && arr[index1 - 1][maxWeight - element]) || 0);
                arr[index1][index] = Math.max(cond1, cond2);
            } else {
                arr[index1][index] = cond1;
            }
            if (cond1 == totalSum / 2) {
                return true;
            }
            if (cond2 == totalSum / 2) {
                return true;
            }
        }
    }
    return false;
};

console.log(canPartition((nums = [1, 2, 5])));
console.log(canPartition((nums = [8, 9, 5, 4, 7, 2, 1])) == true);
console.log(canPartition((nums = [2, 2, 1, 1])) == true);
console.log(canPartition((nums = [1, 2, 3, 5])));
console.log(canPartition((nums = [1, 5, 11, 5])));
