function getNeighbors(grid, row, column) {
  const totalRows = grid.length;
  const totalColumns = grid[0].length;
  const neighbors = [];
  if (row > 0) {
    neighbors.push({ rowIndex: row - 1, columnIndex: column });
  }
  if (row < totalRows - 1) {
    neighbors.push({ rowIndex: row + 1, columnIndex: column });
  }

  if (column > 0) {
    neighbors.push({ rowIndex: row, columnIndex: column - 1 });
  }

  if (column < totalColumns - 1) {
    neighbors.push({ rowIndex: row, columnIndex: column + 1 });
  }

  return neighbors;
}

function numberOfSidesUnCovered(grid, row, column) {
  const neighbors = getNeighbors(grid, row, column);
  let count = 4;
  for (const { rowIndex, columnIndex } of neighbors) {
    if (grid[rowIndex][columnIndex]) {
      count -= 1;
    }
  }
  return count;
}

var islandPerimeter = function (grid) {
  let perimeter = 0;
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
      if (grid[rowIndex][columnIndex]) {
        perimeter += numberOfSidesUnCovered(grid, rowIndex, columnIndex);
      }
    }
  }
  return perimeter;
};

console.log(islandPerimeter((grid = [[1, 0]])));
console.log(islandPerimeter((grid = [[1]])));

console.log(
  islandPerimeter(
    (grid = [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0]
    ])
  )
);
