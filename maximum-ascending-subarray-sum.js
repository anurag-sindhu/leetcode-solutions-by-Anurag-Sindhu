var maxAscendingSum = function (nums) {
    let sum = nums[0];
    let tempSum = nums[0];
    for (let index = 1; index < nums.length; index++) {
        if (nums[index] > nums[index - 1]) {
            tempSum += nums[index];
        } else {
            if (sum < tempSum) {
                sum = tempSum;
            }
            tempSum = nums[index];
        }
    }
    if (sum < tempSum) {
        sum = tempSum;
    }
    return sum;
};

console.log(maxAscendingSum((nums = [10, 20, 30, 5, 10, 50])));
console.log(maxAscendingSum((nums = [10, 20, 30, 40, 50])));
console.log(maxAscendingSum((nums = [12, 17, 15, 13, 10, 11, 12])));
