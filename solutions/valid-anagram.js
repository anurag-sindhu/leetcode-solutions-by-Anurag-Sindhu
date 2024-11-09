var isAnagram = function (s, t) {
  const obj = {};
  for (let index = 0; index < s.length; index++) {
    if (!obj[s[index]]) {
      obj[s[index]] = 1;
    } else {
      obj[s[index]] += 1;
    }
  }
  for (let index = 0; index < t.length; index++) {
    if (obj[t[index]] > 0) {
      obj[t[index]] -= 1;
    } else {
      return false;
    }
  }
  let sum = 0;
  for (const key in obj) {
    sum += obj[key];
  }
  return sum ? false : true;
};
console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('ab', 'a'));
