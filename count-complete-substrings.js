var countCompleteSubstrings = function (array, k) {
    let count = 0;
    let pointer = 0;
    let wordCount = {};
    let wordStartIndex = {};
    let wordStartIndexRunning = {};
    for (let index = 0; index < array.length; index++) {
        if (!wordCount[array[index]]) {
            wordCount[array[index]] = 0;
            wordStartIndex[array[index]] = [];
            wordStartIndexRunning[array[index]] = -1;
        }
        wordCount[array[index]] += 1;
        wordStartIndex[array[index]].push(index);
    }
    return count;
};

console.log(countCompleteSubstrings((word = 'igigee'), (k = 2)));
console.log(countCompleteSubstrings((word = 'aaabbbccc'), (k = 3)));
