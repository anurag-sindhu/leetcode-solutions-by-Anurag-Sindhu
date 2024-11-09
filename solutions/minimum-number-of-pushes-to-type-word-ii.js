var minimumPushes = function (word) {
    const freq = (function () {
        const obj = {};
        for (let index = 0; index < word.length; index++) {
            const element = word[index];
            if (!obj[element]) {
                obj[element] = 0;
            }
            obj[element] += 1;
        }
        return obj;
    })();
    if (Object.keys(freq).length <= 8) {
        return word.length;
    }
    const freqSort = Object.values(freq).sort((a, b) => b - a);
    let keysToBePressed = 0;
    for (let index = 0; index < freqSort.length; index++) {
        if (index >= 8) {
            keysToBePressed += freqSort[index] * Math.ceil((index + 1) / 8);
        } else {
            keysToBePressed += freqSort[index];
        }
    }
    return keysToBePressed;
};

console.log(minimumPushes((word = 'aabbccddeeffgghhiiiiii')));
console.log(minimumPushes((word = 'xyzxyzxyzxyz')));
console.log(minimumPushes((word = 'abcde')));
