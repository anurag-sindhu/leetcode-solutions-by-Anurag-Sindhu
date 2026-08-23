var rangeBitwiseAnd = function (left, right) {
    if (!left || !right) {
        return 0;
    }
    // if (left === right) {
    //     return left;
    // }
    // if (right - left === 1) {
    //     return left & right;
    // }
    const binaryString = left.toString(2);
    const binaryStringArr = binaryString.split('');
    for (let index = binaryString.length - 1; index >= 0; index--) {
        const element = binaryString[index];
        if (element != '0') {
            const power = binaryString.length - index - 1;
            const store = Math.pow(2, power);
            if (parseInt(binaryStringArr.join(''), 2) + store <= right) {
                binaryStringArr[index] = '0';
            }
        }
    }
    const decimalNumber = parseInt(binaryStringArr.join(''), 2);
    return decimalNumber;
};

console.log(rangeBitwiseAnd(5, 8) == 0);
console.log(rangeBitwiseAnd(11, 12));
console.log(rangeBitwiseAnd(5, 7));
console.log(rangeBitwiseAnd(8, 12));
console.log(rangeBitwiseAnd(1, 2147483647));
console.log(rangeBitwiseAnd(2, 12));
console.log(rangeBitwiseAnd(10, 11));
