const way1 = function () {
  var Trie = function () {
    this.store = {};
  };

  /**
   * @param {string} word
   * @return {void}
   */
  Trie.prototype.insert = function (word) {
    this.store[word] = word;
  };

  /**
   * @param {string} word
   * @return {boolean}
   */
  Trie.prototype.search = function (word) {
    return !!this.store[word];
  };

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  Trie.prototype.startsWith = function (prefix) {
    const lengthOfPRefix = prefix.length;
    for (const key in this.store) {
      const cutString = key.substring(0, lengthOfPRefix);
      if (cutString === prefix) {
        return true;
      }
    }
    return false;
  };

  /**
   * Your Trie object will be instantiated and called as such:
   * var obj = new Trie()
   * obj.insert(word)
   * var param_2 = obj.search(word)
   * var param_3 = obj.startsWith(prefix)
   */
  const trie = new Trie();
  trie.insert('apple');
  console.log(trie.search('apple')); // return True
  console.log(trie.search('app')); // return False
  console.log(trie.startsWith('app')); // return True
  trie.insert('app');
  console.log(trie.search('app'));
};
const way2 = function () {
  var Trie = function () {
    this.store = {};
  };

  /**
   * @param {string} word
   * @return {void}
   */
  Trie.prototype.insert = function (word) {
    this.store[word] = word;
  };

  /**
   * @param {string} word
   * @return {boolean}
   */
  Trie.prototype.search = function (word) {
    return !!this.store[word];
  };

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  Trie.prototype.startsWith = function (prefix) {
    for (const key in this.store) {
      const indexOf = key.indexOf(prefix);
      if (indexOf === 0) {
        return true;
      }
    }
    return false;
  };

  /**
   * Your Trie object will be instantiated and called as such:
   * var obj = new Trie()
   * obj.insert(word)
   * var param_2 = obj.search(word)
   * var param_3 = obj.startsWith(prefix)
   */
  const trie = new Trie();
  trie.insert('apple');
  console.log(trie.search('apple')); // return True
  console.log(trie.search('app')); // return False
  console.log(trie.startsWith('app')); // return True
  trie.insert('app');
  console.log(trie.search('app'));
};
var Trie = function () {
  this.store = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  this.store[word] = word;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  return !!this.store[word];
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  for (const key in this.store) {
    if (key.startsWith(prefix)) {
      return true;
    }
  }
  return false;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
const trie = new Trie();
trie.insert('apple');
console.log(trie.search('apple')); // return True
console.log(trie.search('app')); // return False
console.log(trie.startsWith('app')); // return True
trie.insert('app');
console.log(trie.search('app'));
