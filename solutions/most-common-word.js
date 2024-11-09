var mostCommonWord = function (paragraph, banned) {
  const splittedParagraph = [];
  const lowerCaseBannedObj = {};
  for (const iterator of banned) {
    lowerCaseBannedObj[iterator.toLowerCase()] = iterator;
  }
  let temp = ``;
  for (let index = 0; index < paragraph.length; index++) {
    if (
      (paragraph.charCodeAt(index) >= 97 && paragraph.charCodeAt(index) <= 122) ||
      (paragraph.charCodeAt(index) >= 65 && paragraph.charCodeAt(index) <= 90)
    ) {
      temp += paragraph[index].toLowerCase();
    } else {
      if (temp.length) {
        splittedParagraph.push(temp);
        temp = ``;
      }
    }
  }
  if (temp.length) {
    splittedParagraph.push(temp);
  }
  const config = {};
  for (let index = 0; index < splittedParagraph.length; index++) {
    const tempWord = splittedParagraph[index].toLowerCase();
    if (!lowerCaseBannedObj[tempWord]) {
      if (!config[tempWord]) {
        config[tempWord] = 0;
      }
      config[tempWord] += 1;
    }
  }
  let highestNumber = 0;
  let highestNumberWord = 0;
  for (const key in config) {
    if (config[key] > highestNumber) {
      highestNumber = config[key];
      highestNumberWord = key;
    }
  }
  return highestNumberWord;
};

console.log(mostCommonWord((paragraph = 'Bob'), (banned = ['hit'])));

console.log(
  mostCommonWord(
    (paragraph = 'Bob hit a ball, the hit BALL flew far after it was hit.'),
    (banned = ['hit'])
  )
);
