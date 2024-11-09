var minimumTimeToInitialState = function (word, k) {
    let count = 1;
    let sameCharsPointer = 0;
    for (let index = word.length - 1; index >= count * k; index--) {
        if (word[index] !== word[sameCharsPointer]) {
            break;
        }
        sameCharsPointer++;
    }
    const nonOverlappedChars = Math.ceil((word.length - sameCharsPointer) / k) * k;
    return nonOverlappedChars / k;
};

console.log(minimumTimeToInitialState((word = 'abacaba'), (k = 3)) === 2);
console.log(minimumTimeToInitialState((word = 'abacaba'), (k = 4)) === 1);
console.log(minimumTimeToInitialState('bbaabbb', 1) === 5);
console.log(minimumTimeToInitialState((word = 'anurag'), (k = 4)) === 2);
console.log(minimumTimeToInitialState((word = 'anurag'), (k = 3)) === 2);
console.log(minimumTimeToInitialState((word = 'anuran'), (k = 2)) === 2);
console.log(minimumTimeToInitialState((word = 'abcbabcd'), (k = 2)) === 4);
