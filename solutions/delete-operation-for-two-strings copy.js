var minDistance = function (word1, word2) {
    if (word1.length < word2.length) {
        const store = word1;
        word1 = word2;
        word2 = store;
    }
    const word1Indexes = word1.split('').reduce((acc, curr, index) => {
        if (acc[curr] == undefined) {
            acc[curr] = [];
        }
        acc[curr].push(index);
        return acc;
    }, {});
    const word2Indexes = word2.split('').reduce((acc, curr, index) => {
        if (acc[curr] == undefined) {
            acc[curr] = [];
        }
        acc[curr].push(index);
        return acc;
    }, {});
    let word2Index = 0;
    let tempDelete = 0;
    let toBeDeleted = Infinity;
    const word2IndexesTravel = {};
    for (let index = 0; index < word1.length; index++) {
        let indexWord2 = word2Indexes[word1[index]];
        if (indexWord2 == undefined) {
            tempDelete += 1;
        } else {
            if (!word2IndexesTravel[word1[index]]) {
                word2IndexesTravel[word1[index]] = 0;
            } else {
                word2IndexesTravel[word1[index]] += 1;
            }
            indexWord2 = word2Indexes[word1[index]][word2IndexesTravel[word1[index]]];
            tempDelete += indexWord2 - word2Index;
            word2Index = indexWord2;
            console.log('object');
        }
    }
    return;
};

console.log(minDistance((word1 = 'tqeat'), (word2 = 'esea')));
console.log(minDistance((word1 = 'sea'), (word2 = 'eat')));
console.log(minDistance((word1 = 'leetcode'), (word2 = 'etco')));
