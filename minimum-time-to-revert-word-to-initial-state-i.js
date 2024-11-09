var minimumTimeToInitialState = function (word, k) {
    let hasBroke = false;
    let count = 1;
    let pointer = 0;
    while (true) {
        hasBroke = false;
        pointer = 0;
        for (let secondIndex = k * count; secondIndex < word.length; secondIndex++) {
            if (word[pointer] !== word[secondIndex]) {
                hasBroke = true;
                const totalCountRequiredTillThatPoint = Math.max(
                    1,
                    Math.ceil((secondIndex - k * count) / k),
                );
                count += totalCountRequiredTillThatPoint;
                break;
            }
            pointer++;
        }
        if (!hasBroke) {
            return count;
        }
    }
};

console.log(minimumTimeToInitialState('bbaabbb', 1) === 5);
console.log(minimumTimeToInitialState((word = 'abacaba'), (k = 3)) === 2);
console.log(minimumTimeToInitialState((word = 'anurag'), (k = 4)) === 2);
console.log(minimumTimeToInitialState((word = 'abacaba'), (k = 4)) === 1);
console.log(minimumTimeToInitialState((word = 'anurag'), (k = 3)) === 2);
console.log(minimumTimeToInitialState((word = 'anuran'), (k = 2)) === 2);
console.log(minimumTimeToInitialState((word = 'abcbabcd'), (k = 2)) === 4);
