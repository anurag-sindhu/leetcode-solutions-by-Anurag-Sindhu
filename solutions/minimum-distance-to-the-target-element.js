var getMinDistance = function (nums, target, start) {
    let output = Infinity;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] === target) {
            output = Math.min(output, Math.abs(index - start));
        }
    }
    return output;
};

console.log(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 9));
console.log(getMinDistance((nums = [1, 2, 3, 4, 5]), (target = 5), (start = 3)));
console.log(getMinDistance((nums = [1]), (target = 1), (start = 0)));
console.log(getMinDistance((nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), (target = 1), (start = 0)));
