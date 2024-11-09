function getIndexesForZero(array) {
  const arr = [];
  for (let rowIndex = 0; rowIndex < array.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < array[rowIndex].length; columnIndex++) {
      if (!array[rowIndex][columnIndex]) {
        arr.push([rowIndex, columnIndex]);
      }
    }
  }
  return arr;
}

function updateRow(array, rowIndex) {
  array[rowIndex].forEach((value, index, arr) => (arr[index] = 0));
}

function updateColumn(array, columnIndex) {
  for (let index = 0; index < array.length; index++) {
    array[index][columnIndex] = 0;
  }
}

var setZeroes = function (array) {
  const indexesForZero = getIndexesForZero(array);
  for (const [rowIndex, columnIndex] of indexesForZero) {
    updateRow(array, rowIndex);
    updateColumn(array, columnIndex);
  }
};

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ])
);
console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
  ])
);
