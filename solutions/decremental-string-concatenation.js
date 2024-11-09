var minimizeConcatenatedLength = function (words) {
    let str = words[0];
    for (let index = 1; index < words.length; index++) {
        const firstWord = words[index][0];
        const lastWord = words[index][words[index].length - 1];
        const stringFirstWord = str[0];
        const stringLastWord = str[str.length - 1];
        if (firstWord === stringLastWord) {
            str += words[index].substring(1);
        } else if (lastWord === stringFirstWord) {
            let temp = words[index];
            temp += str.substring(1);
            str = temp;
        } else {
            str += words[index];
        }
    }
    return str.length;
};

console.log(minimizeConcatenatedLength((words = ['aa', 'bc', 'bb'])) === 5);
console.log(minimizeConcatenatedLength((words = ['aa', 'ab', 'bc'])) === 4);
console.log(minimizeConcatenatedLength((words = ['aaa', 'c', 'aba'])) === 6);
console.log(minimizeConcatenatedLength((words = ['ab', 'b'])) === 2);
