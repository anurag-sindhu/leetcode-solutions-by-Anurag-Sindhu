// Create an empty trie
const trie = {};

// Insert a word into the trie
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

// Search for a word in the trie
function search(word) {
    let node = trie;
    for (let char of word) {
        if (!node[char]) {
            return false;
        }
        node = node[char];
    }
    return node.isEndOfWord === true;
}

// Check if any word starts with a given prefix
function startsWith(prefix) {
    let node = trie;
    for (let char of prefix) {
        if (!node[char]) {
            return false;
        }
        node = node[char];
    }
    return true;
}

// Usage
insert('apple');
insert('app');
console.log(search('apple')); // true
console.log(search('app')); // true
console.log(search('appl')); // false
console.log(startsWith('app')); // true
console.log(startsWith('apl')); // false
