var maxRepeating = function (sequence, word) {
    let count = 0;
    let finalCount = 0;
    let wordIndex = 0;
    let fromIndexToCoverAgain = null;
    for (let index = 0; index < sequence.length; ) {
        const element = sequence[index];
        if (element === word[wordIndex]) {
            if (fromIndexToCoverAgain == null) {
                fromIndexToCoverAgain = index;
            }
            if (wordIndex === word.length - 1) {
                fromIndexToCoverAgain = index;
                count += 1;
                wordIndex = 0;
            } else {
                wordIndex++;
            }
        } else {
            finalCount += count;
            count = 0;
            if (fromIndexToCoverAgain !== null) {
                index = fromIndexToCoverAgain;
                fromIndexToCoverAgain = null;
            }
            wordIndex = 0;
        }
        index++;
    }
    finalCount += count;
    return finalCount;
};

console.log(maxRepeating('aaabaaaabaaabaaaabaaaabaaaabaaaaba', 'aaaba') === 5);
console.log(maxRepeating('aaabaaaabaaaba', 'aaaba') === 2);
console.log(maxRepeating('aabaaaabaaaabaaaabaaaaba', 'aaaba') === 5);
console.log(maxRepeating('aabaaaaba', 'aaaba') === 5);
console.log(maxRepeating('aabaaaabaaaaba', 'aaaba') === 5);
console.log(maxRepeating((sequence = 'ababcabc'), (word = 'abc')) === 2);
console.log(maxRepeating((sequence = 'ababc'), (word = 'ab')) === 2);
console.log(maxRepeating((sequence = 'ababc'), (word = 'ba')) === 1);
console.log(maxRepeating((sequence = 'ababc'), (word = 'ac')) === 0);
