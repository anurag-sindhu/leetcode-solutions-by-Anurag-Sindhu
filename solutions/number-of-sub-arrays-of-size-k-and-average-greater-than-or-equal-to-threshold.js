var numOfSubarrays = function (array, k, threshold) {
  let firstArrayInitialSum = 0;
  if (k > 1) {
    firstArrayInitialSum = (function () {
      return array.slice(0, k - 1).reduce((accumulator, curr) => accumulator + curr);
    })();
  }
  let count = 0;
  for (let index = k - 1; index < array.length; index++) {
    if (index - k >= 0) {
      firstArrayInitialSum -= array[index - k];
    }
    firstArrayInitialSum += array[index];
    if (firstArrayInitialSum / k >= threshold) {
      count++;
    }
  }
  return count;
};

console.log(numOfSubarrays([1, 1, 1, 1, 1], 1, 0));
console.log(numOfSubarrays((arr = [2, 2, 2, 2, 5, 5, 5, 8]), (k = 3), (threshold = 4)));
console.log(numOfSubarrays((arr = [11, 13, 17, 23, 29, 31, 7, 5, 2, 3]), (k = 3), (threshold = 5)));
