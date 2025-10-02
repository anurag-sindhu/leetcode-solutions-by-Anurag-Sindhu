var breakPalindrome = function (palindrome) {
    if (palindrome.length === 1) {
        return ``;
    }
    let hasBroken = false;
    const splittedPalindrome = palindrome.split('');
    for (let index = 0; index < splittedPalindrome.length; index++) {
        const element = splittedPalindrome[index];
        const midIndex = parseInt(splittedPalindrome.length / 2);
        if (splittedPalindrome.length % 2 != 0 && index == midIndex) {
            continue;
        }
        if (element != 'a') {
            hasBroken = true;
            splittedPalindrome[index] = 'a';
            break;
        }
    }
    if (!hasBroken) {
        splittedPalindrome[splittedPalindrome.length - 1] = String.fromCharCode(
            splittedPalindrome[splittedPalindrome.length - 1].charCodeAt(0) + 1,
        );
    }
    const output = splittedPalindrome.join('');
    return output;
};

console.log(breakPalindrome('bbb') == 'abb');
console.log(breakPalindrome('ada') == 'adb');
console.log(breakPalindrome('aba') == 'abb');
console.log(breakPalindrome('trccrt') === 'arccrt');
console.log(breakPalindrome('aa') == 'ab');
console.log(breakPalindrome('a') == '');
