var findDifferentBinaryString = function (nums) {
    let str = '';

    for (let index = 0; index < nums.length; index++) {
        str += nums[index][index] === '1' ? '0' : '1';
    }
    return str;
};

console.log(findDifferentBinaryString((nums = ['01', '10'])));
console.log(findDifferentBinaryString((nums = ['00', '01'])));
console.log(findDifferentBinaryString((nums = ['111', '011', '001'])));
