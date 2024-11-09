var isInterleave = function (s1 = '', s2 = '', s3 = '') {
    const cache = {};
    if (!s1.length && !s2.length) {
        if (s3.length) {
            return false;
        }
        return true;
    }

    if (!s1.length) {
        if (s2 !== s3) {
            return false;
        }
        return true;
    }

    if (!s2.length) {
        if (s1 !== s3) {
            return false;
        }
        return true;
    }

    if (!s3.length) {
        return false;
    }
    if ((s1.length || 0) + (s2.length || 0) !== (s3.length || 0)) {
        return false;
    }

    function isInterleaveHelper(s1Pointer = 0, s2Pointer = 0) {
        const cacheKey = `${s1Pointer}_${s2Pointer}`;
        if (cache[cacheKey]) {
            return false;
        }
        if (s1Pointer < s1.length || s2Pointer < s2.length) {
            if (
                s1[s1Pointer] === s3[s1Pointer + s2Pointer] &&
                isInterleaveHelper(s1Pointer + 1, s2Pointer)
            ) {
                return true;
            }
            if (
                s2[s2Pointer] === s3[s1Pointer + s2Pointer] &&
                isInterleaveHelper(s1Pointer, s2Pointer + 1)
            ) {
                return true;
            }
            cache[cacheKey] = true;
            return false;
        }
        return true;
    }
    return isInterleaveHelper();
};

console.log(isInterleave((s1 = 'a'), (s2 = 'b'), (s3 = 'ab')) === true);
console.log(
    isInterleave((s1 = 'aabcc'), (s2 = 'dbbca'), (s3 = 'aadbbcbcac')) === true
);
console.log(isInterleave('anurag', 'sindhu', 'anuragsindhu') === true);
console.log(isInterleave('a', '', 'c') === false);
console.log(
    isInterleave((s1 = 'aabcc'), (s2 = 'dbbca'), (s3 = 'aadbbbaccc')) === false
);
console.log(isInterleave((s1 = ''), (s2 = ''), (s3 = '')) === true);
console.log(
    isInterleave(
        'abababababababababababababababababababababababababababababababababababababababababababababababababbb',
        'babababababababababababababababababababababababababababababababababababababababababababababababaaaba',
        'abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababbb'
    ) === false
);
console.log(isInterleave((s1 = 'a'), (s2 = 'b'), (s3 = 'a')) === false);
