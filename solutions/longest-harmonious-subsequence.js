var findLHS = function (nums) {
    nums.sort((a, b) => a - b);
    let len = 0;
    let firstNum = nums[0];
    let firstNumLen = 1;
    let secondNumLen = 0;
    let secondNumStartIndex = null;
    for (let index = 1; index < nums.length; index++) {
        const element = nums[index];
        if (element - firstNum === 0) {
            firstNumLen += 1;
        } else if (element - firstNum === 1) {
            if (secondNumStartIndex === null) {
                secondNumStartIndex = index;
            }
            secondNumLen += 1;
        } else {
            if (firstNumLen && secondNumLen) {
                len = Math.max(len, firstNumLen + secondNumLen);
            }
            firstNum = nums[secondNumStartIndex];
            firstNumLen = 1;
            secondNumLen = 0;
            index = secondNumStartIndex - 1;
            secondNumStartIndex = null;
        }
    }
    if (len === 0 && secondNumLen === 0) {
        return 0;
    }
    len = Math.max(len, firstNumLen + secondNumLen);
    return len;
};

console.log(
    findLHS((nums = [-3, -2, -2, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3])) ===
        14,
);
console.log(
    findLHS((nums = [3, 3, 3, 1, -2, 2, 1, 2, 3, 2, -2, 1, 1, 3, 2, 3, -3, 0, 3, 2, 0, 3, 2])) ===
        14,
);
console.log(findLHS((nums = [1, 2, -1, 1, 2, 5, 2, 5, 2])) === 6);
console.log(findLHS((nums = [1, 3, 5, 7, 9, 11, 13, 15, 17])) === 0);
console.log(findLHS((nums = [1, 1, 1, 1])) === 0);
console.log(findLHS((nums = [1, 3, 2, 2, 5, 2, 3, 7])) === 5);
console.log(findLHS((nums = [1, 2, 3, 4])) === 2);
