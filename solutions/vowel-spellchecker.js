/**
 * 
 * 
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function (wordList, queries) {
    const output = [];
    const wordListObj = {};
    for (const element of wordList) {
        wordListObj[element] = true;
    }
    const wordListObjArr = {};
    for (const element of wordList) {
        if (!wordListObjArr[element.toLowerCase()]) {
            wordListObjArr[element.toLowerCase()] = element;
        }
    }
    const wordListObjVowArr = {};
    const vowel = {
        a: 1,
        e: 1,
        i: 1,
        o: 1,
        u: 1,
    };
    for (const element of wordList) {
        const inLowerCase = element.toLowerCase();
        let newStr = '';
        for (let index = 0; index < inLowerCase.length; index++) {
            const element = inLowerCase[index];
            if (vowel[element]) {
                newStr += '_';
            } else {
                newStr += element;
            }
        }
        if (!wordListObjVowArr[newStr]) {
            wordListObjVowArr[newStr] = element;
        }
    }
    for (const query of queries) {
        if (wordListObj[query]) {
            output.push(query);
        } else if (wordListObjArr[query.toLowerCase()]) {
            output.push(wordListObjArr[query.toLowerCase()]);
        } else {
            let newStr = '';
            const inLowerCase = query.toLowerCase();
            for (let index = 0; index < inLowerCase.length; index++) {
                const element = inLowerCase[index];
                if (vowel[element]) {
                    newStr += '_';
                } else {
                    newStr += element;
                }
            }
            if (wordListObjVowArr[newStr]) {
                output.push(wordListObjVowArr[newStr]);
            } else {
                output.push('');
            }
        }
    }
    console.log({ wordListObj });
    return output;
};

console.log(
    spellchecker(
        ['KiTe', 'kite', 'hare', 'Hare'],
        (queries = [
            'kite',
            'Kite',
            'KiTe',
            'Hare',
            'HARE',
            'Hear',
            'hear',
            'keti',
            'keet',
            'keto',
        ]),
    ),
);
//["kite","KiTe","KiTe","Hare","hare","","","KiTe","","KiTe"]
console.log(spellchecker((wordlist = ['yellow']), (queries = ['YellOw'])));
