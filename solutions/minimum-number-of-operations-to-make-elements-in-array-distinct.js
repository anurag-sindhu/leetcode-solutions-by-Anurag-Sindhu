var minimumOperations = function (nums) {
    const freq = {};
    let index = nums.length - 1;
    for (; index >= 0; index--) {
        const element = nums[index];
        if (freq[element]) {
            break;
        }
        freq[element] = true;
    }
    const totalElementsNeedToRemove = index + 1;
    return Math.ceil(totalElementsNeedToRemove / 3);
};

console.log(minimumOperations((nums = [1, 2, 3, 4, 2, 3, 3, 5, 7])));
console.log(minimumOperations((nums = [4, 5, 6, 4, 4])));
console.log(minimumOperations((nums = [6, 7, 8, 9])));
