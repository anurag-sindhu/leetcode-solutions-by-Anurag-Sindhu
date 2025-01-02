var minOperations = function (nums, x) {
    const sum = nums.reduce((acc, curr) => acc + curr);
    if (sum < x) {
        return -1;
    }
    let minElements = Infinity;
    let tempSum = 0;
    let startPointer = 0;
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        tempSum += element;
        if (tempSum == sum - x) {
            minElements = Math.min(nums.length - index - 1 + startPointer, minElements);
        }
        while (tempSum > sum - x) {
            tempSum -= nums[startPointer++];
            if (tempSum == sum - x) {
                minElements = Math.min(nums.length - index - 1 + startPointer, minElements);
            }
        }
    }
    return minElements === Infinity ? -1 : minElements;
};

console.log(minOperations([1, 1], 3) == -1);
console.log(minOperations((nums = [1, 1, 4, 2, 3]), (x = 5)) == 2);
console.log(minOperations((nums = [3, 2, 20, 1, 1, 3]), (x = 10)) == 5);
console.log(minOperations((nums = [5, 6, 7, 8, 9]), (x = 4)) == -1);
