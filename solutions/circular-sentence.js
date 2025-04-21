var isCircularSentence = function (sentence) {
    const splitted = sentence.split(' ');
    let firstWord;
    let lastWord = sentence[sentence.length - 1];
    for (const element of splitted) {
        firstWord = element[0];
        if (lastWord !== firstWord) {
            return false;
        }
        lastWord = element[element.length - 1];
    }
    return true;
};

console.log(isCircularSentence((sentence = 'leetcode exercises sound delightful')));
console.log(isCircularSentence((sentence = 'eetcode')));
console.log(isCircularSentence((sentence = 'Leetcode is cool')));
