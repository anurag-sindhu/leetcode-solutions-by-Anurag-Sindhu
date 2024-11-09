var find = function (grid, row = 0, column = 0, prod = grid[0][0]) {
  let updatedRow = row;
  let updatedColumn = column + 1;
  if (updatedColumn === grid[0].length) {
    updatedColumn -= 1;
    updatedRow += 1;
  }
  if (grid[updatedRow] === undefined || grid[updatedRow][updatedColumn] === undefined) {
    return prod;
  }
  let prodOfNextColumn = find(
    grid,
    updatedRow,
    updatedColumn,
    prod * grid[updatedRow][updatedColumn]
  );
  updatedRow = row + 1;
  updatedColumn = column;
  if (updatedRow === grid.length) {
    updatedColumn += 1;
    updatedRow -= 1;
  }
  if (grid[updatedRow] === undefined || grid[updatedRow][updatedColumn] === undefined) {
    return prod;
  }
  let prodOfNextRow = find(grid, updatedRow, updatedColumn, prod * grid[updatedRow][updatedColumn]);
  return Math.max(prodOfNextColumn, prodOfNextRow);
};
var maxProductPath = function (grid) {
  const found = find(grid);
  if (found === -0) {
    return 0;
  }
  if (found < 0) {
    return -1;
  }
  return found;
};

let res = null;
res = maxProductPath(
  (grid = [
    [-1, -2, -3],
    [-2, -3, -3],
    [-3, -3, -2]
  ])
);
console.log(res);
res = maxProductPath((grid = [[4, 3]]));
console.log(res);
res = maxProductPath(
  (grid = [
    [1, -2, 1],
    [1, -2, 1],
    [3, -4, 1]
  ])
);
console.log(res);
res = maxProductPath(
  (grid = [
    [1, 3],
    [0, -4]
  ])
);
console.log(res);
