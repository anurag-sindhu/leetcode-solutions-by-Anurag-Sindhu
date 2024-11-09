var maxProfit = function (array) {
  const obj = {};
  for (let index = 0; index < array.length; index++) {
    if ((array[index - 1] || array[index - 1] === 0) && array[index] > array[index - 1]) {
      obj[index] = array[index] - array[index - 1] + obj[index - 1];
    } else {
      obj[index] = 0;
    }
  }
  let max = 0;
  let tempMax = 0;
  for (const key in obj) {
    const value = obj[key];
    if (tempMax < value) {
      tempMax = value;
    } else {
      max += tempMax;
      tempMax = 0;
    }
  }
  return max + tempMax;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([2, 1, 2, 0, 1]) === 2);
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
