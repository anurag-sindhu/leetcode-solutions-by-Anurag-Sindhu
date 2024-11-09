function isConversionPossible(currentWord, toWord) {
    let count = 0;
    for (let index = 0; index < currentWord.length; index++) {
        if (currentWord[index] !== toWord[index]) {
            count++;
        }
    }
    return count;
}

var ladderLength = function (beginWord, endWord, wordList) {
    let count = 0;
    let conversionCount = 0;
    if (!wordList.includes(endWord)) {
        return 0;
    }
    for (let index = 0; index < wordList.length; index++) {
        conversionCount = isConversionPossible(beginWord, wordList[index])
        if (conversionCount === 1) {
            startInd = index;
            startInd++;
            break;
        }
    }

    for (let index = startInd; index < wordList.length; index++) {
        conversionCount = isConversionPossible(wordList[index], endWord);
        if (!conversionCount) {
            return ++count
        } else if (conversionCount === 1) {
            count++;
        }

    }

};

console.log(ladderLength('hit', 'cog', ["hot", "dot", "dog", "lot", "log", "cog"]));