var minimumDifference = function (nums, k) {
    if (k <= 1) {
        return 0;
    }
    nums.sort((a, b) => a - b);
    let diff = Infinity;
    for (let index = 0; index < nums.length - 1; index++) {
        const tempDiff = nums[index + k - 1] - nums[index];
        if (tempDiff < diff) {
            diff = tempDiff;
        }
    }
    return diff;
};

console.log(minimumDifference((nums = [9, 4, 1, 7]), (k = 2)) === 2);
console.log(minimumDifference([87063, 61094, 44530, 21297, 95857, 93551, 9918], 6));
console.log(minimumDifference((nums = [90]), (k = 1)) === 0);
