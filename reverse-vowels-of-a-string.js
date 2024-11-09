const isVowel = (word) => {
  if (
    word === 'A' ||
    word === 'E' ||
    word === 'I' ||
    word === 'O' ||
    word === 'U' ||
    word === 'a' ||
    word === 'e' ||
    word === 'i' ||
    word === 'o' ||
    word === 'u'
  ) {
    return true;
  }
  return false;
};

var reverseVowels = function (str) {
  const tempArray = str.split('');
  let startIndex = 0;
  let store = null;
  let endIndex = tempArray.length - 1;
  while (startIndex < endIndex) {
    while (!isVowel(tempArray[startIndex]) && startIndex < endIndex) {
      startIndex++;
    }
    while (!isVowel(tempArray[endIndex]) && startIndex < endIndex) {
      endIndex--;
    }
    if (startIndex >= endIndex) {
      return tempArray.join('');
    }
    store = tempArray[startIndex];
    tempArray[startIndex] = tempArray[endIndex];
    tempArray[endIndex] = store;
    endIndex--;
    startIndex++;
  }
  return tempArray.join('');
};

console.log(reverseVowels('hello'));
console.log(reverseVowels('leetcode'));
