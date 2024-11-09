var minMoves = function (nums, limit) {
    let countGreaterThanMinSum = 0;
    let minSum = Infinity;
    let maxSum = -Infinity;
    for (let index = 0; index < nums.length / 2; index++) {
        const sum = nums[index] + nums[nums.length - 1 - index];
        minSum = Math.min(minSum, sum);
        maxSum = Math.max(maxSum, sum);
    }
    for (let index = 0; index < nums.length / 2; index++) {
        const sum = nums[index] + nums[nums.length - 1 - index];
        const num1 = nums[index];
        const num2 = nums[nums.length - 1 - index];
        if (sum > minSum) {
            if (num2 > num1) {
                const diff = minSum - num1;
                if (diff >= 1 && diff <= limit) {
                    countGreaterThanMinSum++;
                } else {
                    countGreaterThanMinSum += 2;
                }
            } else {
                const diff = minSum - num2;
                if (diff >= 1 && diff <= limit) {
                    countGreaterThanMinSum++;
                } else {
                    countGreaterThanMinSum += 2;
                }
            }
        }
    }
    return countGreaterThanMinSum;
};

console.log(minMoves([28, 50, 76, 80, 64, 30, 32, 84, 53, 8], 84) === 4);
console.log(minMoves((nums = [1, 2, 4, 3]), (limit = 4)) === 1);
console.log(minMoves((nums = [1, 2, 2, 1]), (limit = 2)) === 2);
console.log(minMoves((nums = [1, 2, 1, 2]), (limit = 2)) === 0);
