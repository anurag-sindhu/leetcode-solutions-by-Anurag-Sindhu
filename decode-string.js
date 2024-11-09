function findStringInBetweenAndEndIndex(restString) {
  const bracketsArray = [`[`];
  for (let index = 1; index < restString.length; index++) {
    if (restString[index] === `]`) {
      if (!bracketsArray.length) {
        return { string: restString.substring(1, index), updatedIndex: index };
      } else {
        bracketsArray.pop();
        if (!bracketsArray.length) {
          return { string: restString.substring(1, index), updatedIndex: index };
        }
      }
    } else if (restString[index] === `[`) {
      bracketsArray.push(`[`);
    }
  }
}

function getCompleteNumericNumber(str, fromIndex) {
  let num = ``;
  for (let index = fromIndex; index < str.length; index++) {
    if (!isNaN(str[index])) {
      num += str[index];
    } else {
      return { repeatMultiplier: Number(num), updatedNumericIndex: index };
    }
  }
}

var decodeString = function (str = '') {
  let out = '';
  for (let index = 0; index < str.length; index++) {
    if (!isNaN(str[index])) {
      const { repeatMultiplier, updatedNumericIndex } = getCompleteNumericNumber(str, index);
      index = updatedNumericIndex;
      const resp = findStringInBetweenAndEndIndex(str.substring(index));
      const { string, updatedIndex } = resp;
      index += updatedIndex;
      const resolveBrackets = decodeString(string);
      out += resolveBrackets.repeat(repeatMultiplier);
    } else {
      out += str[index];
    }
  }
  return out;
};
let res = null;
res = decodeString('2[abc]3[cd]ef');
console.log(res);
res = decodeString('100[l]');
console.log(res);
res = decodeString('100[leetcode]');
console.log(res);
res = decodeString('3[a2[c]]');
console.log(res);
res = decodeString('1[a2[c]]');
console.log(res);

res = decodeString('3[a]2[bc]');
console.log(res);
