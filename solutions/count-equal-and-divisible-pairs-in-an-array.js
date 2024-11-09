var countPairs = function (array, k) {
  let count = 0;
  for (let index = 0; index < array.length - 1; index++) {
    for (let index2 = index + 1; index2 < array.length; index2++) {
      if (array[index] === array[index2] && (index * index2) % k === 0) {
        count += 1;
      }
    }
  }
  return count;
};

console.log(countPairs((nums = [5, 5, 9, 2, 5, 5, 9, 2, 2, 5, 5, 6, 2, 2, 5, 2, 5, 4, 3]), 7));
console.log(countPairs((nums = [3, 1, 2, 2, 2, 1, 3]), (k = 2)));
console.log(countPairs((nums = [1, 2, 3, 4]), (k = 1)));
