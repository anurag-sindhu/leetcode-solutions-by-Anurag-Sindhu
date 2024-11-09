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

function exploreIslands(grid, row, column, explored) {
  const neighbors = getNeighbors(grid, row, column);
  for (const { rowIndex, columnIndex } of neighbors) {
    if (grid[rowIndex][columnIndex] === '1' && !explored[`${rowIndex}_${columnIndex}`]) {
      explored[`${rowIndex}_${columnIndex}`] = true;
      exploreIslands(grid, rowIndex, columnIndex, explored);
    }
  }
}

var numIslands = function (array, explored = {}) {
  let islands = 0;
  for (let rowIndex = 0; rowIndex < array.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < array[rowIndex].length; columnIndex++) {
      if (array[rowIndex][columnIndex] === '1' && !explored[`${rowIndex}_${columnIndex}`]) {
        islands++;
        explored[`${rowIndex}_${columnIndex}`] = true;
        exploreIslands(array, rowIndex, columnIndex, explored);
      }
    }
  }
  return islands;
};

console.log(
  numIslands(
    (grid = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1']
    ])
  )
);

console.log(
  numIslands(
    (grid = [
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0']
    ])
  )
);
