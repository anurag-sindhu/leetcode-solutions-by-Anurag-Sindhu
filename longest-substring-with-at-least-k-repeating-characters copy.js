var longestSubstring = function (s, k) {
  const frequency = (function () {
    const config = {};
    for (let index = 0; index < s.length; index++) {
      if (!config[s[index]]) {
        config[s[index]] = 0;
      }
      config[s[index]] += 1;
    }
    return config;
  })();
  let startIndex = null;
  let endIndex = null;
  for (let index = 0; index < s.length; index++) {
    if (frequency[s[index]] >= k) {
      startIndex = index;
      break;
    }
  }
  let wordsSelected = {};
  const decreaseConfig = {};
  for (let index = s.length - 1; index >= 0; index--) {
    if (frequency[s[index]] - (decreaseConfig[s[index]] || 0) >= k) {
      if (!wordsSelected[s[index]]) {
        wordsSelected[s[index]] = 0;
      }
      wordsSelected[s[index]] += 1;
      if (endIndex === null) {
        endIndex = index;
      }
    } else if (
      endIndex !== null &&
      !wordsSelected[s[index]] &&
      !(frequency[s[index]] - (decreaseConfig[s[index]] || 0) >= k)
    ) {
      wordsSelected = {};
      endIndex = null;
    }
    if (!decreaseConfig[s[index]]) {
      decreaseConfig[s[index]] = 0;
    }
    decreaseConfig[s[index]] += 1;
  }
  if (startIndex === null || endIndex === null) {
    return 0;
  }
  let res = s.slice(startIndex, endIndex + 1);
  return res.length;
};

console.log(longestSubstring((s = 'bbaaacbd'), (k = 3)));
console.log(longestSubstring((s = 'ababbc'), (k = 2)));
console.log(longestSubstring((s = 'ababacb'), (k = 3)));
console.log(longestSubstring((s = 'aaabb'), (k = 3)));
console.log(longestSubstring((s = 'weitong'), (k = 2)));
