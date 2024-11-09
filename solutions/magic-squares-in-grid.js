function areNumbersDistinct(grid, rowIndex, columnIndex) {
  const obj = {};
  for (let childRowIndex = rowIndex; childRowIndex <= rowIndex + 2; childRowIndex++) {
    for (
      let childColumnIndex = columnIndex;
      childColumnIndex <= columnIndex + 2;
      childColumnIndex++
    ) {
      const currentNum = grid[childRowIndex][childColumnIndex];
      if (currentNum < 1 || currentNum > 9) {
        return false;
      }
      if (!obj[grid[childRowIndex][childColumnIndex]]) {
        obj[grid[childRowIndex][childColumnIndex]] = 1;
      } else {
        return false;
      }
    }
  }
  return true;
}
function areAllRowsEqual(grid, rowIndex, columnIndex) {
  const firstRowSum =
    grid[rowIndex][columnIndex] + grid[rowIndex][columnIndex + 1] + grid[rowIndex][columnIndex + 2];
  const secondRowSum =
    grid[rowIndex + 1][columnIndex] +
    grid[rowIndex + 1][columnIndex + 1] +
    grid[rowIndex + 1][columnIndex + 2];
  const thirdRowSum =
    grid[rowIndex + 2][columnIndex] +
    grid[rowIndex + 2][columnIndex + 1] +
    grid[rowIndex + 2][columnIndex + 2];
  return firstRowSum === secondRowSum && secondRowSum === thirdRowSum;
}

function areAllColumnsEqual(grid, rowIndex, columnIndex) {
  const firstColumnSum =
    grid[rowIndex][columnIndex] + grid[rowIndex + 1][columnIndex] + grid[rowIndex + 2][columnIndex];
  const secondColumnSum =
    grid[rowIndex][columnIndex + 1] +
    grid[rowIndex + 1][columnIndex + 1] +
    grid[rowIndex + 2][columnIndex + 1];
  const thirdColumnSum =
    grid[rowIndex][columnIndex + 2] +
    grid[rowIndex + 1][columnIndex + 2] +
    grid[rowIndex + 2][columnIndex + 2];
  return firstColumnSum === secondColumnSum && secondColumnSum === thirdColumnSum;
}
function areAllDiagonalsEqual(grid, rowIndex, columnIndex) {
  const firstDiagonal =
    grid[rowIndex][columnIndex] +
    grid[rowIndex + 1][columnIndex + 1] +
    grid[rowIndex + 2][columnIndex + 2];
  const secondDiagonal =
    grid[rowIndex + 2][columnIndex] +
    grid[rowIndex + 1][columnIndex + 1] +
    grid[rowIndex][columnIndex + 2];
  return firstDiagonal === secondDiagonal;
}

var numMagicSquaresInside = function (grid) {
  let count = 0;
  for (let rowIndex = 0; rowIndex < grid.length - 2; rowIndex++) {
    for (let columnIndex = 0; columnIndex < grid.length - 2; columnIndex++) {
      if (
        areAllRowsEqual(grid, rowIndex, columnIndex) &&
        areAllColumnsEqual(grid, rowIndex, columnIndex) &&
        areAllDiagonalsEqual(grid, rowIndex, columnIndex) &&
        areNumbersDistinct(grid, rowIndex, columnIndex)
      ) {
        count += 1;
      }
    }
  }
  return count;
};

console.log(
  numMagicSquaresInside(
    (grid = [
      [7, 6, 2, 2, 4],
      [4, 4, 9, 2, 10],
      [9, 7, 8, 3, 10],
      [8, 1, 9, 7, 5],
      [7, 10, 4, 11, 6]
    ])
  )
);
console.log(
  numMagicSquaresInside(
    (grid = [
      [5, 5, 5],
      [5, 5, 5],
      [5, 5, 5]
    ])
  )
);

console.log(
  numMagicSquaresInside(
    (grid = [
      [4, 3, 8, 4],
      [9, 5, 1, 9],
      [2, 7, 6, 2]
    ])
  )
);
