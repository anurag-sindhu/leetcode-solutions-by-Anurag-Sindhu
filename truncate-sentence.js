/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    let index = 0;
    while (k > 0 && index++ < s.length) {
        if (s[index] === ' ') {
            k--;
        }
    }
    return s.substring(0, index);
};
console.log(
    truncateSentence((s = 'chopper is not a tanuki'), (k = 5)) === 'chopper is not a tanuki',
);
console.log(
    truncateSentence((s = 'Hello how are you Contestant'), (k = 4)) === 'Hello how are you',
);
console.log(
    truncateSentence((s = 'What is the solution to this problem'), (k = 4)) ===
        'What is the solution',
);
