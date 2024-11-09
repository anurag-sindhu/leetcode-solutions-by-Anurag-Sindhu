var findSubstring = function (array, words) {
  const output = [];
  const wordsObject = {};
  let wordsLength = 0;
  for (const iterator of words) {
    if (wordsObject[iterator]) {
      wordsObject[iterator] += 1;
    } else {
      wordsObject[iterator] = 1;
    }
    wordsLength = iterator.length;
  }
  const isCorrect = (str) => {
    const tempObject = {};
    for (let index = 0; index < str.length; index += wordsLength) {
      const stringSub = str.substring(index, index + wordsLength);
      if (tempObject[stringSub]) {
        tempObject[stringSub] += 1;
      } else {
        tempObject[stringSub] = 1;
      }
    }
    for (const key in wordsObject) {
      if (tempObject[key] !== wordsObject[key]) {
        return false;
      }
    }
    return true;
  };
  for (let index = 0; index < array.length; index++) {
    const stringSub = array.substring(index, index + wordsLength);
    if (wordsObject[stringSub]) {
      if (isCorrect(array.substring(index, index + wordsLength * words.length))) {
        output.push(index);
      }
    }
  }
  return output;
};
console.log(
  findSubstring((s = 'wordgoodgoodgoodbestword'), (words = ['word', 'good', 'best', 'word']))
);
console.log(findSubstring((s = 'barfoothefoobarman'), (words = ['foo', 'bar'])));
console.log(findSubstring((s = 'barfoofoobarthefoobarman'), (words = ['bar', 'foo', 'the'])));
