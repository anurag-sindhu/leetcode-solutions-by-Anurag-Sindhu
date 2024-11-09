var uniqueOccurrences = function (arr) {
  const config = {};
  for (const iterator of arr) {
    if (!config[iterator]) {
      config[iterator] = 0;
    }
    config[iterator] += 1;
  }
  const output = [];
  const reverseConfig = {};
  for (const key in config) {
    if (reverseConfig[config[key]]) {
      return false;
    }
    reverseConfig[config[key]] = true;
  }
  return true;
};
console.log(uniqueOccurrences([1, 2]));
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
