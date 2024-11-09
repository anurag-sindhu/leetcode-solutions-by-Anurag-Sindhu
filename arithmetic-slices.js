function findSumByCount(count) {
    if (count < 3) {
        return 0;
    }
    return (count - 2) * (count - 2 + 1) / 2;
}

var numberOfArithmeticSlices = function(nums) {
    let movingIndex = 1;
    let sum = 0;
    let count = 0;
    let previousDiff = null;
    let currentDiff = null;
    while (movingIndex < nums.length) {
        currentDiff = nums[movingIndex] - nums[movingIndex - 1];
        if (previousDiff === null) {
            previousDiff = currentDiff;
            count = 1;
        } else if (previousDiff !== currentDiff) {
            sum += findSumByIndex(count);
            currentDiff = null;
            previousDiff = null;
            count = 0;
            continue;
        }
        movingIndex++;
        count++;
    }
    sum += findSumByIndex(count);
    return sum;
};

console.log(numberOfArithmeticSlices((nums = [ 1, 2, 3, 11, 13, 15 ])));
console.log(numberOfArithmeticSlices((nums = [ 1, 2, 3, 5, 7, 9 ])));
console.log(numberOfArithmeticSlices((nums = [ 1 ])));
console.log(numberOfArithmeticSlices((nums = [ 1, 2, 3, 4 ])));
console.log(numberOfArithmeticSlices((nums = [ 1, 2, 3, 4, 5, 6, 7, 8 ])));
