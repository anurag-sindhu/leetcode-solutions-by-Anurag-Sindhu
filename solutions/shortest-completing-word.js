var getWordConfig = function (word) {
  const wordsConfig = {};
  for (let index = 0; index < word.length; index++) {
    if (
      (word.charCodeAt(index) >= 97 && word.charCodeAt(index) <= 122) ||
      (word.charCodeAt(index) >= 65 && word.charCodeAt(index) <= 90)
    ) {
      const character = word[index].toLowerCase();
      if (!wordsConfig[character]) {
        wordsConfig[character] = 0;
      }
      wordsConfig[character] += 1;
    }
  }
  return wordsConfig;
};

var shortestCompletingWord = function (licensePlate, words) {
  const licensePlateConfig = getWordConfig(licensePlate);
  const wordsConfig = {};
  for (let index = 0; index < words.length; index++) {
    wordsConfig[words[index]] = getWordConfig(words[index]);
  }
  const output = [];
  let doesExist = true;
  for (const word in wordsConfig) {
    doesExist = true;
    for (const chars in licensePlateConfig) {
      if (!(licensePlateConfig[chars] <= wordsConfig[word][chars])) {
        doesExist = false;
        break;
      }
    }
    if (doesExist) {
      output.push(word);
    }
  }
  let finalOutput = null;
  for (const iterator of output) {
    if (finalOutput === null) {
      finalOutput = iterator;
    } else {
      if (iterator.length < finalOutput.length) {
        finalOutput = iterator;
      }
    }
  }
  return finalOutput;
};

console.log(
  shortestCompletingWord('GrC8950', [
    'measure',
    'other',
    'every',
    'base',
    'according',
    'level',
    'meeting',
    'none',
    'marriage',
    'rest'
  ])
);

console.log(
  shortestCompletingWord((licensePlate = '1s3 456'), (words = ['looks', 'pest', 'stew', 'show']))
);

console.log(
  shortestCompletingWord(
    (licensePlate = '1s3 PSt'),
    (words = ['step', 'steps', 'stripe', 'stepple'])
  )
);
