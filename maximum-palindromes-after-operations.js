var maxPalindromesAfterOperations = function (words) {
    const frequency = {};
    const revFrequency = {};
    for (const element of words) {
        for (let index = 0; index < element.length; index++) {
            if (!frequency[element[index]]) {
                frequency[element[index]] = 0;
            }
            frequency[element[index]] += 1;
        }
    }
    for (const key in frequency) {
        if (!revFrequency[frequency[key]]) {
            revFrequency[frequency[key]] = 0;
        }
        revFrequency[frequency[key]] += 1;
    }
    return;
};

console.log(
    maxPalindromesAfterOperations(
        (words = ['abcd', 'efgh', 'ghefcd', 'abcd', 'abcd', 'efgh', 'ghefcd']),
    ) === 2,
);
console.log(maxPalindromesAfterOperations((words = ['abcd', 'efgh', 'ghefcd'])) === 2);
console.log(maxPalindromesAfterOperations((words = ['cd', 'ef', 'a'])) === 0);
console.log(maxPalindromesAfterOperations((words = ['abbb', 'ba', 'aa'])) === 3);
console.log(maxPalindromesAfterOperations((words = ['abc', 'ab'])) === 2);
