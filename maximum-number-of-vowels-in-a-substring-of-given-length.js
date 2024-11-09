var maxVowels1 = function (s, k) {
  const vowels = { a: true, e: true, i: true, o: true, u: true };
  const getVowelsCount = (str) => {
    let count = 0;
    for (let index = 0; index < str.length; index++) {
      if (vowels[str[index]]) {
        count += 1;
      }
    }
    return count;
  };
  let vowelsCount = getVowelsCount(s.substring(0, k));
  let max = vowelsCount;
  for (let index = k; index < s.length; index++) {
    if (vowels[s[index - k]]) {
      vowelsCount -= 1;
    }
    if (vowels[s[index]]) {
      vowelsCount += 1;
    }
    if (max < vowelsCount) {
      max = vowelsCount;
    }
  }
  return max;
};

var maxVowels = function (s, k) {
  const vowels = { a: true, e: true, i: true, o: true, u: true };
  let vowelsCount = s
    .substring(0, k)
    .split('')
    .reduce((previousValue, currentValue) => {
      if (vowels[currentValue]) {
        previousValue += 1;
      }
      return previousValue;
    }, 0);
  let max = vowelsCount;
  for (let index = k; index < s.length; index++) {
    if (vowels[s[index - k]]) {
      vowelsCount -= 1;
    }
    if (vowels[s[index]]) {
      vowelsCount += 1;
    }
    if (max < vowelsCount) {
      max = vowelsCount;
    }
  }
  return max;
};
console.log(maxVowels((s = 'leetcode'), (k = 3)));
console.log(maxVowels((s = 'weallloveyou'), (k = 7)));
console.log(maxVowels((s = 'abciiidef'), (k = 3)));
console.log(maxVowels((s = 'aeiou'), (k = 2)));
