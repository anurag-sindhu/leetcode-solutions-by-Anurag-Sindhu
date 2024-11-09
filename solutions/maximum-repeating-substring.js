var maxRepeating = function (sequence, word) {
    let count = 0;
    let finalCount = 0;
    let wordIndex = 0;
    let fromIndexToCoverAgain = null;
    for (let index = 0; index < sequence.length; ) {
        const element = sequence[index];
        if (element === word[wordIndex]) {
            if (word[0] === element && fromIndexToCoverAgain === null && wordIndex !== 0) {
                fromIndexToCoverAgain = index;
            }
            if (word.length - 1 === wordIndex) {
                count++;
                wordIndex = -1;
            }
            wordIndex++;
        } else {
            finalCount = Math.max(count, finalCount);
            count = 0;
            if (fromIndexToCoverAgain !== null) {
                index = fromIndexToCoverAgain - 1;
                fromIndexToCoverAgain = null;
            }
            wordIndex = 0;
        }
        index++;
    }
    return finalCount;
};

console.log(maxRepeating('aaabaaaabaaabaaaabaaaabaaaabaaaaba', 'aaaba') === 5);
console.log(maxRepeating((sequence = 'ababcabc'), (word = 'abc')) === 2);
console.log(maxRepeating((sequence = 'ababc'), (word = 'ab')) === 2);
console.log(maxRepeating((sequence = 'ababc'), (word = 'ba')) === 1);
console.log(maxRepeating((sequence = 'ababc'), (word = 'ac')) === 0);
