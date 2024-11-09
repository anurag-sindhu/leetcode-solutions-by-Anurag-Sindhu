function getFrequency(nums) {
  const freq = {};
  for (const iterator of nums) {
    if (!freq[iterator]) {
      freq[iterator] = 0;
    }
    freq[iterator] += 1;
  }
  return freq;
}

var numberOfPairs = function (nums) {
  let pairs = 0;
  let leftOver = 0;
  const getFrequencyObject = getFrequency(nums);
  for (const key in getFrequencyObject) {
    pairs += parseInt(getFrequencyObject[key] / 2);
    leftOver += getFrequencyObject[key] % 2;
  }
  return [pairs, leftOver];
};

console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2]));
console.log(numberOfPairs([1, 1]));
console.log(numberOfPairs([0]));
