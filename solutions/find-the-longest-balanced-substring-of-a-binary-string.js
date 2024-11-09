var findTheLongestBalancedSubstring = function (s) {
    let count = 0
    let tempZeroCount = 0
    let tempOneCount = 0
    for (let index = 0; index < s.length; index++) {
        if (s[index] === "1") {
            tempOneCount++
            if (tempZeroCount) {
                tempZeroCount--
                if (tempOneCount > count) {
                    count = tempOneCount
                }
            }
        } else {
            if (tempOneCount) {
                tempOneCount = 0
                tempZeroCount = 0
            }
            tempZeroCount += 1
        }
    }
    return count * 2
};


console.log(findTheLongestBalancedSubstring(s = "01000111") === 6);
console.log(findTheLongestBalancedSubstring(s = "00111") === 4);
console.log(findTheLongestBalancedSubstring(s = "111") === 0);