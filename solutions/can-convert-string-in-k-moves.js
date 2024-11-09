var canConvertString = function (str = '', target = '', k) {
  if (str.length !== target.length) {
    return false;
  }
  const config = {};
  for (let index = 0; index < str.length; index++) {
    const diff = target.charCodeAt(index) - str.charCodeAt(index);

    if (diff === 0) {
      continue;
    }
    if (diff > k) {
      return false;
    }
    if (diff < 0) {
      const temp = 26 + diff;
      if (temp > k) {
        return false;
      }
      if (!config[temp]) {
        config[temp] = 0;
      }
      config[temp] += 1;
    } else {
      if (!config[diff]) {
        config[diff] = 0;
      }
      config[diff] += 1;
    }
  }
  for (const key in config) {
    if (config[key] > 1) {
      const temp = (config[key] - 1) * 26 + Number(key);
      if (k < temp) {
        return false;
      }
    }
  }
  return true;
};

console.log(canConvertString((s = 'aab'), (t = 'bbb'), (k = 27)));
console.log(canConvertString('atmtxzjkz', 'tvbtjhvjd', 35));
console.log(canConvertString((s = 'abc'), (t = 'bcd'), (k = 10)));
console.log(canConvertString((s = 'input'), (t = 'ouput'), (k = 9)));
