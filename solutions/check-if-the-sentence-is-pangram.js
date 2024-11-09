var checkIfPangram = function (sentence) {
    const obj = {};
    for (let index = 0; index < sentence.length; index++) {
        obj[sentence[index]] = true;
    }
    return Object.keys(obj).length === 26;
};

console.log(checkIfPangram((sentence = 'thequickbrownfoxjumpsoverthelazydog')));
console.log(checkIfPangram((sentence = 'leetcode')));
