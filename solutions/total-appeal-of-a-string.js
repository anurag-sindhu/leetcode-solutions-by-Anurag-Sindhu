function countDistinctCharacters(str) {
  if (!str) {
    return 0;
  }
  if (str.length === 1) {
    return 1;
  }
  const obj = {};
  for (let index = 0; index < str.length; index++) {
    obj[str[index]] = {};
  }
  return Object.keys(obj).length;
}

var appealSum = function (s) {
  let length = s.length;
  let count = 0;
  while (length) {
    for (let index = 0; index + length <= s.length; index++) {
      const toIndex = index + length;
      count += countDistinctCharacters(s.substring(index, toIndex));
    }
    length--;
  }
  return count;
};

console.log(appealSum((s = 'code')));
console.log(appealSum((s = 'abbca')));
