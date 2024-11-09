function numberOfMismatch(str1, str2, str1Index, str2Index, count) {
    let cnt = 0;
    for (let index = 0; index < count; index++) {
        if (str1[str1Index + index] !== str2[str2Index + index]) {
            if (cnt === 1) {
                return Infinity;
            }
            cnt++;
        }
    }
    return cnt;
}

function compareString(str1, str2, count) {
    let cnt = 0;
    for (let str1Index = 0; str1Index <= str1.length - count; str1Index++) {
        for (let str2Index = 0; str2Index <= str2.length - count; str2Index++) {
            if (numberOfMismatch(str1, str2, str1Index, str2Index, count) === 1) {
                cnt++;
            }
        }
    }
    return cnt;
}

var countSubstrings = function (str1, str2) {
    let count = 0;
    for (let index = 0; index < str1.length; index++) {
        count += compareString(str1, str2, index + 1);
    }
    return count;
};

console.log(countSubstrings((s = 'aba'), (t = 'baba')) === 6);
console.log(countSubstrings((s = 'ab'), (t = 'bb')) === 3);
