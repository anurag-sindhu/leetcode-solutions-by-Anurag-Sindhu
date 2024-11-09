var rotate = function (matrix) {
  for (let rowIndex = matrix.length - 1; rowIndex >= parseInt(matrix.length / 2); rowIndex--) {
    const storage = matrix[rowIndex];
    matrix[rowIndex] = matrix[matrix.length - 1 - rowIndex];
    matrix[matrix.length - 1 - rowIndex] = storage;
  }

  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    for (let columnIndex = rowIndex; columnIndex < matrix[rowIndex].length; columnIndex++) {
      const storage = matrix[rowIndex][columnIndex];
      matrix[rowIndex][columnIndex] = matrix[columnIndex][rowIndex];
      matrix[columnIndex][rowIndex] = storage;
    }
  }
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);

console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
  ])
);
