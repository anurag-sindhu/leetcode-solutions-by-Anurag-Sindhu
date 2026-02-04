function isSingleCharacterChange(from, to) {
    if (from.length !== to.length) return false;

    let diff = 0;
    for (let i = 0; i < from.length; i++) {
        if (from[i] !== to[i]) diff++;
        if (diff > 1) return false;
    }
    return diff === 1;
}

var ladderLength = function (beginWord, endWord, wordList) {
    const set = new Set(wordList);
    if (!set.has(endWord)) return 0;

    const queue = [];
    queue.push(beginWord);

    const visited = new Set();
    visited.add(beginWord);

    let changes = 1;

    while (queue.length > 0) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const word = queue.shift();
            if (word === endWord) {
                return changes;
            }

            for (let j = 0; j < word.length; j++) {
                for (let k = 97; k <= 122; k++) {
                    const arr = word.split('');
                    arr[j] = String.fromCharCode(k);
                    const str = arr.join('');

                    if (set.has(str) && !visited.has(str)) {
                        queue.push(str);
                        visited.add(str);
                    }
                }
            }
        }
        changes++;
    }

    return 0;
};
console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
console.log(
    ladderLength(
        (beginWord = 'hit'),
        (endWord = 'cog'),
        (wordList = ['hot', 'dot', 'dog', 'lot', 'log']),
    ),
);
