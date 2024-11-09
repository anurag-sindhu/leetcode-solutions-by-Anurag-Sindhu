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

function crawlMatrix(grid, row, column, exploredConfig) {
    let maxStore = 1;
    function crawlMatrixHelper(grid, row, column, exploredConfig, count = 1) {
        const neighbors = getNeighbors(grid, row, column);
        const currentElement = grid[row][column].num;
        for (const neighbor of neighbors) {
            const value = grid[neighbor.rowIndex][neighbor.columnIndex].num;
            const key = `${neighbor.rowIndex}_${neighbor.columnIndex}`;
            if (!exploredConfig[key]) {
                if (value > currentElement) {
                    exploredConfig[key] = true;
                    const updatedCount = count + 1;
                    const tempResp = crawlMatrixHelper(
                        grid,
                        neighbor.rowIndex,
                        neighbor.columnIndex,
                        exploredConfig,
                        updatedCount
                    );
                    console.log(tempResp);
                }
            }
        }
        return count;
    }
    crawlMatrixHelper(grid, row, column, exploredConfig);
    return maxStore;
}

var longestIncreasingPath = function(grid) {
    const exploredConfig = {};
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
            grid[rowIndex][columnIndex] = {
                num: grid[rowIndex][columnIndex]
            };
        }
    }
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
            const key = `${rowIndex}_${columnIndex}`;
            if (!exploredConfig[key]) {
                exploredConfig[key] = true;
                crawlMatrix(grid, rowIndex, rowIndex, exploredConfig);
            }
        }
    }
    return grid;
};

console.log(longestIncreasingPath((matrix = [[3, 4, 5], [3, 6, 6], [2, 2, 1]])));
console.log(longestIncreasingPath((matrix = [[3, 4, 5], [3, 2, 6], [2, 2, 1]])));
console.log(longestIncreasingPath((matrix = [[9, 9, 4], [6, 6, 8], [2, 1, 1]])));
console.log(longestIncreasingPath((matrix = [[1]])));
