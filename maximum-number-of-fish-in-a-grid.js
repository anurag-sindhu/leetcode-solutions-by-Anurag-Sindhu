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

function explore(grid, rowIndex, columnIndex, memoized, sum = 0) {
    if (grid[rowIndex][columnIndex] === 0) {
        memoized[`${rowIndex}_${columnIndex}`] = 0;
        return 0;
    }
    const neighbors = getNeighbors(grid, rowIndex, columnIndex);
    if (memoized[`${rowIndex}_${columnIndex}`] !== undefined) {
        return memoized[`${rowIndex}_${columnIndex}`];
    }
    for (const { rowIndex: neighborRowIndex, columnIndex: neighborColumnIndex } of neighbors) {
        let tempSum = 0;
        if (memoized[`${neighborRowIndex}_${neighborColumnIndex}`] !== undefined) {
            tempSum = memoized[`${neighborRowIndex}_${neighborColumnIndex}`];
        } else {
            tempSum = explore(grid, neighborRowIndex, neighborColumnIndex, memoized, sum);
        }
        memoized[`${neighborRowIndex}_${neighborColumnIndex}`] = tempSum;
    }
}

var findMaxFish = function(grid) {
    const memoized = {};
    let max = 0;
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
            explore(grid, rowIndex, columnIndex, memoized, grid[rowIndex][columnIndex]);
        }
    }
    return max;
};

console.log(findMaxFish((grid = [[0, 2, 1, 0], [4, 0, 0, 3], [1, 0, 0, 4], [0, 3, 2, 0]])));
console.log(findMaxFish((grid = [[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1]])));
