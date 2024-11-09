var isPrefixOfWord = function(sentence, searchWord) {
    const splittedSentence = sentence.split(' ');
    for (let index = 0; index < splittedSentence.length; index++) {
        splittedSentence[index] = splittedSentence[index].substring(0, searchWord.length);
    }
    for (let index = 0; index < splittedSentence.length; index++) {
        if (splittedSentence[index] === searchWord) {
            return index + 1;
        }
    }
    return -1;
};

console.log(isPrefixOfWord((sentence = 'i love eating burger'), (searchWord = 'burg')));
console.log(isPrefixOfWord((sentence = 'this problem is an easy problem'), (searchWord = 'pro')));
console.log(isPrefixOfWord((sentence = 'i am tired'), (searchWord = 'you')));
