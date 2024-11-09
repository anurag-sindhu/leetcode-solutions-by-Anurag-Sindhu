var isSumEqual = function (firstWord, secondWord, targetWord) {
    let firstWordValue = ``;
    let secondWordValue = ``;
    let targetWordValue = ``;
    for (let index = 0; index < firstWord.length; index++) {
        firstWordValue += firstWord[index].charCodeAt(0) - 97;
    }
    for (let index = 0; index < secondWord.length; index++) {
        secondWordValue += secondWord[index].charCodeAt(0) - 97;
    }
    for (let index = 0; index < targetWord.length; index++) {
        targetWordValue += targetWord[index].charCodeAt(0) - 97;
    }
    return Number(firstWordValue) + Number(secondWordValue) === Number(targetWordValue);
};

console.log(isSumEqual((firstWord = 'acb'), (secondWord = 'cba'), (targetWord = 'cdb')));
console.log(isSumEqual((firstWord = 'aaa'), (secondWord = 'a'), (targetWord = 'aab')));
console.log(isSumEqual((firstWord = 'aaa'), (secondWord = 'a'), (targetWord = 'aaaa')));
