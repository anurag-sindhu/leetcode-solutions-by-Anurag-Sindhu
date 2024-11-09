var findSpecialInteger = function (arr) {
  const twentyFivePercentLimit = arr.length * 0.25;
  const frequencyObject = {};
  for (const iterator of arr) {
    if (!frequencyObject[iterator]) {
      frequencyObject[iterator] = 0;
    }
    frequencyObject[iterator] += 1;
    if (frequencyObject[iterator] > twentyFivePercentLimit) {
      return iterator;
    }
  }
};

console.log(findSpecialInteger((arr = [1, 2, 2, 6, 6, 6, 6, 7, 10])));
console.log(findSpecialInteger((arr = [1, 1])));
