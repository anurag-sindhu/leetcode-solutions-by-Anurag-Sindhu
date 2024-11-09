var uniquePaths = function (rows, columns) {
  const matrix = [];
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    matrix[rowIndex] = [];
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
      if (!rowIndex || !columnIndex) {
        matrix[rowIndex][columnIndex] = 1;
      } else {
        matrix[rowIndex][columnIndex] =
          matrix[rowIndex - 1][columnIndex] + matrix[rowIndex][columnIndex - 1];
      }
    }
  }
  return matrix[rows - 1][columns - 1];
};
let res;
res = uniquePaths((m = 3), (n = 7));
console.log({ res });
res = uniquePaths((m = 3), (n = 2));
console.log({ res });
