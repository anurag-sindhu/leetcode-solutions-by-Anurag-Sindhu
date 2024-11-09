var minLengthAfterRemovals = function (nums) {
    if (nums.length === 1) {
        return 1;
    }

    let pointer1 = nums[0];
    let pointer2 = nums[1];
    if (nums.length === 2) {
        if (pointer1 === pointer2) {
            return 2;
        }
        return 0;
    }
    for (let index = 1; index < nums.length; index++) {
        const element = array[index];
    }
};

console.log(minLengthAfterRemovals((nums = [1, 2, 3, 4])));
console.log(minLengthAfterRemovals((nums = [1, 1, 2, 2, 3, 3])));
console.log(minLengthAfterRemovals((nums = [1000000000, 1000000000])));
console.log(minLengthAfterRemovals((nums = [2, 3, 4, 4, 4])));
