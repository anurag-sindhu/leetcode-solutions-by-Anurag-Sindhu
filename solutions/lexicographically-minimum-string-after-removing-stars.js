const chars = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];

var clearStars = function (s) {
    const charsAsPerIndex = {};
    const characterAndIndexMapping = {};
    for (let index = 0; index < s.length; index++) {
        if (s[index] != '*') {
            charsAsPerIndex[index] = {
                char: s[index],
                valid: true,
            };
            if (characterAndIndexMapping[s[index]] == undefined) {
                characterAndIndexMapping[s[index]] = [];
            }
            characterAndIndexMapping[s[index]].push(index);
        } else {
            const findSmallestCharacter = (function () {
                for (let index = 0; index < chars.length; index++) {
                    const element = chars[index];
                    if (characterAndIndexMapping[element] &&characterAndIndexMapping[element].length) {
                        const poppedElement = characterAndIndexMapping[element].pop();
                        return {
                            char: element,
                            indexInString: poppedElement,
                        };
                    }
                }
            })();
            charsAsPerIndex[findSmallestCharacter.indexInString].valid = false;
        }
    }
    let output = '';
    for (const key in charsAsPerIndex) {
        if (charsAsPerIndex[key].valid == true) {
            output += charsAsPerIndex[key].char;
        }
    }
    return output;
};

console.log(clearStars((s = 'd*')));
console.log(clearStars((s = 'aaba*')));
console.log(clearStars((s = 'abc')));
