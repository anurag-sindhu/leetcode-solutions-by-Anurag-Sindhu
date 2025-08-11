function dotCount(s) {
    let count = 0;
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (element === ' ') {
            count += 1;
        }
    }
    return count;
}

var wordBreak = function (string, wordDict, wordDictObject = null) {
    const dp = { [string.length]: true };
    if (!wordDictObject) {
        wordDictObject = (function () {
            const obj = {};
            for (let index = 0; index < wordDict.length; index++) {
                obj[wordDict[index]] = wordDict[index];
            }
            return obj;
        })();
    }
    const output = [];
    function wordBreakHelper(string, index = 0, collect = '') {
        const count = dotCount(collect);

        const totalCharCount = collect.length;
        if (totalCharCount - count === string.length) {
            output.push(collect);
        }
        let temp = '';
        for (; index < string.length; index++) {
            temp += string[index];
            if (wordDictObject[temp]) {
                wordBreakHelper(string, index + 1, collect + `${temp} `);
                console.log('object');
            }
            console.log('object');
        }
        console.log('object');
    }
    wordBreakHelper(string);
    for (let index = 0; index < output.length; index++) {
        const element = output[index];
        output[index] = element.slice(0, element.length - 1);
    }
    return output;
};

console.log(
    wordBreak(
        (s = 'pineapplepenapple'),
        (wordDict = ['apple', 'pen', 'applepen', 'pine', 'pineapple']),
    ),
);
//["pine apple pen apple","pineapple pen apple","pine applepen apple"]
console.log(wordBreak((s = 'catsanddog'), (wordDict = ['cat', 'cats', 'and', 'sand', 'dog'])));
//["cats and dog","cat sand dog"]
console.log(wordBreak('aaaaaaa', ['aaaa', 'aaa']));
console.log(wordBreak('applepenapple', ['apple', 'pen']));
console.log(wordBreak('leetcode', ['leet', 'code']));
console.log(
    wordBreak(
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
        [
            'a',
            'aa',
            'aaa',
            'aaaa',
            'aaaaa',
            'aaaaaa',
            'aaaaaaa',
            'aaaaaaaa',
            'aaaaaaaaa',
            'aaaaaaaaaa',
        ],
    ),
);
console.log(wordBreak('applepenapple', ['apple', 'applepe', 'napple']));
console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));
console.log(wordBreak('ab', ['a', 'b']));
console.log(wordBreak('cars', ['car', 'ca', 'rs']));
console.log(wordBreak('leetcode', ['let', 'code']));
