var areSentencesSimilar = function (sentence1, sentence2) {
    let biggestSentence = '';
    let smallestSentence = '';
    if (sentence1.length === sentence2.length) {
        if (sentence1 !== sentence2) {
            return false;
        }
        return true;
    }

    const splittedSentence1 = sentence1.split(' ');
    const splittedSentence2 = sentence2.split(' ');

    if (splittedSentence1.length === 1) {
        if (splittedSentence2[0] === splittedSentence1[0]) {
            return true;
        }
        if (splittedSentence2[splittedSentence2.length - 1] === splittedSentence1[0]) {
            return true;
        }
        return false;
    }

    if (splittedSentence2.length === 1) {
        if (splittedSentence1[0] === splittedSentence2[0]) {
            return true;
        }
        if (splittedSentence1[splittedSentence1.length - 1] === splittedSentence2[0]) {
            return true;
        }
        return false;
    }

    if (sentence1.length > sentence2.length) {
        biggestSentence = splittedSentence1;
        smallestSentence = splittedSentence2;
    } else {
        biggestSentence = splittedSentence2;
        smallestSentence = splittedSentence1;
    }

    let biggestSentenceLeftPointer = -1;
    let biggestSentenceRightPointer = biggestSentence.length;
    let smallestSentenceLeftPointer = -1;
    let smallestSentenceRightPointer = smallestSentence.length;

    while (
        biggestSentence[biggestSentenceLeftPointer + 1] ===
        smallestSentence[smallestSentenceLeftPointer + 1]
    ) {
        biggestSentenceLeftPointer++;
        smallestSentenceLeftPointer++;
    }

    while (
        smallestSentenceLeftPointer < smallestSentenceRightPointer - 1 &&
        biggestSentence[biggestSentenceRightPointer - 1] ===
            smallestSentence[smallestSentenceRightPointer - 1]
    ) {
        biggestSentenceRightPointer--;
        smallestSentenceRightPointer--;
    }

    if (smallestSentenceRightPointer - smallestSentenceLeftPointer === 1) {
        return true;
    }

    return false;
};

console.log(areSentencesSimilar('A A AAa', 'A AAa') === true);
console.log(areSentencesSimilar((sentence1 = 'Eating right now'), (sentence2 = 'Eating')) === true);
console.log(areSentencesSimilar('A', 'a A b A') === true);
console.log(areSentencesSimilar((sentence1 = 'of'), (sentence2 = 'A lot of words')) === false);
console.log(
    areSentencesSimilar((sentence1 = 'My name is Haley'), (sentence2 = 'My Haley')) === true,
);
console.log(areSentencesSimilar('Luky', 'Lucccky') === false);
