function addStrings(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = [];

    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? parseInt(num1[i], 10) : 0;
        const digit2 = j >= 0 ? parseInt(num2[j], 10) : 0;
        const sum = digit1 + digit2 + carry;
        result.push(sum % 10);
        carry = Math.floor(sum / 10);
        i--;
        j--;
    }

    return result.reverse().join('');
}

var isAdditiveNumber = function (num) {
    function isAdditiveNumberHelper(firstNum, secondNum, secondIndex) {
        if (firstNum.length > 1) {
            if (firstNum[0] === '0') {
                return false;
            }
        }
        if (secondNum.length > 1) {
            if (secondNum[0] === '0') {
                return false;
            }
        }
        const sum = addStrings(firstNum, secondNum);
        const nextString = num.substring(secondIndex + 1, secondIndex + 1 + sum.length);
        if (sum === nextString) {
            if (secondIndex + 1 + sum.length >= num.length) {
                return true;
            } else {
                return isAdditiveNumberHelper(secondNum, nextString, secondIndex + sum.length);
            }
        }
        return false;
    }
    let firstString = ``;
    for (let firstIndex = 0; firstIndex < num.length; firstIndex++) {
        firstString += num[firstIndex];
        let secondString = ``;
        for (let secondIndex = firstIndex + 1; secondIndex < num.length; secondIndex++) {
            secondString += num[secondIndex];
            const resp = isAdditiveNumberHelper(firstString, secondString, secondIndex);
            if (resp) {
                return true;
            }
        }
    }
    return false;
};

console.log(isAdditiveNumber('0') === false);
console.log(isAdditiveNumber('011112') === false);
console.log(isAdditiveNumber('199100199') === true);
console.log(isAdditiveNumber('112358') === true);
/**
An additive number is a string whose digits can form an additive sequence.
A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.
Given a string containing only digits, return true if it is an additive number or false otherwise.
Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.
 */
