var maxLengthBetweenEqualCharacters = function (s) {
    let highestLength = -1;
    const obj = {};
    for (let index = 0; index < s.length; index++) {
        if (!obj[s[index]]) {
            obj[s[index]] = [];
        }
        obj[s[index]].push(index);
    }
    for (const key in obj) {
        if (obj[key].length > 1) {
            const totalCharsInBetween = obj[key][obj[key].length - 1] - obj[key][0] - 1;
            if (totalCharsInBetween > highestLength) {
                highestLength = totalCharsInBetween;
            }
        }
    }
    return highestLength;
};

console.log(maxLengthBetweenEqualCharacters((s = 'aa')));
console.log(maxLengthBetweenEqualCharacters((s = 'abca')));
console.log(maxLengthBetweenEqualCharacters((s = 'cbzxy')));
