var countSegments = function (s) {
  let count = 0;
  s = s.trim();
  if (s.length) {
    count = 1;
    for (let index = 0; index < s.length; index++) {
      if (s[index] === ' ' && s[index + 1] !== ' ') {
        count += 1;
      }
    }
  }
  return count;
};
console.log(countSegments(', , , ,        a, eaefa'));
console.log(countSegments('                '));
console.log(countSegments(''));
console.log(countSegments('Hello, my name is John'));
console.log(countSegments('Hello'));
