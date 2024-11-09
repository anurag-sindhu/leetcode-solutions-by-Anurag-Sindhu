var numberOfGoodSubarraySplits = function (nums) {
    let output = 1;
    let distCount = -1;
    let distCountArr = [];
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] === 1) {
            if (distCount && distCount !== -1) {
                distCountArr.push((distCount + 1) % (Math.pow(10, 9) + 7));
            }
            distCount = 0;
        } else {
            if (distCount !== -1) {
                distCount++;
            }
        }
    }
    for (const iterator of distCountArr) {
        output = (output * iterator) % (Math.pow(10, 9) + 7);
    }
    if (distCount === -1) {
        return 0;
    }
    return output;
};

console.log(numberOfGoodSubarraySplits((nums = [0, 0])));
console.log(numberOfGoodSubarraySplits((nums = [1, 0, 0, 1, 0, 0, 1, 0, 0, 1])));
console.log(numberOfGoodSubarraySplits((nums = [0, 1, 0, 0, 1])));
console.log(numberOfGoodSubarraySplits((nums = [0, 1, 0])));
