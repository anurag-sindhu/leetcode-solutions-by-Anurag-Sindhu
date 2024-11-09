var maximalSquare = function (matrix) {
  let count = 0;
  let tempMax = 0;
  const newMatrix = [];
  for (let column = 0; column < matrix.length; column++) {
    newMatrix[column] = [];
    for (let row = 0; row < matrix[column].length; row++) {
      if (row && column && parseInt(matrix[column][row])) {
        tempMax =
          parseInt(matrix[column][row]) +
          Math.min(
            parseInt(newMatrix[column - 1][row]),
            parseInt(newMatrix[column - 1][row - 1]),
            parseInt(newMatrix[column][row - 1])
          );
        newMatrix[column][row] = tempMax;
        if (count < tempMax) {
          count = tempMax;
        }
      } else {
        newMatrix[column][row] = matrix[column][row];
        if (count < parseInt(matrix[column][row])) {
          count = parseInt(matrix[column][row]);
        }
      }
    }
  }
   return count ** 2;
};
console.log(
  maximalSquare([
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
])
);console.log(
  maximalSquare([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '1', '1', '1'],
    ['0', '1', '1', '1', '1'],
    ['0', '1', '1', '1', '1'],
    ['0', '0', '1', '0', '1']
  ])
);
console.log(
  maximalSquare([
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 1]
  ])
);

console.log(
  maximalSquare([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0']
  ])
);

console.log(
  maximalSquare([
    ['0', '1'],
    ['1', '0']
  ])
);
