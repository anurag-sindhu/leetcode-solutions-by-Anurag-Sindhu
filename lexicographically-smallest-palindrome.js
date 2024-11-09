var makeSmallestPalindrome = function(s) {
    s = s.split('');
    for (let index = 0; index < parseInt(s.length / 2); index++) {
        if (s[index] !== s[s.length - 1 - index]) {
            if (s[index] > s[s.length - 1 - index]) {
                s[index] = s[s.length - 1 - index];
            } else {
                s[s.length - 1 - index] = s[index];
            }
        }
    }
    return s.join('');
};

console.log(makeSmallestPalindrome((s = 'egcfe')));
console.log(makeSmallestPalindrome((s = 'abcd')));
console.log(makeSmallestPalindrome((s = 'seven')));
