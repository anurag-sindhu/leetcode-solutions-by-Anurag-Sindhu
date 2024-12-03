const { areTwoArrayEqual } = require('../javascript/compare-two-array');

function isCapitalLetter(char) {
    return char.toLowerCase() !== char;
}

function splitWordAsCamelCasePattern(word, patternSplitted) {
    const output = [];
    let tempWord = ``;
    for (let index = 0; index < word.length; index++) {
        if (isCapitalLetter(word[index])) {
            if (tempWord.length) {
                output.push(tempWord);
            }
            tempWord = ``;
        }
        tempWord += word[index];
    }
    if (tempWord.length) {
        output.push(tempWord);
    }
    return output;
}
function splitWordAsCamelCasePatternWithPatternSplitted(word, patternSplitted) {
    let patternSplittedIndex = 0;
    let capitalLetterIndex = 0;
    let index = 0;
    let capitalLetters = '';
    for (let ind = 0; ind < word.length; ind++) {
        const element = word[ind];
        if (isCapitalLetter(element)) {
            capitalLetters += element;
        }
    }
    if (capitalLetters.length != patternSplitted.length) {
        return false;
    }
    for (; index < word.length; index++) {
        if (patternSplitted[patternSplittedIndex][capitalLetterIndex] == word[index]) {
            capitalLetterIndex++;
        }
        if (
            patternSplitted[patternSplittedIndex] &&
            patternSplitted[patternSplittedIndex][capitalLetterIndex] === undefined
        ) {
            capitalLetterIndex = 0;
            patternSplittedIndex++;
            if (patternSplittedIndex == patternSplitted.length) {
                break;
            }
        }
    }
    if (patternSplittedIndex !== patternSplitted.length) {
        return false;
    }
    if (++index !== word.length) {
        let capitalLetters = '';
        for (; index < word.length; index++) {
            const element = word[index];
            if (isCapitalLetter(element)) {
                capitalLetters += element;
            }
        }
        if (capitalLetters.length) {
            return false;
        }
    }
    return true;
}

var camelMatch = function (queries, pattern) {
    const patternSplitted = splitWordAsCamelCasePattern(pattern);
    const output = [];
    for (const iterator of queries) {
        output.push(splitWordAsCamelCasePatternWithPatternSplitted(iterator, patternSplitted));
    }
    return output;
};

console.log(
    areTwoArrayEqual(
        camelMatch(
            (queries = ['CompetitiveProgramming', 'CounterPick', 'ControlPanel']),
            (pattern = 'CooP'),
        ),
        [false, false, true],
    ),
);

console.log(
    areTwoArrayEqual(
        camelMatch(
            [
                'aksvbjLiknuTzqon',
                'ksvjLimflkpnTzqn',
                'mmkasvjLiknTxzqn',
                'ksvjLiurknTzzqbn',
                'ksvsjLctikgnTzqn',
                'knzsvzjLiknTszqn',
            ],
            'ksvjLiknTzqn',
        ),
        [true, true, true, true, true, true],
    ),
);
console.log(
    areTwoArrayEqual(
        camelMatch(
            (queries = ['FooBar', 'FooBarTest', 'FootBall', 'FrameBuffer', 'ForceFeedBack']),
            (pattern = 'FB'),
        ),
        [true, false, true, true, false],
    ),
);
console.log(
    areTwoArrayEqual(
        camelMatch(
            (queries = [
                'uAxaqlzahfialcezsLfj',
                'cAqlzyahaslccezssLfj',
                'AqlezahjarflcezshLfj',
                'AqlzofahaplcejuzsLfj',
                'tAqlzahavslcezsLwzfj',
                'AqlzahalcerrzsLpfonj',
                'AqlzahalceaczdsosLfj',
                'eAqlzbxahalcezelsLfj',
            ]),
            (pattern = 'AqlzahalcezsLfj'),
        ),
        [true, true, true, true, true, true, true, true],
    ),
); //[true,true,true,true,true,true,true,true]

console.log(
    areTwoArrayEqual(
        camelMatch(
            (queries = ['FooBar', 'FooBarTest', 'FootBall', 'FrameBuffer', 'ForceFeedBack']),
            (pattern = 'FoBa'),
        ),
        [true, false, true, false, false],
    ),
);

console.log(
    areTwoArrayEqual(camelMatch((queries = ['ForceFeedBack']), (pattern = 'FoBa')), [false]),
);

console.log(
    camelMatch(
        (queries = ['FooBar', 'FooBarTest', 'FootBall', 'FrameBuffer', 'ForceFeedBack']),
        (pattern = 'FB'),
    ),
);
console.log(
    camelMatch(
        (queries = ['FooBarTest', 'FootBall', 'FrameBuffer', 'ForceFeedBack']),
        (pattern = 'FoBaT'),
    ),
);
console.log(
    camelMatch(
        (queries = ['FooBar', 'FooBarTest', 'FootBall', 'FrameBuffer', 'ForceFeedBack']),
        (pattern = 'FoBaT'),
    ),
);
