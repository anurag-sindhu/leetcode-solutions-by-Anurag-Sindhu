var largestOddNumber = function (num) {
    for (let index = num.length - 1; index >= 0; index--) {
        if (Number(num[index]) % 2 !== 0) {
            return num.substring(0, index + 1);
        }
    }
    return '';
};

console.log(largestOddNumber((num = '52')));
console.log(largestOddNumber((num = '4206')));
console.log(largestOddNumber((num = '35427')));
