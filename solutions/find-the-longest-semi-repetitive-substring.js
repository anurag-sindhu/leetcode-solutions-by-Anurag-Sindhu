var longestSemiRepetitiveSubstring = function (s) {
    let maxLen = 0;
    let len = 0
    let hasConsecutiveArrived = 0
    let lastConsecutiveEndIndex = 0
    for (let index = 0; index < s.length; index++) {
        if (s[index] === s[index - 1]) {
            if (hasConsecutiveArrived++) { // Used just as a boolean
                len = index - lastConsecutiveEndIndex
            }
            lastConsecutiveEndIndex = index
        }
        maxLen = Math.max(maxLen, ++len)
    }
    return maxLen
};


console.log(longestSemiRepetitiveSubstring(s = "24489929009") === 7);
console.log(longestSemiRepetitiveSubstring(s = "0001") === 3);
console.log(longestSemiRepetitiveSubstring(s = "52233") === 4);
console.log(longestSemiRepetitiveSubstring(s = "5494") === 4);
console.log(longestSemiRepetitiveSubstring(s = "1111111") === 2);