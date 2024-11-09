var rearrangeCharacters = function (str, target) {
  const strConfig = {};
  const targetConfig = {};
  for (let index = 0; index < str.length; index++) {
    if (!strConfig[str[index]]) {
      strConfig[str[index]] = 0;
    }
    strConfig[str[index]] += 1;
  }
  for (let index = 0; index < target.length; index++) {
    if (!targetConfig[target[index]]) {
      targetConfig[target[index]] = 0;
    }
    targetConfig[target[index]] += 1;
  }
  let totalCount = null;
  for (const key in targetConfig) {
    if (!strConfig[key]) {
      return 0;
    }
    const temp = parseInt(strConfig[key] / targetConfig[key]);
    if (totalCount === null) {
      totalCount = temp;
    } else {
      if (temp < totalCount) {
        totalCount = temp;
      }
    }
  }
  return totalCount;
};

console.log(rearrangeCharacters('abc', 'abcd'));
console.log(rearrangeCharacters((s = 'ilovecodingonleetcode'), (target = 'code')));
console.log(rearrangeCharacters((s = 'abcba'), (target = 'abc')));
console.log(rearrangeCharacters((s = 'abbaccaddaeea'), (target = 'aaaaa')));
