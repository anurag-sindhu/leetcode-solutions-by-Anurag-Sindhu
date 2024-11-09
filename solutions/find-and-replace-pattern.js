function isFollowingThePattern(word, pattern) {
  if (word.length !== pattern.length) {
    return false;
  }
  const mappingPatternToWord = {};
  const mappingWordToPattern = {};
  for (let index = 0; index < word.length; index++) {
    const element = word[index];
    if (mappingPatternToWord[pattern[index]] && mappingPatternToWord[pattern[index]] !== element) {
      return false;
    }
    if (mappingWordToPattern[element] && mappingWordToPattern[element] !== pattern[index]) {
      return false;
    }
    mappingPatternToWord[pattern[index]] = element;
    mappingWordToPattern[element] = pattern[index];
  }
  return true;
}

var findAndReplacePattern = function (words, pattern) {
  const output = [];
  for (const word of words) {
    if (isFollowingThePattern(word, pattern)) {
      output.push(word);
    }
  }
  return output;
};
console.log(findAndReplacePattern((words = ['ccc']), (pattern = 'abb')));
console.log(findAndReplacePattern((words = ['dkd']), (pattern = 'abb')));

console.log(findAndReplacePattern((words = ['mee', 'aqq', 'dkd', 'ccc']), (pattern = 'abb')));

console.log(
  findAndReplacePattern((words = ['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc']), (pattern = 'abb'))
);
