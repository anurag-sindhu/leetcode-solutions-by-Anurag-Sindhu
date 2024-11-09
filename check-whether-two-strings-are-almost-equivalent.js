function getFrequency(str) {
    const config = {};
    for (let index = 0; index < str.length; index++) {
        if (!config[str[index]]) {
            config[str[index]] = 0;
        }
        config[str[index]] += 1;
    }
    return config;
}

var checkAlmostEquivalent = function (word1, word2) {
    const frequency1 = getFrequency(word1);
    const frequency2 = getFrequency(word2);
    for (const key in frequency1) {
        const frequency1Count = frequency1[key] || 0;
        const frequency2Count = frequency2[key] || 0;
        const absDifference = Math.abs(frequency1Count - frequency2Count);
        if (absDifference > 3) {
            return false;
        }
    }
    for (const key in frequency2) {
        const frequency1Count = frequency1[key] || 0;
        const frequency2Count = frequency2[key] || 0;
        const absDifference = Math.abs(frequency1Count - frequency2Count);
        if (absDifference > 3) {
            return false;
        }
    }
    return true;
};

console.log(checkAlmostEquivalent((word1 = 'aaaa'), (word2 = 'bccb')));
console.log(checkAlmostEquivalent((word1 = 'abcdeef'), (word2 = 'abaaacc')));
console.log(
    checkAlmostEquivalent((word1 = 'cccddabba'), (word2 = 'babababab'))
);
