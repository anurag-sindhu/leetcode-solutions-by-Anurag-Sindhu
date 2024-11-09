var countSquares = function (matrix) {
  let sum = 0;
  let tempMax = 0;
  const newMatrix = [];
  for (let column = 0; column < matrix.length; column++) {
    newMatrix[column] = [];
    for (let row = 0; row < matrix[column].length; row++) {
      if (row && column && parseInt(matrix[column][row])) {
        tempMax =
          parseInt(matrix[column][row]) +
          Math.min(
            newMatrix[column - 1][row],
            newMatrix[column - 1][row - 1],
            newMatrix[column][row - 1]
          );
        newMatrix[column][row] = tempMax;
        sum += tempMax;
      } else {
        tempMax = parseInt(matrix[column][row]);
        newMatrix[column][row] = tempMax;
        sum += tempMax;
      }
    }
  }
  return sum;
};

console.log(
  countSquares([
    [1, 0, 1],
    [1, 1, 0],
    [1, 1, 0]
  ])
);
console.log(
  countSquares([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1]
  ])
);
