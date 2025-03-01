var topKFrequent = function (words, k) {
    const wordToFreq = {};
    let output = [];
    const freqToWord = {};
    for (const element of words) {
        if (!wordToFreq[element]) {
            wordToFreq[element] = 0;
        }
        wordToFreq[element] += 1;
    }
    for (const key in wordToFreq) {
        if (!freqToWord[wordToFreq[key]]) {
            freqToWord[wordToFreq[key]] = [];
        }
        freqToWord[wordToFreq[key]].push(key);
    }
    for (const key in freqToWord) {
        freqToWord[key] = freqToWord[key].sort();
    }
    const keysss = Object.keys(freqToWord)
        .map((value) => Number(value))
        .sort((a, b) => b - a);
    for (const element of keysss) {
        const totalWords = freqToWord[element].length;
        if (totalWords == 1) {
            output.push(freqToWord[element][0]);
            k -= 1;
        } else {
            if (totalWords <= k) {
                output = [...output, ...freqToWord[element]];
                k -= totalWords;
            } else {
                output = [...output, ...freqToWord[element].splice(0, k)];
                k = 0;
            }
        }
        if (k <= 0) {
            break;
        }
    }
    return output;
};

console.log(topKFrequent((words = ['i', 'love', 'leetcode', 'i', 'love', 'coding']), (k = 3))); //["i","love","coding"]
console.log(topKFrequent((words = ['i', 'love', 'leetcode', 'i', 'love', 'coding']), (k = 2)));
console.log(
    topKFrequent(
        (words = ['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is']),
        (k = 4),
    ),
);
