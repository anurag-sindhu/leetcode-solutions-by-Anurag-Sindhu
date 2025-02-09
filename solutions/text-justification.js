const { areTwoArrayEqual } = require('../javascript/compare-two-array.js');

var fullJustify = function (words, maxWidth) {
    const builtArray = [];
    let tempArray = [];
    let tempLen = 0;

    const createSpaceOfGivenSize = (size) => {
        let space = ``;
        for (let index = 0; index < size; index++) {
            space += ` `;
        }
        return space;
    };

    //pack your words in a greedy approach; that is, pack as many words as you can in each line
    for (let index = 0; index < words.length; index++) {
        if (tempLen + tempArray.length + words[index].length <= maxWidth) {
            tempArray.push(words[index]);
            tempLen += words[index].length;
        } else {
            builtArray.push({
                array: tempArray,
                size: tempLen,
            });
            tempArray = [words[index]];
            tempLen = words[index].length;
            continue;
        }
    }

    //for last iteration
    builtArray.push({
        array: tempArray,
        size: tempLen,
    });
    const output = [];
    for (let index = 0; index < builtArray.length; index++) {
        let { array, size } = builtArray[index];
        const totalWord = array.length;
        const totalRequiredSpace = maxWidth - size;
        if (index === builtArray.length - 1) {
            // because the last line must be left-justified instead of fully-justified.
            const str =
                array.join(` `) + createSpaceOfGivenSize(totalRequiredSpace - (array.length - 1));
            output.push(str);
        } else {
            let extraSpace = totalRequiredSpace % (totalWord - 1);
            //If the number of spaces on a line does not divide evenly between words,
            if (extraSpace) {
                const spaces = [];
                //Extra spaces between words should be distributed as evenly as possible.
                let spacePerWord = (totalRequiredSpace - extraSpace) / (totalWord - 1);
                for (let index = 0; index < totalWord - 1; index++) {
                    spaces.push(createSpaceOfGivenSize(spacePerWord));
                }
                let tempTotalWord = totalWord - 1 - 1;
                // the empty slots on the left will be assigned more spaces than the slots on the right.
                while (extraSpace) {
                    const temp = extraSpace % tempTotalWord;
                    spacePerWord = parseInt(extraSpace / tempTotalWord);
                    for (let index = 0; index < tempTotalWord; index++) {
                        spaces[index] += createSpaceOfGivenSize(spacePerWord);
                    }
                    tempTotalWord -= 1;
                    extraSpace = temp;
                }
                let tempString = ``;
                for (let index = 0; index < totalWord; index++) {
                    //Each line has exactly maxWidth characters.
                    if (spaces[index]) {
                        tempString += array[index] + spaces[index] || ``;
                    } else {
                        tempString += array[index];
                    }
                }
                output.push(tempString);
            } else {
                //If the number of spaces on a line divide evenly between words,
                if (totalWord - 1) {
                    output.push(
                        array.join(createSpaceOfGivenSize(totalRequiredSpace / (totalWord - 1))),
                    );
                } else {
                    output.push(array[0] + createSpaceOfGivenSize(totalRequiredSpace));
                }
            }
        }
    }
    return output;
};

console.log(
    areTwoArrayEqual(
        fullJustify(
            (words = ['What', 'must', 'be', 'acknowledgment', 'shall', 'be']),
            (maxWidth = 16),
        ),
        ['What   must   be', 'acknowledgment  ', 'shall be        '],
    ),
);
console.log(
    areTwoArrayEqual(
        fullJustify(
            (words = [
                'Science',
                'is',
                'what',
                'we',
                'understand',
                'well',
                'enough',
                'to',
                'explain',
                'to',
                'a',
                'computer.',
                'Art',
                'is',
                'everything',
                'else',
                'we',
                'do',
            ]),
            (maxWidth = 20),
        ),
        [
            'Science  is  what we',
            'understand      well',
            'enough to explain to',
            'a  computer.  Art is',
            'everything  else  we',
            'do                  ',
        ],
    ),
);

console.log(
    areTwoArrayEqual(
        fullJustify(
            (words = ['This', 'is', 'an', 'example', 'of', 'text', 'justification.']),
            (maxWidth = 16),
        ),
        ['This    is    an', 'example  of text', 'justification.  '],
    ),
);
