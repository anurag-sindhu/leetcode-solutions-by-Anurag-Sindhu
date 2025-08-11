var maxRemovals = function (source, pattern, targetIndices) {
    let count = 0;
    const characterIndexConfig = {};
    const configIndexMapping = {};
    for (let index = 0; index < source.length; index++) {
        const element = source[index];
        if (!characterIndexConfig[element]) {
            characterIndexConfig[element] = [];
            configIndexMapping[element] = { start: -1, end: -1 };
        }
        characterIndexConfig[element].push(index);
    }
    for (const element of targetIndices) {
        let startIndexPattern = 0;
        let endIndexPattern = pattern.length - 1;
        for (const key in configIndexMapping) {
            configIndexMapping[key] = { start: -1, end: -1 };
        }
        while (startIndexPattern < endIndexPattern) {
            const leftElement = pattern[startIndexPattern];
            const rightElement = pattern[endIndexPattern];

            let currentStartIndexOfLeftInConfigIndexMapping = (() => {
                let temp = configIndexMapping[leftElement].start;
                temp++;
                let indexInSourceString = characterIndexConfig[leftElement][temp];
                if (indexInSourceString == element) {
                    temp++;
                    indexInSourceString = characterIndexConfig[leftElement][temp];
                }
                configIndexMapping[leftElement].start = temp;
                if (indexInSourceString < 0) {
                    return false;
                }
                if (indexInSourceString >= source.length) {
                    return false;
                }
                return indexInSourceString;
            })();
            let currentEndIndexOfRightInConfigIndexMapping = (() => {
                let temp = configIndexMapping[rightElement].end;
                if (temp == -1) {
                    temp = characterIndexConfig[rightElement].length;
                }
                temp--;
                let indexInSourceString = characterIndexConfig[rightElement][temp];
                if (indexInSourceString == element) {
                    temp--;
                    indexInSourceString = characterIndexConfig[rightElement][temp];
                }
                configIndexMapping[rightElement].end = temp;
                if (indexInSourceString < 0) {
                    return false;
                }
                if (indexInSourceString >= source.length) {
                    return false;
                }
                return indexInSourceString;
            })();
            if (
                currentStartIndexOfLeftInConfigIndexMapping === false ||
                currentEndIndexOfRightInConfigIndexMapping === false
            ) {
                continue;
            }
            startIndexPattern++;
            endIndexPattern--;
            if (startIndexPattern === endIndexPattern) {
                const elementToMatch = pattern[startIndexPattern];
                let currentEndIndexOfElementToMatchInConfigIndexMapping = (() => {
                    let temp = configIndexMapping[elementToMatch].end;
                    if (temp == -1) {
                        temp = characterIndexConfig[elementToMatch].length;
                    }
                    temp--;
                    let indexInSourceString = characterIndexConfig[elementToMatch][temp];
                    if (indexInSourceString == element) {
                        temp--;
                        indexInSourceString = characterIndexConfig[rightElement][temp];
                    }
                    if (indexInSourceString < 0) {
                        return false;
                    }
                    if (indexInSourceString >= source.length) {
                        return false;
                    }
                    return indexInSourceString;
                })();
                if (
                    currentEndIndexOfElementToMatchInConfigIndexMapping >
                        currentStartIndexOfLeftInConfigIndexMapping &&
                    currentEndIndexOfElementToMatchInConfigIndexMapping <
                        currentEndIndexOfRightInConfigIndexMapping
                ) {
                    count += 1;
                }
                break;
            } else if (endIndexPattern - startIndexPattern == 1) {
                count += 1;
                break;
            }
        }
    }
    return count;
};

console.log(maxRemovals((source = 'bcda'), (pattern = 'd'), (targetIndices = [0, 3])));
console.log(maxRemovals((source = 'dda'), (pattern = 'dda'), (targetIndices = [0, 1, 2])));
console.log(maxRemovals((source = 'abbaa'), (pattern = 'aba'), (targetIndices = [0, 1, 2])));
