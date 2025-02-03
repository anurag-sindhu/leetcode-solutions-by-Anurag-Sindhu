var minDistance = function (text1, text2) {
    const matrix = [];
    for (let rowIndex = 0; rowIndex <= text1.length; rowIndex++) {
        matrix[rowIndex] = [];
        for (let columnIndex = 0; columnIndex <= text2.length; columnIndex++) {
            matrix[rowIndex].push(0);
        }
    }
    for (let text1Index = 0; text1Index < text1.length; text1Index++) {
        for (let text2Index = 0; text2Index < text2.length; text2Index++) {
            if (text1[text1Index] == text2[text2Index]) {
                matrix[text1Index + 1][text2Index + 1] = matrix[text1Index][text2Index] + 1;
            } else {
                matrix[text1Index + 1][text2Index + 1] = Math.max(
                    matrix[text1Index + 1][text2Index],
                    matrix[text1Index][text2Index + 1],
                );
            }
        }
    }
    return text1.length + text2.length - matrix[text1.length][text2.length] * 2;
};

console.log(minDistance((word1 = 'tqeat'), (word2 = 'esea')));
console.log(minDistance((word1 = 'sea'), (word2 = 'eat')));
console.log(minDistance((word1 = 'leetcode'), (word2 = 'etco')));
