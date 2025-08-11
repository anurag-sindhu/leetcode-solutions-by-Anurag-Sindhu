var minimumDeletions = function (word, k) {
    const charFreq = {};
    let maxCount = 0;
    for (let index = 0; index < word.length; index++) {
        if (charFreq[word[index]]) {
            charFreq[word[index]] += 1;
        } else {
            charFreq[word[index]] = 1;
        }
    }

    const freqArr = Object.values(charFreq).sort((a, b) => a - b);
    for (let parentIndex = 0; parentIndex < freqArr.length; parentIndex++) {
        const element = freqArr[parentIndex];
        let tempIndex = parentIndex + 1;
        const canPossibleTillFreq = element + k;
        let tempAdd = element;
        if (tempIndex < freqArr.length) {
            while (freqArr[tempIndex]) {
                if (freqArr[tempIndex] <= canPossibleTillFreq) {
                    tempAdd += freqArr[tempIndex++];
                } else {
                    tempIndex--;
                    break;
                }
            }
        } else {
            tempIndex = Infinity;
        }
        if (tempIndex < freqArr.length) {
            const pendingIndexes = freqArr.length - 1 - tempIndex;
            tempAdd += canPossibleTillFreq * pendingIndexes;
        }
        maxCount = Math.max(maxCount, tempAdd);
    }
    return word.length - maxCount;
};

console.log(minimumDeletions((word = 'inn'), (k = 3)) == 0);
console.log(minimumDeletions((word = 'aaabaaa'), (k = 2)) == 1);
console.log(minimumDeletions((word = 'dabdcbdcdcd'), (k = 2)) == 2);
console.log(minimumDeletions((word = 'aabcaba'), (k = 0)) == 3);
