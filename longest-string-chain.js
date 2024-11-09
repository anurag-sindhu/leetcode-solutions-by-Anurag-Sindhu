var isSubsequence = function (s, t) {
  let tIndex = 0;
  const verify = [];
  for (let index = 0; index < s.length; index++) {
    if (tIndex < t.length) {
      const ff = () => {
        if (tIndex < t.length) {
          if (t[tIndex] === s[index]) {
            verify.push(t[tIndex]);
            tIndex += 1;
            return;
          } else {
            tIndex += 1;
            return ff();
          }
        } else {
          return false;
        }
      };
      ff();
    } else {
      return false;
    }
  }
  return verify.length === s.length ? true : false;
};

var longestStrChain = function (words) {
  let max = 0;
  const distributionAsPerLength = (function () {
    const count = {};
    for (const iterator of words) {
      if (!count[iterator.length]) {
        count[iterator.length] = {};
      }
      count[iterator.length][iterator] = true;
    }
    return count;
  })();

  const start = function () {
    for (const length in distributionAsPerLength) {
      function searchAsPerLength(len, character, cnt) {
        if (distributionAsPerLength[len]) {
          for (const word in distributionAsPerLength[len]) {
            if (isSubsequence(character, word)) {
              searchAsPerLength(word.length + 1, word, cnt + 1);
            } else {
              if (cnt > max) {
                max = cnt;
              }
            }
          }
        } else {
          if (cnt > max) {
            max = cnt;
          }
        }
      }
      searchAsPerLength(length, ``, 0);
    }
  };
  start();
  return max;
};

console.log(longestStrChain((words = ['a', 'b', 'ba', 'bca', 'bda', 'bdca'])));
console.log(longestStrChain((words = ['xbc', 'pcxbcf', 'xb', 'cxbc', 'pcxbc'])));
console.log(longestStrChain((words = ['abcd', 'dbqca'])));
