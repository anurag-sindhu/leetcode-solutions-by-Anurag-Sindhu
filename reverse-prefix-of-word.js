var reversePrefix = function (word, ch) {
    const indexOfFirstCh = word.indexOf(ch)
    if (indexOfFirstCh === -1) {
        return word
    }
    const firstPortion = word.substring(0, indexOfFirstCh + 1)
    const output = firstPortion.split('').reverse().join('') + word.substring(indexOfFirstCh + 1)
    return output
};

console.log(reversePrefix(word = "abcdefd", ch = "d") === "dcbaefd");
console.log(reversePrefix(word = "xyxzxe", ch = "z") === "zxyxxe");
console.log(reversePrefix(word = "abcd", ch = "z") === "abcd");