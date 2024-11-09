var kthSmallestPrimeFraction = function (arr, k) {
  let pointers = [];
  let totalLessCount = [];
  let totalLessCountValue = [];
  for (let index = 0; index < arr.length - 1; index++) {
    totalLessCount[index] = [];
    totalLessCountValue[index] = [];
    pointers[index] = 0;
    for (let index1 = arr.length - 1; index < index1; index1--) {
      totalLessCount[index].push(`${arr[index]}/${arr[index1]}`);
      totalLessCountValue[index].push(arr[index] / arr[index1]);
    }
  }
  let rowIndex, columnIndex, minPointerIndex;
  while (k--) {
    let min = Infinity;
    for (let index = 0; index < pointers.length; index++) {
      if (min > totalLessCountValue[index][pointers[index]]) {
        min = totalLessCountValue[index][pointers[index]];
        rowIndex = index;
        columnIndex = pointers[index];
        minPointerIndex = index;
      }
    }
    pointers[minPointerIndex] += 1;
  }
  const split = totalLessCount[rowIndex][columnIndex].split(`/`);
  return [split[0], split[1]];
};

console.log(kthSmallestPrimeFraction((arr = [1, 2, 3, 5]), (k = 3)));
console.log(kthSmallestPrimeFraction((arr = [1, 7]), (k = 1)));
