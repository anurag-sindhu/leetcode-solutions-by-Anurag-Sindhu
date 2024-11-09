var longestPrefix1 = function (str) {
  const prefixConfig = {};
  const suffixConfig = {};
  let maxLength = ``;

  for (let index = 1; index < str.length; index++) {
    let temp = ``;
    for (let childIndex = 0; childIndex < index; childIndex++) {
      temp += str[childIndex];
    }
    prefixConfig[temp] = true;
  }
  for (let index = 1; index < str.length; index++) {
    let temp = ``;
    for (let childIndex = str.length - index; childIndex < str.length; childIndex++) {
      temp += str[childIndex];
    }
    suffixConfig[temp] = true;
  }

  for (const key in prefixConfig) {
    if (suffixConfig[key] && maxLength.length < key.length) {
      maxLength = key;
    }
  }
  return maxLength;
};

var longestPrefix = function (str) {
  let maxLength = ``;
  let left = ``;
  let right = ``;

  for (let index = 1; index < str.length; index++) {
    left = left + str[index - 1];
    right = str[str.length - index] + right;
    if (left === right && maxLength.length < left.length) {
      maxLength = right;
    }
  }
  return maxLength;
};

console.log(longestPrefix((s = 'level')));
console.log(longestPrefix((s = 'ababab')));
console.log(longestPrefix((s = 'anurag')));
