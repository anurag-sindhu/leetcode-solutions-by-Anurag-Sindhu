var longestCommonPrefix = function (strs) {
  const words = [];
  let tempWord = [];
  let smallestLength = 0;
  for (const iterator of strs) {
    if (!iterator.length) {
      return ``;
    }
    tempWord = [];
    if (!smallestLength || smallestLength > iterator.length) {
      smallestLength = iterator.length;
    }
    for (let index = 0; index < iterator.length; index++) {
      tempWord.push(iterator[index]);
    }
    words.push(tempWord);
  }

  let prefix = '';
  let tempWord2 = '';
  for (let index = 0; index < smallestLength; index++) {
    tempWord2 = '';
    if (words.length) {
      for (const iterator of words) {
        if (!tempWord2) {
          tempWord2 = iterator[index];
        }
        if (iterator[index] !== tempWord2) {
          return prefix;
        }
      }
      prefix += tempWord2;
    } else {
      return '';
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(['', 'b']));
console.log(longestCommonPrefix(['']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
