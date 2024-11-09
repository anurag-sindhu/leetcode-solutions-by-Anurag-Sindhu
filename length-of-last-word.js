var lengthOfLastWord = function (s) {
  let splittedWords = s.split(' ');
  let max = 0;
  for (const iterator of splittedWords) {
    const len = iterator.length;
    if (len) {
      max = len;
    }
  }
  return max;
};

console.log(lengthOfLastWord('Today is a nice day'));
console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('   fly me   to   the moon  '));
console.log(lengthOfLastWord('luffy is still joyboy'));
