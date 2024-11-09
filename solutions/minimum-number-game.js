var numberGame = function (nums) {
    nums.sort((a, b) => a - b);
    const out = [];
    for (let index = 0; index < nums.length; index += 2) {
        out.push(nums[index + 1]);
        out.push(nums[index]);
    }
    return out;
};

console.log(numberGame((nums = [5, 4, 2, 3])));
console.log(numberGame((nums = [2, 5])));
