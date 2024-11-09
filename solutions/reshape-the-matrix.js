var matrixReshape = function (array, row, column) {
  const singleDimensionalMatrix = [];
  for (let rowIndex = 0; rowIndex < array.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < array[rowIndex].length; columnIndex++) {
      singleDimensionalMatrix.push(array[rowIndex][columnIndex]);
    }
  }
  if (row * column !== singleDimensionalMatrix.length) {
    return array;
  }
  let singleDimensionalMatrixIndex = 0;
  const finalMatrix = [];
  for (let rowIndex = 0; rowIndex < row; rowIndex++) {
    finalMatrix[rowIndex] = [];
    for (let columnIndex = 0; columnIndex < column; columnIndex++) {
      finalMatrix[rowIndex][columnIndex] = singleDimensionalMatrix[singleDimensionalMatrixIndex++];
    }
  }
  return finalMatrix;
};

console.log(matrixReshape([[1, 2, 3, 4]], 2, 2));

console.log(
  matrixReshape(
    (mat = [
      [1, 2],
      [3, 4]
    ]),
    (r = 1),
    (c = 4)
  )
);
console.log(
  matrixReshape(
    (mat = [
      [1, 2],
      [3, 4]
    ]),
    (r = 2),
    (c = 4)
  )
);
