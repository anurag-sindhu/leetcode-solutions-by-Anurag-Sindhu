var sortSentence = function (s) {
    const output = [];
    const splittedString = s.split(' ');
    for (const iterator of splittedString) {
        const lastChar = iterator[iterator.length - 1];
        output[lastChar - 1] = iterator.substring(0, iterator.length - 1);
    }
    return output.join(' ');
};

console.log(sortSentence((s = 'is2 sentence4 This1 a3')));
console.log(sortSentence((s = 'Myself2 Me1 I4 and3')));
