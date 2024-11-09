var countPalindromicSubsequence = function (s) {
    const characterFrequencyMapping = {};
    const characterFrequencyIndexMapping = [];
    for (let index = 0; index < s.length; index++) {
        if (!characterFrequencyMapping[s[index]]) {
            characterFrequencyMapping[s[index]] = [];
        }
        characterFrequencyMapping[s[index]].push(index);
        characterFrequencyIndexMapping[index] = [];
        for (let characterIndex = 0; characterIndex < 26; characterIndex++) {
            characterFrequencyIndexMapping[index][characterIndex] = 0;
        }
    }
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (index > 0) {
            for (
                let characterIndex = 0;
                characterIndex < characterFrequencyIndexMapping[index].length;
                characterIndex++
            ) {
                characterFrequencyIndexMapping[index][characterIndex] =
                    (characterFrequencyIndexMapping[index - 1] &&
                        characterFrequencyIndexMapping[index - 1][characterIndex]) ||
                    0;
            }
        }
        characterFrequencyIndexMapping[index][element.charCodeAt(0) - 97] =
            1 +
            ((characterFrequencyIndexMapping[index - 1] &&
                characterFrequencyIndexMapping[index - 1][element.charCodeAt(0) - 97]) ||
                0);
    }
    let output = 0;

    // Find Difference
    for (const key in characterFrequencyMapping) {
        let count = 0;
        const from = characterFrequencyIndexMapping[characterFrequencyMapping[key][0]];
        const to =
            characterFrequencyIndexMapping[
                characterFrequencyMapping[key][characterFrequencyMapping[key].length - 1]
            ];
        for (let index = 0; index < 26; index++) {
            if (key.charCodeAt(0) - 97 === index) {
                if (to[index] - from[index] > 1) {
                    count++;
                }
            } else if (from[index] !== to[index]) {
                count++;
            }
        }
        output += count;
    }
    return output;
};

console.log(countPalindromicSubsequence((s = 'bbcbaba')) === 4);
console.log(countPalindromicSubsequence((s = 'bbcbababbcbaba')) === 8);
console.log(
    countPalindromicSubsequence((s = 'tlpjzdmtwderpkpmgoyrcxttiheassztncqvnfjeyxxp')) === 161,
);
console.log(countPalindromicSubsequence((s = 'aabca')) === 3);
console.log(countPalindromicSubsequence((s = 'adc')) === 0);
