const trie = {};

function insert(word) {
    let node = trie;
    for (let char of word) {
        if (!node[char]) {
            node[char] = {};
        }
        node = node[char];
    }
    node.isEndOfWord = true;
}

var minValidStrings = function (words, target) {
    for (const word of words) {
        insert(word);
    }
    console.log('object');
};

console.log(minValidStrings((words = ['abc', 'aaaaa', 'bcdef']), (target = 'aabcdabc')));
console.log(minValidStrings((words = ['abababab', 'ab']), (target = 'ababaababa')));
console.log(minValidStrings((words = ['abcdef']), (target = 'xyz')));
