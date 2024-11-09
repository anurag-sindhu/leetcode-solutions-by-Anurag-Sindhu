var minSetSize = function (arr) {
  const halfSize = arr.length / 2;
  const obj = {};
  for (const iterator of arr) {
    if (!obj[iterator]) {
      obj[iterator] = 1;
    } else {
      obj[iterator] += 1;
    }
  }
  let finalCount = 0;
  let count = 0;
  const values = Object.values(obj).sort((a, b) => b - a);
  for (const iterator of values) {
    count += iterator;
    finalCount += 1;
    if (count >= halfSize) {
      return finalCount;
    }
  }
};
console.log(minSetSize([1, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 6]));
console.log(minSetSize([7, 7, 7, 7, 7, 7]));
console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]));
