/**
 * A valid number can be split up into these components (in order):

A decimal number or an integer.
(Optional) An 'e' or 'E', followed by an integer.
A decimal number can be split up into these components (in order):

(Optional) A sign character (either '+' or '-').
One of the following formats:
One or more digits, followed by a dot '.'.
One or more digits, followed by a dot '.', followed by one or more digits.
A dot '.', followed by one or more digits.
An integer can be split up into these components (in order):

(Optional) A sign character (either '+' or '-').
One or more digits.
 */
var isNumber = function(s) {
    let startIndex = 0;
    if (s.length === 1 && isNaN(s[startIndex])) {
        return false;
    }
    const dot = true;
    const eE = false;
    const sign = true;
    if (s[0] === '+' || s[0] === '-') {
        startIndex += 1;
    }
    if (isNaN(s[startIndex])) {
        return false;
    }
    for (; startIndex < array.length; startIndex++) {
        if (isNaN(s[startIndex])) {
            return false;
        }
    }
    return true;
};
//["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"]
console.log(isNumber((s = 'abc')) === false);
console.log(isNumber((s = '1a')) === false);
console.log(isNumber((s = '1e')) === false);
console.log(isNumber((s = 'e3')) === false);
console.log(isNumber((s = '99e2.5')) === false);
console.log(isNumber((s = '--6')) === false);
console.log(isNumber((s = '-+3')) === false);
console.log(isNumber((s = '95a54e53')) === false);
console.log(isNumber((s = '0')) === true);
console.log(isNumber((s = 'e')) === false);
console.log(isNumber((s = '.')) === false);
