var reverseString = function (s) {
  let saver = '';
  for (let index = 0; index < Math.floor(s.length / 2); index++) {
    saver = s[s.length - 1 - index];
    s[s.length - 1 - index] = s[index];
    s[index] = saver;
  }
  return s;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
//olleh
