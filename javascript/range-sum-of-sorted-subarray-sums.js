var rangeSum = function (nums, n, left, right) {
    const sumArr = [];
    for (let firstPointer = 0; firstPointer < nums.length; firstPointer++) {
        let sum = 0;
        for (
            let secondPointer = firstPointer;
            secondPointer < nums.length;
            secondPointer++
        ) {
            sum += nums[secondPointer];
            sumArr.push(sum);
        }
    }
    left -= 1;
    if (left < 0) {
        left = 0;
    }
    right -= 1;
    if (right > sumArr.length - 1) {
        right = sumArr.length - 1;
    }
    sumArr.sort((a, b) => a - b);
    let finalSum = 0;
    for (let index = left; index <= right; index++) {
        finalSum += sumArr[index];
        finalSum = finalSum % (Math.pow(10, 9) + 7);
    }
    return finalSum;
};

console.log(rangeSum((nums = [1, 2, 3, 4]), (n = 4), (left = 1), (right = 5)));
console.log(rangeSum((nums = [1, 2, 3, 4]), (n = 4), (left = 3), (right = 4)));
console.log(rangeSum((nums = [1, 2, 3, 4]), (n = 4), (left = 1), (right = 10)));
