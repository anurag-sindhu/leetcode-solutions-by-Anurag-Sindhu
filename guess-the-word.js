var findSecretWord = function (words, master) {
  let masterPermissibleLimit = 10;
  const wordsObj = {};
  for (const iterator of words) {
    wordsObj[iterator] = {};
    for (let index = 0; index < iterator.length; index++) {
      if (!wordsObj[iterator][iterator[index]]) {
        wordsObj[iterator][iterator[index]] = 0;
      }
      wordsObj[iterator][iterator[index]] += 1;
    }
  }
  while (masterPermissibleLimit--) {
    const masterGuessed = master.guess(words[0]);
    const filteredWord = words.filter(() => true);
  }
};

console.log(
  findSecretWord((words = ['ccbazz', 'eiowzz', 'abcczz', 'acckzz']), {
    guess: (word) => {
      if (word === `acckzz`) {
        return 6;
      }
      if (word === `ccbazz`) {
        return 3;
      }
      if (word === `eiowzz`) {
        return 2;
      }
      if (word === `abcczz`) {
        return 2;
      }
    }
  })
);
