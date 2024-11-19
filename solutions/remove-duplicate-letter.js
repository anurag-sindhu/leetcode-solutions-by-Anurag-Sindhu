var removeDuplicateLetters = function (s) {
    const freq = (function () {
        const freq = {};
        for (let index = 0; index < s.length; index++) {
            const element = s[index];
            if (!freq[element]) {
                freq[element] = 0;
            }
            freq[element] += 1;
        }
        return freq;
    })();
    let newStr = [s[0]];
    freq[s[0]] -= 1;
    let alreadyIn = { [s[0]]: true };
    let newStrNextIndex = 1;
    for (let index = 1; index < s.length; index++) {
        const element = s[index];
        if (!freq[element]) {
            continue;
        }
        if (alreadyIn[element]) {
            freq[element] -= 1;
            continue;
        }
        let newStrLastIndex = newStr.length - 1;
        if (newStr[newStrLastIndex] > element && freq[newStr[newStrLastIndex]]) {
            while (
                freq[newStr[newStrLastIndex]] &&
                newStr[newStrLastIndex] != undefined &&
                newStr[newStrLastIndex] > element
            ) {
                alreadyIn[newStr[newStrLastIndex]] = false;
                newStrLastIndex--;
            }
            newStrNextIndex = newStrLastIndex + 1;
            newStr[newStrNextIndex++] = element;
        } else {
            newStr[newStrNextIndex++] = element;
        }
        freq[element] -= 1;
        alreadyIn[element] = true;
    }
    return newStr.join('');
};

/**
 * 1 freq
 * smallest character
 * assign null
 */
console.log(
    removeDuplicateLetters(
        (s =
            'tknvntfipavdqjiyslpdlokuymbutpynnxqekoktlqzrhoyvbewklzuamhwtqygsiakymyqwqiqtouynaiowwf'),
    ) === 'adjbpnxeklqrhovwzgsimtuyf',
);
console.log(removeDuplicateLetters((s = 'bbcaac')) === 'bac');
console.log(removeDuplicateLetters((s = 'abacb')) === 'abc');
console.log(removeDuplicateLetters((s = 'cbacdcabdc')) === 'abdc');
console.log(removeDuplicateLetters((s = 'cbacdcbc')) === 'acdb');
console.log(removeDuplicateLetters((s = 'bcabc')) === 'abc');
/**
 * abcd
 */
