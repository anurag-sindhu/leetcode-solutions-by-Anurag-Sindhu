var removeOccurrencesFirst = function (str, part) {
    let firstCharacterOfPart = part[0];
    let partMovingIndex = 0;
    let lastIndexesWhereMatchingStarted = [];
    let lastToLastIndexOfPartStartCharacter = 0;
    let fromIndexToSkip = null;
    let tillIndexToSkip = null;
    for (let index = 0; index < str.length; ) {
        if (
            part[0] === str[index] &&
            lastIndexesWhereMatchingStarted[lastIndexesWhereMatchingStarted.length - 1] !== index
        ) {
            lastIndexesWhereMatchingStarted.push(index);
        }
        if (str[index] === part[partMovingIndex]) {
            partMovingIndex++;
            if (partMovingIndex === part.length) {
                lastIndexesWhereMatchingStarted.pop();
                if (lastIndexesWhereMatchingStarted.length) {
                    index = lastIndexesWhereMatchingStarted.pop();
                    partMovingIndex = 0;
                } else {
                    index++;
                }
            } else {
                index++;
            }
        } else {
            if (partMovingIndex === 0) {
                index++;
            }
            partMovingIndex = 0;
            continue;
        }
    }
};

var removeOccurrences = function (str, part) {
    let partMovingIndex = 0;
    let lastIndexesWhereMatchingStarted = null;
    for (let index = 0; index < str.length; ) {
        if (index === lastIndexesWhereMatchingStarted) {
            lastIndexesWhereMatchingStarted = null;
        } else if (
            index !== 0 &&
            part[0] === str[index] &&
            lastIndexesWhereMatchingStarted === null &&
            lastIndexesWhereMatchingStarted !== index
        ) {
            lastIndexesWhereMatchingStarted = index;
        }
        if (str[index] === part[partMovingIndex]) {
            partMovingIndex++;
            if (partMovingIndex === part.length) {
                const leftString = `${str.substring(0, index - part.length + 1)}${str.substring(
                    index + 1,
                )}`;
                return removeOccurrences(leftString, part);
            } else {
                index++;
            }
        } else {
            if (partMovingIndex === 0) {
                index++;
            }
            partMovingIndex = 0;
            if (lastIndexesWhereMatchingStarted !== null) {
                index = lastIndexesWhereMatchingStarted;
            }
            continue;
        }
    }
    return str;
};

/**
 * kpygkivtlqoocskpygkpygkivtlqoocssnextkqzjpycbylkaondskivtlqoocssnextkqzjpycbylkaondssnextkqzjpycbylkaondshijzgaovndkjiiuwjtcpdpbkrfsi
 */
console.log(
    removeOccurrences(
        'kpygkivtlqoockpygkivtlqoocssnextkqzjpycbylkaondsskpygkpygkivtlqoocssnextkqzjpkpygkivtlqoocssnextkqzjpycbylkaondsycbylkaondskivtlqoocssnextkqzjpycbylkaondssnextkqzjpycbylkaondshijzgaovndkjiiuwjtcpdpbkrfsi',
        'kpygkivtlqoocssnextkqzjpycbylkaonds',
    ),
);
console.log(removeOccurrences((s = 'daabcbaabcbc'), (part = 'abc')));
console.log(removeOccurrences((s = 'axxxxyyyyb'), (part = 'xy')));
