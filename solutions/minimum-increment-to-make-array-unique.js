var minIncrementForUnique = function (nums) {
    let cnt = 0;
    nums.sort((a, b) => a - b);
    let tempLastElement = nums[0];
    for (let index = 1; index < nums.length; index++) {
        const element = nums[index];
        if (element <= tempLastElement) {
            cnt += tempLastElement - element + 1;
            tempLastElement += 1;
        } else {
            tempLastElement = element;
        }
    }
    return cnt;
};

console.log(minIncrementForUnique((nums = [2, 2, 2, 2, 0])) == 6);
console.log(minIncrementForUnique((nums = [1, 2, 2])));
console.log(minIncrementForUnique((nums = [3, 2, 1, 2, 1, 7])));
