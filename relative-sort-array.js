function getFrequency(arr) {
  const config = {};
  for (const iterator of arr) {
    if (!config[iterator]) {
      config[iterator] = 0;
    }
    config[iterator] += 1;
  }
  return config;
}
var relativeSortArray = function (arr1, arr2) {
  const output = [];
  const frequency = getFrequency(arr1);
  for (const iterator of arr2) {
    while (frequency[iterator]--) {
      output.push(iterator);
    }
  }
  for (const key in frequency) {
    if (frequency[key] > 0) {
      while (frequency[key]--) {
        output.push(Number(key));
      }
    }
  }
  return output;
};

console.log(
  relativeSortArray((arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19]), (arr2 = [2, 1, 4, 3, 9, 6]))
);
