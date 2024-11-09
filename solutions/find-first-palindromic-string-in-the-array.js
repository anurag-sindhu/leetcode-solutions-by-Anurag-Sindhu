function isPalindrome(str) {
    const length = str.length;
    let index = 0;
    while (index < length / 2) {
        if (str[index] !== str[length - index - 1]) {
            return false;
        }
        index++;
    }
    return true;
}

var firstPalindrome = function (words) {
    for (const iterator of words) {
        if (isPalindrome(iterator)) {
            return true;
        }
    }
    return ``;
};

console.log(isPalindrome('abc'));
console.log(isPalindrome('madam'));
console.log(isPalindrome('aba'));
console.log(isPalindrome('abba'));
console.log(
    firstPalindrome((words = ['abc', 'car', 'ada', 'racecar', 'cool']))
);

console.log(firstPalindrome((words = ['notapalindrome', 'racecar'])));
console.log(firstPalindrome((words = ['def', 'ghi'])));
