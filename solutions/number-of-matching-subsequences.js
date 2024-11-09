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

var numMatchingSubseq = function (array, words) {
  let count = 0;
  const filterSameStringWithFrequency = (function () {
    const config = {};
    for (const iterator of words) {
      if (!config[iterator]) {
        config[iterator] = 0;
      }
      config[iterator] += 1;
    }
    return config;
  })();
  for (const iterator of Object.keys(filterSameStringWithFrequency)) {
    let tempCheck = isSubsequence(iterator, array);
    if (tempCheck) {
      count += filterSameStringWithFrequency[iterator];
    }
  }
  return count;
};

console.log(numMatchingSubseq((s = 'abcde'), (words = ['a', 'bb', 'acd', 'ace'])));
console.log(
  numMatchingSubseq((s = 'dsahjpjauf'), (words = ['ahjpjau', 'ja', 'ahbwzgqnuk', 'tnmlanowax']))
);
