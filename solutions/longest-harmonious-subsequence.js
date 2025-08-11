var findLHS = function (nums) {
    nums.sort((a, b) => a - b);
    let len = 0;
    let firstNum = null;
    let firstNumLen = 0;
    let secondNum = null;
    let secondNumLen = 0;
    for (let index = 0; index < nums.length; index++) {
        if (firstNum === null) {
            firstNum = nums[index];
            firstNumLen = 1;
        } else if (firstNum == nums[index]) {
            firstNumLen += 1;
        } else if (secondNum == null) {
            if (nums[index] - firstNum <= 1) {
                secondNum = nums[index];
                secondNumLen = 1;
            } else {
                firstNum = nums[index];
                firstNumLen = 1;
                secondNum = null;
                secondNumLen = 0;
            }
        } else if (secondNum == nums[index]) {
            secondNumLen += 1;
        } else if (nums[index] - firstNum <= 1) {
            secondNumLen += 1;
        } else {
            firstNum = secondNum;
            firstNumLen = secondNumLen;
            secondNum = null;
            secondNumLen = 0;
            index -= 1;
        }
        if (firstNumLen >= 1 && secondNumLen >= 1) {
            len = Math.max(len, firstNumLen + secondNumLen);
        }
    }
    if (len > 1) {
        return len;
    }
    return 0;
};

console.log(findLHS((nums = [1, 2, 2, 2, 3, 3, 5, 7])) === 5);
console.log(findLHS((nums = [1, 2, 3, 4])) === 2);
console.log(findLHS((nums = [1, 1, 1, 1])) === 0);
console.log(findLHS((nums = [1, 3, 5, 7, 9, 11, 13, 15, 17])) === 0);
console.log(findLHS((nums = [-1, 1, 1, 2, 2, 2, 2, 5, 5])) === 6);
console.log(
    findLHS((nums = [-3, -2, -2, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3])) ===
        14,
);
console.log(
    findLHS((nums = [3, 3, 3, 1, -2, 2, 1, 2, 3, 2, -2, 1, 1, 3, 2, 3, -3, 0, 3, 2, 0, 3, 2])) ===
        14,
);
