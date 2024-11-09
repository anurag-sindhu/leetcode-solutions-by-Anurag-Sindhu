function getNeighbors(totalRows, totalColumns, row, column) {
  const neighbors = [];
  if (row > 0) {
    neighbors.push({ rowIndex: row - 1, columnIndex: column });
  }

  if (column > 0) {
    neighbors.push({ rowIndex: row, columnIndex: column - 1 });
  }

  return neighbors;
}

var countUnguarded = function (m, n, guards, walls) {
  const matrix = [];
  const encountered = {};
  for (let rowIndex = 0; rowIndex < m; rowIndex++) {
    matrix[rowIndex] = [];
    for (let columnIndex = 0; columnIndex < n; columnIndex++) {
      matrix[rowIndex].push(0);
    }
  }
  const guardsObject = {};
  for (const [row, column] of guards) {
    guardsObject[`${row}_${column}`] = true;
    matrix[row][column] = 'G';
  }
  const wallsObject = {};
  for (const [row, column] of walls) {
    wallsObject[`${row}_${column}`] = true;
    matrix[row][column] = 'W';
  }

  function exploreRightAndBottom(matrix, m, n, row, column) {
    const neighbors = getNeighbors(m, n, row, column);
    for (const neighbor of neighbors) {
      const value = guardsObject[`${neighbor.rowIndex}_${neighbor.columnIndex}`];
      if (value) {
        matrix[row][column] = value;
        break;
      }
    }
  }

  for (let rowIndex = 0; rowIndex < m; rowIndex++) {
    for (let columnIndex = 0; columnIndex < n; columnIndex++) {
      if (
        !guardsObject[`${rowIndex}_${columnIndex}`] &&
        !wallsObject[`${rowIndex}_${columnIndex}`] &&
        !encountered[`${rowIndex}_${columnIndex}`]
      ) {
        exploreRightAndBottom(matrix, m, n, rowIndex, columnIndex);
        console.log('object');
      }
    }
  }

  return matrix;
};

console.log(
  countUnguarded(
    (m = 4),
    (n = 6),
    (guards = [
      [0, 0],
      [1, 1],
      [2, 3]
    ]),
    (walls = [
      [0, 1],
      [2, 2],
      [1, 4]
    ])
  )
);
