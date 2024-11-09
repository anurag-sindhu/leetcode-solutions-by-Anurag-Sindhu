var wordPattern = function (pattern, s) {
  const splittedString = s.split(' ');
  if (pattern.length !== splittedString.length) {
    return false;
  }
  const obj = {};
  const obj1 = {};
  for (let index = 0; index < splittedString.length; index++) {
    if (!obj[splittedString[index]] && !obj1[pattern[index]]) {
      obj[splittedString[index]] = pattern[index];
      obj1[pattern[index]] = splittedString[index];
    } else {
      if (obj[splittedString[index]] !== pattern[index]) {
        return false;
      }
    }
  }
  return true;
};

console.log(wordPattern('abba', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog cat cat fish'));
console.log(wordPattern('aaaa', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog dog dog dog'));
