const updateMatrix = function (matrix) {
  let newMatrix = [];
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    newMatrix[rowIndex] = [];
    for (let columnIndex = 0; columnIndex < matrix[rowIndex].length; columnIndex++) {
      if (
        matrix[rowIndex][columnIndex] &&
        matrix[rowIndex - 1] &&
        matrix[rowIndex - 1][columnIndex]
      ) {
        newMatrix[rowIndex][columnIndex] =
          matrix[rowIndex][columnIndex] + newMatrix[rowIndex - 1][columnIndex];
      } else {
        newMatrix[rowIndex][columnIndex] = matrix[rowIndex][columnIndex];
      }
    }
  }
  return newMatrix;
};

var largestSubmatrix = function (matrix) {
  const updatedMatrix = updateMatrix(matrix);
  let max = 0;
  for (let rowIndex = 0; rowIndex < updatedMatrix.length; rowIndex++) {
    let longestTruthyColumns = 0;
    updatedMatrix[rowIndex] = updatedMatrix[rowIndex].sort((a, b) => b - a);
    for (let columnIndex = 0; columnIndex < updatedMatrix[rowIndex].length; columnIndex++) {
      if (updatedMatrix[rowIndex][columnIndex - 1] && updatedMatrix[rowIndex][columnIndex]) {
        longestTruthyColumns += 1;
      } else if (updatedMatrix[rowIndex][columnIndex]) {
        longestTruthyColumns = 1;
      } else {
        longestTruthyColumns = updatedMatrix[rowIndex][columnIndex];
      }
      const temp = longestTruthyColumns * updatedMatrix[rowIndex][columnIndex];
      if (max < temp) {
        max = temp;
      }
    }
  }
  return max;
};
console.log(
  largestSubmatrix(
    (matrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 2],
      [0, 1, 2, 3]
    ])
  )
);
console.log(
  largestSubmatrix(
    (matrix = [
      [0, 1, 0, 1, 0],
      [1, 1, 0, 1, 1],
      [1, 1, 1, 0, 1],
      [1, 0, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [0, 1, 0, 1, 1]
    ])
  )
);
console.log(
  largestSubmatrix(
    (matrix = [
      [0, 0, 1],
      [1, 1, 1],
      [1, 0, 1]
    ])
  )
);
console.log(largestSubmatrix((matrix = [[1, 0, 1, 0, 1]])));
console.log(
  largestSubmatrix(
    (matrix = [
      [1, 1, 0],
      [1, 0, 1]
    ])
  )
);
