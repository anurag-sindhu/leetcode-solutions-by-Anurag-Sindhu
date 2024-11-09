var findTheDifference = function (s, t) {
  const objS = {};
  const objT = {};
  for (let index = 0; index < s.length; index++) {
    if (!objS[s[index]]) {
      objS[s[index]] = 1;
    } else {
      objS[s[index]] += 1;
    }
  }
  for (let index = 0; index < t.length; index++) {
    if (!objT[t[index]]) {
      objT[t[index]] = 1;
    } else {
      objT[t[index]] += 1;
    }
  }
  for (const key in objT) {
    if (!objS[key] || objT[key] !== objS[key]) {
      return key;
    }
  }
};
console.log(findTheDifference('a', 'aa'));
console.log(findTheDifference((s = 'abcd'), (t = 'abcde')));
console.log(findTheDifference((s = ''), (t = 'y')));
