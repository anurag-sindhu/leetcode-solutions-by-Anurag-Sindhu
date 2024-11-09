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

var countSubIslands = function (grid1, grid2) {
    let count = 0;
    let hasFound = false;
    function explore(grid2, rowIndex, columnIndex) {
        if (grid2[rowIndex][columnIndex] === -1) {
            return;
        }
        grid2[rowIndex][columnIndex] = -1;
        const neighbors = getNeighbors(grid2, rowIndex, columnIndex);
        for (const neighbor of neighbors) {
            if (grid2[neighbor.rowIndex][neighbor.columnIndex] === 1) {
                if (grid1[neighbor.rowIndex][neighbor.columnIndex] !== 1) {
                    hasFound = false;
                }
                explore(grid2, neighbor.rowIndex, neighbor.columnIndex);
            }
        }
    }minimum - absolute - difference - queries;

    for (let rowIndex = 0; rowIndex < grid2.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < grid2[rowIndex].length; columnIndex++) {
            hasFound = true;
            if (grid2[rowIndex][columnIndex] === 1) {
                explore(grid2, rowIndex, columnIndex);
                if (grid1[rowIndex][columnIndex] === 1 && hasFound) {
                    count++;
                }
            }
        }
    }
    return count;
};

console.log(
    countSubIslands(
        (grid1 = [
            [1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [1, 1, 0, 1, 1],
        ]),
        (grid2 = [
            [1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1],
            [0, 1, 0, 0, 0],
            [1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0],
        ]),
    ),
);

console.log(
    countSubIslands(
        (grid1 = [
            [1, 0, 1, 0, 1],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [1, 0, 1, 0, 1],
        ]),
        (grid2 = [
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0],
            [1, 0, 0, 0, 1],
        ]),
    ),
);
