const vowels = { a: true, e: true, i: true, o: true, u: true };

var vowelStrings = function (words, left, right) {
    let count = 0
    for (let index = left; index <= right; index++) {
        if (vowels[words[index][0]] && vowels[words[index][words[index].length - 1]]) {
            count++
        } else {
            if (!index) {
                words[index] = 0;
            } else {
                words[index] = words[index - 1];
            }
        }
    }
    return count;
};

console.log(vowelStrings(words = ["are", "amy", "u"], left = 0, right = 2));
console.log(vowelStrings(words = ["hey", "aeo", "mu", "ooo", "artro"], left = 1, right = 4));