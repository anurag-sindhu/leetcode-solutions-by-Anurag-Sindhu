var canConstruct = function (ransomNote, magazine) {
  const obj = {};
  for (let index = 0; index < magazine.length; index++) {
    if (!obj[magazine[index]]) {
      obj[magazine[index]] = 1;
    } else {
      obj[magazine[index]] += 1;
    }
  }
  for (let index = 0; index < ransomNote.length; index++) {
    if (obj[ransomNote[index]]) {
      obj[ransomNote[index]] -= 1;
    } else {
      return false;
    }
  }
  return true;
};

console.log(canConstruct((ransomNote = 'a'), (magazine = 'b')));
console.log(canConstruct((ransomNote = 'aa'), (magazine = 'ab')));
console.log(canConstruct((ransomNote = 'aa'), (magazine = 'aab')));
