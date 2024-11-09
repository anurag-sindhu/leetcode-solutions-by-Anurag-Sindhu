var wordBreakHelper = function (string, wordDictObject) {
  if (!string) {
    return true;
  }
  let tempStr = '';
  for (let index = 0; index < string.length; index++) {
    tempStr += string[index];
    if (wordDictObject[tempStr]) {
      const tempString = string.substring(index + 1);
      const res = wordBreakHelper(tempString, wordDictObject);
      if (res) {
        return res;
      }
    }
  }
  return false;
};

var wordBreak = function (string, wordDict, wordDictObject = null) {
  const dp = { [string.length]: true };
  if (!wordDictObject) {
    wordDictObject = (function () {
      const obj = {};
      for (let index = 0; index < wordDict.length; index++) {
        obj[wordDict[index]] = wordDict[index];
      }
      return obj;
    })();
  }

  let str = '';
  for (let index = string.length - 1; index >= 0; index--) {
    str = string[index] + str;
    if (wordDictObject[str]) {
      const tempSubstring = string.substring(0, index);
      dp[index] = dp[index + str.length] && wordBreak(tempSubstring, wordDict, wordDictObject);
      str = '';
    } else {
      dp[index] = false;
    }
  }

  return dp[0];
};

console.log(wordBreak('aaaaaaa', ['aaaa', 'aaa']));
console.log(wordBreak('applepenapple', ['apple', 'pen']));
console.log(wordBreak('leetcode', ['leet', 'code']));
console.log(
  wordBreak(
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
    ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa']
  )
);
console.log(wordBreak('applepenapple', ['apple', 'applepe', 'napple']));
console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));
console.log(wordBreak('ab', ['a', 'b']));
console.log(wordBreak('cars', ['car', 'ca', 'rs']));
console.log(wordBreak('leetcode', ['let', 'code']));
