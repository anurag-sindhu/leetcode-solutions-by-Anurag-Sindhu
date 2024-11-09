var beautySum = function (s) {
    const fre = {};
    for (let index = 0; index < s.length; index++) {
        if (!fre[s[index]]) {
            fre[s[index]] = 0;
        }
        fre[s[index]] += 1;
    }
    let maxFreq = -Infinity;
    let minFreq = Infinity;
    for (const key in fre) {
        if (fre[key] > maxFreq) {
            maxFreq = fre[key];
        }
    }
    for (const key in fre) {
        if (fre[key] < minFreq) {
            minFreq = fre[key];
        }
    }
    return maxFreq - minFreq;
};

console.log(beautySum((s = 'abaacc')));
console.log(beautySum((s = 'aabcb')));
console.log(beautySum((s = 'aabcbaa')));
