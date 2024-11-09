const vowels = { a: true, e: true, i: true, o: true, u: true };
var vowelStrings = function(words, queries) {
    for (let index = 0; index < words.length; index++) {
        if (vowels[words[index][0]] && vowels[words[index][words[index].length - 1]]) {
            if (!index) {
                words[index] = 1;
            } else {
                words[index] = 1 + words[index - 1];
            }
        } else {
            if (!index) {
                words[index] = 0;
            } else {
                words[index] = words[index - 1];
            }
        }
    }
    const output = [];
    for (let index = 0; index < queries.length; index++) {
        const [startIndex, endIndex] = queries[index];
        let len = words[endIndex] - (words[startIndex - 1] || 0);
        output.push(len);
    }
    return output;
};

console.log(
    vowelStrings((words = ['aba', 'bcb', 'ece', 'aa', 'e']), (queries = [[0, 2], [1, 4], [1, 1]]))
);
//[2,3,0]
console.log(vowelStrings((words = ['a', 'e', 'i']), (queries = [[0, 2], [0, 1], [2, 2]])));
