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

var closedIsland = function (grid) {
  const getVisitedKey = (rowIndex, columnIndex) => {
    return `${rowIndex}_${columnIndex}`;
  };
  const visited = (function () {
    const config = {};
    for (let rowIndex = 0; rowIndex < 1; rowIndex++) {
      for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
        config[getVisitedKey(rowIndex, columnIndex)] = grid[rowIndex][columnIndex];
      }

      for (
        let columnIndex = grid[rowIndex].length - 1;
        columnIndex < grid[rowIndex].length;
        columnIndex++
      ) {
        config[getVisitedKey(rowIndex, columnIndex)] = grid[rowIndex][columnIndex];
      }
    }

    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
      for (let columnIndex = 0; columnIndex < 1; columnIndex++) {
        config[getVisitedKey(rowIndex, columnIndex)] = grid[rowIndex][columnIndex];
      }
      for (
        let columnIndex = grid[rowIndex].length - 1;
        columnIndex < grid[rowIndex].length;
        columnIndex++
      ) {
        config[getVisitedKey(rowIndex, columnIndex)] = grid[rowIndex][columnIndex];
      }
    }

    for (let rowIndex = grid.length - 1; rowIndex < grid.length; rowIndex++) {
      for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
        config[getVisitedKey(rowIndex, columnIndex)] = grid[rowIndex][columnIndex];
      }
    }
    return config;
  })();

  const boundary = { ...visited };

  function exploreNeighbors(grid, rowIndex, columnIndex) {
    const neighbor = getNeighbors(grid, rowIndex, columnIndex);
    for (const iterator of neighbor) {
      if (
        (boundary[getVisitedKey(rowIndex, columnIndex)] === 0 ||
          boundary[getVisitedKey(rowIndex, columnIndex)] === 1) &&
        boundary[getVisitedKey(iterator.rowIndex, iterator.columnIndex)] !== 1
      ) {
        throw [iterator.rowIndex, iterator.columnIndex];
      }
      if (grid[iterator.rowIndex][iterator.columnIndex] === 0) {
        grid[rowIndex][columnIndex] = true;
        exploreNeighbors(grid, iterator.rowIndex, iterator.columnIndex);
      }
    }
  }
  let count = 0;
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
      if (
        (visited[getVisitedKey(rowIndex, columnIndex)] !== 0 ||
          visited[getVisitedKey(rowIndex, columnIndex)] !== 1) &&
        grid[rowIndex][columnIndex] === 0
      ) {
        try {
          grid[rowIndex][columnIndex] = true;
          exploreNeighbors(grid, rowIndex, columnIndex);
          count++;
        } catch (e) {
          console.log({ e });
        }
      }
    }
  }
  return count;
};

console.log(
  closedIsland(
    (grid = [
      [0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
      [1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
      [1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
      [0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 1, 0, 1, 0, 1],
      [1, 1, 1, 0, 1, 1, 0, 1, 1, 0]
    ])
  )
);
console.log(
  closedIsland(
    (grid = [
      [1, 1, 1, 1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0, 1, 1, 0],
      [1, 0, 1, 0, 1, 1, 1, 0],
      [1, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 0]
    ])
  )
);

console.log(
  closedIsland(
    (grid = [
      [0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 1, 1, 1, 0]
    ])
  )
);
