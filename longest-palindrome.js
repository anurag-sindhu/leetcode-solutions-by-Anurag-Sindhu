var longestPalindrome = function (s) {
  if (!s) {
    return 0;
  }
  if (s.length === 1) {
    return 1;
  }
  const config = {};
  for (const iterator of s) {
    if (!config[iterator]) {
      config[iterator] = 0;
    }
    config[iterator] += 1;
  }
  let count = 0;
  let specialCount = 0;
  for (const key in config) {
    if (config[key] % 2 === 0) {
      count += config[key];
    } else {
      if (config[key] > 1) {
        count += config[key] - 1;
      }
      specialCount = 1;
    }
  }
  return count + specialCount;
};

console.log(longestPalindrome('ccc'));
console.log(longestPalindrome(`abccccdd`));
console.log(longestPalindrome(`a`));
