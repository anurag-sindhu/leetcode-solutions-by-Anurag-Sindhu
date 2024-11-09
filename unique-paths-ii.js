var uniquePathsWithObstacles = function (matrix) {
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < matrix[rowIndex].length; columnIndex++) {
      if (matrix[rowIndex][columnIndex] === 1) {
        matrix[rowIndex][columnIndex] = 0;
      } else {
        if (!rowIndex && !columnIndex) {
          matrix[rowIndex][columnIndex] = 1;
        } else if (!rowIndex) {
          matrix[rowIndex][columnIndex] = matrix[rowIndex][columnIndex - 1];
        } else if (!columnIndex) {
          matrix[rowIndex][columnIndex] = matrix[rowIndex - 1][columnIndex];
        } else {
          matrix[rowIndex][columnIndex] =
            matrix[rowIndex - 1][columnIndex] + matrix[rowIndex][columnIndex - 1];
        }
      }
    }
  }
  return matrix[matrix.length - 1][matrix[0].length - 1];
};
let res;
res = uniquePathsWithObstacles([[1, 0]]);
console.log({ res });
res = uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]);
console.log({ res });
res = uniquePathsWithObstacles([
  [0, 1],
  [0, 0]
]);
console.log({ res });
