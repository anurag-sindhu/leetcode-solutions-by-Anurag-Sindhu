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

var maxDistance = function (grid) {
  const islandArray = [];
  let islandArrayIndex = 0;
  const visited = {};
  const getVisitedKey = function (rowIndex, columnIndex) {
    return `${rowIndex}_${columnIndex}`;
  };
  let tempArray = [];
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
      if (grid[rowIndex][columnIndex] !== 0) {
        tempArray.push({ rowIndex: rowIndex, columnIndex: columnIndex });
        visited[getVisitedKey(rowIndex, columnIndex)] = true;
      }
    }
  }
  if (tempArray.length) {
    islandArray[islandArrayIndex] = tempArray;
  }
  while (true) {
    tempArray = [];
    if (islandArray[islandArrayIndex]) {
      for (const { rowIndex, columnIndex } of islandArray[islandArrayIndex]) {
        const neighbor = getNeighbors(grid, rowIndex, columnIndex);
        for (const iterator of neighbor) {
          if (
            !visited[getVisitedKey(iterator.rowIndex, iterator.columnIndex)] &&
            grid[iterator.rowIndex][iterator.columnIndex] === 0
          ) {
            tempArray.push({ rowIndex: iterator.rowIndex, columnIndex: iterator.columnIndex });
            visited[getVisitedKey(iterator.rowIndex, iterator.columnIndex)] = true;
          }
        }
      }
    }

    if (!tempArray.length) {
      break;
    }
    islandArray[++islandArrayIndex] = tempArray;
  }
  return islandArray.length - 1 || -1;
};

console.log(
  maxDistance([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ])
);
console.log(
  maxDistance([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ])
);
console.log(
  maxDistance([
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1]
  ])
);
console.log(
  maxDistance([
    [1, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 0]
  ])
);
console.log(
  maxDistance([
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ])
);
