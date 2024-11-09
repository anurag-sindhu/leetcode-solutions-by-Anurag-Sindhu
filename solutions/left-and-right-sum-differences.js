var leftRightDifference = function(nums) {
    const sum = nums.reduce((val, acc) => val + acc, 0);
    let sumFromLeft = 0;
    let sumFromRight = sum;
    const output = [];
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        sumFromRight -= element;
        output.push(Math.abs(sumFromRight - sumFromLeft));
        sumFromLeft += element;
    }
    return sum;
};

console.log(leftRightDifference((nums = [10, 4, 8, 3])));
console.log(leftRightDifference((nums = [1])));
