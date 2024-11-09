var canMakeSubsequence = function (str1, str2) {
    const charIndexMapping = {};
    const charIndex = {};
    for (let index = 0; index < str1.length; index++) {
        if (!charIndexMapping[str1[index]]) {
            charIndexMapping[str1[index]] = [];
            charIndex[str1[index]] = 0;
        }
        charIndexMapping[str1[index]].push(index);
    }
    let hasExhaust = false;
    let str2Index = 0;
    let tempCharIndex = { ...charIndex };
    while (str2Index < str2.length) {
        const currentChar = str2[str2Index];
        const temp =
            str2[str2Index].charCodeAt(0) + 1 > 122 ? 97 : str2[str2Index].charCodeAt(0) + 1;
        const nextCyclicChar = String.fromCharCode(temp);
        if (
            currentChar === charIndexMapping[currentChar] &&
            charIndexMapping[currentChar][tempCharIndex[currentChar]] !== undefined
        ) {
            tempCharIndex[currentChar] += 1;
        }
        if (str2Index === str2.length - 1) {
            return true;
        }
    }
    return false;
};

console.log(canMakeSubsequence((str1 = 'abc'), (str2 = 'ad')));
console.log(canMakeSubsequence((str1 = 'zc'), (str2 = 'ad')));
console.log(canMakeSubsequence((str1 = 'ab'), (str2 = 'd')));
