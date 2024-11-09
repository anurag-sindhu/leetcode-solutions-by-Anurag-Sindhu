var largeGroupPositions = function (str) {
  const output = [];
  let pointer1 = 0;
  let tempStr = str[pointer1];
  let index = 1;
  for (; index < str.length; index++) {
    if (str[pointer1] === str[index]) {
      tempStr += str[index];
    } else {
      if (tempStr.length >= 3) {
        output.push([pointer1, index - 1]);
      }
      tempStr = str[index];
      pointer1 = index;
    }
  }
  if (tempStr.length >= 3) {
    output.push([pointer1, index - 1]);
  }
  return output;
};

console.log(largeGroupPositions((s = 'aaa')));
console.log(largeGroupPositions((s = 'abcdddeeeeaabbbcd')));
console.log(largeGroupPositions((s = 'abbxxxxzzy')));
console.log(largeGroupPositions((s = 'abc')));
