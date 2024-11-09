var firstUniqChar = function (s) {
  const obj = {};
  const ord = [];
  for (let index = 0; index < s.length; index++) {
    if (!obj[s[index]]) {
      ord.push(s[index]);
      obj[s[index]] = { count: 1, index };
    } else {
      obj[s[index]].count += 1;
    }
  }
  for (const iterator of ord) {
    if (obj[iterator].count === 1) {
      return obj[iterator].index;
    }
  }
  return -1;
};
console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aabb'));
