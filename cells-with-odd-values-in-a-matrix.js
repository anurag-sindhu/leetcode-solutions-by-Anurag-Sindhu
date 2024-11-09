function createEmptyMatrix(m, n) {
  const arr = [];
  for (let rowIndex = 0; rowIndex < m; rowIndex++) {
    arr[rowIndex] = [];
    for (let columnIndex = 0; columnIndex < n; columnIndex++) {
      arr[rowIndex][columnIndex] = 0;
    }
  }
  return arr;
}

function updateColumn(matrix, columnIndex, m) {
  for (let rowIndex = 0; rowIndex < m; rowIndex++) {
    matrix[rowIndex][columnIndex] += 1;
  }
}

function updateRow(matrix, rowIndex) {
  const arr = matrix[rowIndex];
  for (let index = 0; index < arr.length; index++) {
    arr[index] += 1;
  }
}

function countOdd(matrix, m, n) {
  let count = 0;
  for (let rowIndex = 0; rowIndex < m; rowIndex++) {
    for (let columnIndex = 0; columnIndex < n; columnIndex++) {
      if (matrix[rowIndex][columnIndex] % 2 !== 0) {
        count += 1;
      }
    }
  }
  return count;
}

var oddCells = function (m, n, indices) {
  const matrix = createEmptyMatrix(m, n);
  for (const [rowIndex, columnIndex] of indices) {
    updateRow(matrix, rowIndex);
    updateColumn(matrix, columnIndex, m);
  }
  return countOdd(matrix, m, n);
};

console.log(
  oddCells(
    (m = 2),
    (n = 3),
    (indices = [
      [0, 1],
      [1, 1]
    ])
  )
);
