var reportSpam = function (message, bannedWords) {
    const dictBannedWords = (function () {
        const dict = {};
        for (const element of bannedWords) {
            dict[element] = true;
        }
        return dict;
    })();
    let count = 0;
    for (const element of message) {
        if (dictBannedWords[element]) {
            count += 1;
        }
        if (count > 1) {
            return true;
        }
    }
    return false;
};

console.log(
    reportSpam(
        (message = ['hello', 'programming', 'programming', 'fun']),
        (bannedWords = ['world', 'programming', 'leetcode']),
    ),
);
console.log(
    reportSpam((message = ['hello', 'world', 'leetcode']), (bannedWords = ['world', 'hello'])),
);

console.log(
    reportSpam(
        (message = ['hello', 'programming', 'fun']),
        (bannedWords = ['world', 'programming', 'leetcode']),
    ),
);
