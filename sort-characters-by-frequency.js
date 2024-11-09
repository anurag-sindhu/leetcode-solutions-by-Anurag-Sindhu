var frequencySort = function (s) {
  const obj = {};
  for (let index = 0; index < s.length; index++) {
    if (!obj[s[index]]) {
      obj[s[index]] = 1;
    } else {
      obj[s[index]] += 1;
    }
  }
  const convertedObj = {};
  for (const key in obj) {
    if (convertedObj[obj[key]]) {
      convertedObj[obj[key]][key] = key.repeat(obj[key]);
    } else {
      convertedObj[obj[key]] = { [key]: key.repeat(obj[key]) };
    }
  }
  const keys = Object.keys(convertedObj);
  let str = '';
  for (let index = keys.length - 1; index >= 0; index--) {
    for (const key in convertedObj[keys[index]]) {
      str += convertedObj[keys[index]][key];
    }
  }
  return str;
};

console.log(frequencySort('treeanurag'));
console.log(frequencySort('cccaaa'));
