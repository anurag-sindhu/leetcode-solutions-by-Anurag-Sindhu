var areAlmostEqual = function (s1, s2) {
    if (s1.length != s2.length) {
        return false;
    }

    const freqS1 = {};
    for (let index = 0; index < s1.length; index++) {
        if (!freqS1[s1[index]]) {
            freqS1[s1[index]] = 0;
        }
        freqS1[s1[index]] += 1;
    }
    const freqS2 = {};
    for (let index = 0; index < s2.length; index++) {
        if (!freqS2[s2[index]]) {
            freqS2[s2[index]] = 0;
        }
        freqS2[s2[index]] += 1;
    }

    for (const key in freqS2) {
        if (freqS2[key] !== freqS1[key]) {
            return false;
        }
    }
    let hasMisMatchEntertained = false;
    let mismatchInS1 = null;
    let mismatchInS2 = null;
    for (let index = 0; index < s1.length; index++) {
        if (s1[index] !== s2[index]) {
            if (hasMisMatchEntertained) {
                return false;
            }
            if (mismatchInS1 !== null) {
                if (mismatchInS2 !== s1[index] && mismatchInS1 !== s2[index]) {
                    return false;
                }
                hasMisMatchEntertained = true;
            }
            mismatchInS1 = s1[index];
            mismatchInS2 = s2[index];
        }
    }
    return true;
};

console.log(areAlmostEqual('qgqeg', 'gqgeq') === false);
console.log(areAlmostEqual('abcd', 'dcba') === false);
console.log(areAlmostEqual((s1 = 'bank'), (s2 = 'kanb')) === true);
console.log(areAlmostEqual((s1 = 'attack'), (s2 = 'defend')) === false);
console.log(areAlmostEqual((s1 = 'kelb'), (s2 = 'kelb')) === true);
