var longestNiceSubstring = function (s) {
    let str = '';
    const char = {};
    const charReconcile = {};
    for (let index = 0; index < s.length; index++) {
        char[s[index]] = 1;
    }
    for (const key in char) {
        if (char[key.toUpperCase()]) {
            charReconcile[key] = true;
        }
    }
    let tempString = '';
    for (let index = 0; index < s.length; index++) {
        if (charReconcile[s[index]]) {
            tempString += s[index];
            continue;
        }
        if (str.length < tempString.length) {
            str = tempString;
        }
        tempString = '';
    }
    if (str.length < tempString.length) {
        str = tempString;
    }
    return str;
};

console.log(longestNiceSubstring((s = 'YazaAay')));
console.log(longestNiceSubstring((s = 'Bb')));
console.log(longestNiceSubstring((s = 'c')));
