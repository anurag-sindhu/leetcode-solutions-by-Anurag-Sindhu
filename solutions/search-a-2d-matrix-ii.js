function isAvailableInRow(matrix, rowIndex, columnIndex, target) {
  for (const iterator of matrix[rowIndex]) {
    if (iterator === target) {
      return true;
    }
  }
  return false;
}
function isAvailableInColumn(matrix, rowIndex, columnIndex, target) {
  for (const iterator of matrix) {
    if (iterator[columnIndex] === target) {
      return true;
    }
  }
  return false;
}

var searchMatrix = function (matrix, target) {
  let rowIndex = 0;
  let columnIndex = 0;
  while (
    matrix[rowIndex] &&
    (matrix[rowIndex][columnIndex] || matrix[rowIndex][columnIndex] === 0)
  ) {
    const pivot = matrix[rowIndex][columnIndex];
    const lastElementOfRow = matrix[rowIndex][matrix[rowIndex].length - 1];
    const lastElementOfColumn = matrix[matrix.length - 1][columnIndex];
    if (target === pivot) {
      return true;
    }
    if (target < pivot) {
      return false;
    }
    if (target <= lastElementOfRow) {
      if (isAvailableInRow(matrix, rowIndex, columnIndex, target)) {
        return true;
      }
    }
    if (target <= lastElementOfColumn) {
      if (isAvailableInColumn(matrix, rowIndex, columnIndex, target)) {
        return true;
      }
    }

    rowIndex++;
    columnIndex++;
  }
  return false;
};
console.log(
  searchMatrix(
    (matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ]),
    (target = 23)
  )
);
console.log(
  searchMatrix(
    (matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ]),
    (target = 14)
  )
);
console.log(
  searchMatrix(
    (matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ]),
    (target = 0)
  )
);
console.log(
  searchMatrix(
    (matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ]),
    (target = 20)
  )
);
