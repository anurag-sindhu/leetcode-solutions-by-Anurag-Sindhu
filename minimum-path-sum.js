var minPathSum = function (grid) {
  const arr = [];
  const columnsLength = grid.length;
  const rowsLength = grid[0].length;
  for (let column = 0; column < columnsLength; column++) {
    arr[column] = [];
    for (let row = 0; row < rowsLength; row++) {
      if (row && column) {
        arr[column][row] = Math.min(arr[column][row - 1], arr[column - 1][row]) + grid[column][row];
      } else if (row || column) {
        if (row) {
          arr[column][row] = arr[column][row - 1] + grid[column][row];
        } else {
          arr[column][row] = arr[column - 1][row] + grid[column][row];
        }
      } else {
        arr[column][row] = grid[column][row];
      }
    }
  }

  return arr[columnsLength - 1][rowsLength - 1];
};
console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6]
  ])
);
console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ])
);
