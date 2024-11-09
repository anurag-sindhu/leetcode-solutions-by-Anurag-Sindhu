function findMinimumString(string1, string2) {
    if (string1 === string2) {
        return string1;
    }
    if (string1.length === string2.length) {
        for (let index = 0; index < string1.length; index++) {
            if (string1[index] === string2[index]) {
                continue;
            }
            if (string1[index] === `0`) {
                return string1;
            }
            if (string2[index] === `0`) {
                return string2;
            }
        }
        return string1;
    } else {
        if (string1.length > string2.length) {
            return string2;
        }
        return string1;
    }
}

var shortestBeautifulSubstring = function (s, k) {
    let nextOneIndex = null;
    let countOnes = 0;
    let minNumber = ``;
    let pleaseStoreForSubstring = false;
    let storingBinarySubstring = ``;
    for (let index = 0; index < s.length; ) {
        if (storingBinarySubstring !== `` && s[index] === '1' && nextOneIndex === null) {
            nextOneIndex = index;
        }
        if (s[index] === '1' || pleaseStoreForSubstring) {
            storingBinarySubstring += s[index];
            pleaseStoreForSubstring = true;
            if (s[index] === '1') {
                countOnes++;
            }
        }
        if (
            countOnes === k ||
            (minNumber !== `` && minNumber.length < storingBinarySubstring.length)
        ) {
            if (minNumber !== ``) {
                minNumber = findMinimumString(minNumber, storingBinarySubstring);
            } else {
                minNumber = storingBinarySubstring;
            }
            storingBinarySubstring = ``;
            countOnes = 0;
            if (k !== 1) {
                index = nextOneIndex || ++index;
            } else {
                index++;
            }
            pleaseStoreForSubstring = false;
            nextOneIndex = null;
        } else {
            index++;
        }
    }
    return minNumber;
};

console.log(shortestBeautifulSubstring('110000', 2) === '11');
console.log(shortestBeautifulSubstring('1100001110111100100', 8) === '11101111001');
console.log(shortestBeautifulSubstring((s = '11000111'), (k = 1)) === `1`);
console.log(shortestBeautifulSubstring((s = '100011001'), (k = 3)) === `11001`);
console.log(shortestBeautifulSubstring((s = '1011'), (k = 2)) === `11`);
console.log(shortestBeautifulSubstring((s = '000'), (k = 1)) === ``);
