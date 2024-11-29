var longestSubsequence = function (s, k) {
    let count = 0;
    let prod = 0;
    let hasProdLimitReached = false;
    for (let index = s.length - 1; index >= 0; index--) {
        const element = s[index];
        if (element === `1` && hasProdLimitReached == false) {
            prod += Math.pow(2, s.length - index - 1);
            if (prod <= k) {
                count += 1;
            } else {
                hasProdLimitReached = true;
            }
        } else {
            if (hasProdLimitReached) {
                if (element === '0') {
                    count += 1;
                }
            } else {
                count += 1;
            }
        }
    }
    return count;
};

console.log(longestSubsequence('001010101011010100010101101010010', 93951055) === 31);
console.log(longestSubsequence((s = '00101001'), (k = 1)) === 6);
console.log(longestSubsequence((s = '1001010'), (k = 5)) === 5);
