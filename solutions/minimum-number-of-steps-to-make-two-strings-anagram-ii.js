const getFrequencyObject = (str) => {
  let obj = {};
  for (let index = 0; index < str.length; index++) {
    if (!obj[str[index]]) {
      obj[str[index]] = 0;
    }
    obj[str[index]] += 1;
  }
  return obj;
};
var minSteps = function (s, t) {
  const sFrequencyObject = getFrequencyObject(s);
  const tFrequencyObject = getFrequencyObject(t);
  let sum = 0;
  for (const key in sFrequencyObject) {
    if (sFrequencyObject[key] === tFrequencyObject[key]) {
      sFrequencyObject[key] = undefined;
      tFrequencyObject[key] = undefined;
    } else if (tFrequencyObject[key]) {
      tFrequencyObject[key] = Math.abs(tFrequencyObject[key] - sFrequencyObject[key]);
      sFrequencyObject[key] = undefined;
    }
  }
  for (const key in sFrequencyObject) {
    if (sFrequencyObject[key]) {
      sum += sFrequencyObject[key];
    }
  }
  for (const key in tFrequencyObject) {
    if (tFrequencyObject[key]) {
      sum += tFrequencyObject[key];
    }
  }
  return sum;
};
console.log(minSteps((s = 'leetcode'), (t = 'coatslll')));
console.log(minSteps((s = 'leetcode'), (t = 'coats')));
console.log(minSteps((s = 'night'), (t = 'thing')));
