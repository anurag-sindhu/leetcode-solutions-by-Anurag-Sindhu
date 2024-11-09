var countPrefixes = function (words, s) {
  const obj = {};
  let temp = ``;
  for (let index = 0; index < s.length; index++) {
    temp += s[index];
    obj[temp] = true;
  }
  let count = 0;
  for (const word of words) {
    if (obj[word]) {
      count++;
    }
  }
  return count;
};

console.log(countPrefixes((words = ['a', 'b', 'c', 'ab', 'bc', 'abc']), (s = 'abc')));
console.log(countPrefixes((words = ['a', 'a']), (s = 'aa')));
