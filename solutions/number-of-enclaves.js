function getNeighbors(grid, row, column) {
    const totalRows = grid.length;
    const totalColumns = grid[0].length;
    const neighbors = [];
    if (row > 0 && grid[row - 1][column]) {
        neighbors.push({ rowIndex: row - 1, columnIndex: column });
    }
    if (row < totalRows - 1 && grid[row + 1][column]) {
        neighbors.push({ rowIndex: row + 1, columnIndex: column });
    }

    if (column > 0 && grid[row][column - 1]) {
        neighbors.push({ rowIndex: row, columnIndex: column - 1 });
    }

    if (column < totalColumns - 1 && grid[row][column + 1]) {
        neighbors.push({ rowIndex: row, columnIndex: column + 1 });
    }

    return neighbors;
}

function isBoundary(array, row, column, boundary) {
    if (0 === row || 0 === column) {
        boundary[`${row}-${column}`] = true;
        return true;
    }
    if (array.length - 1 === row) {
        boundary[`${row}-${column}`] = true;
        return true;
    }

    if (array[0].length - 1 === column) {
        boundary[`${row}-${column}`] = true;
        return true;
    }
    return false;
}

function doExplore(array, row, column, boundary, explored = {}) {
    const neighbors = getNeighbors(array, row, column);
    if (boundary[`${row}-${column}`] != undefined) {
        return boundary[`${row}-${column}`];
    }
    if (explored[`${row}-${column}`]) {
        return false;
    }
    explored[`${row}-${column}`] = true;
    for (const { rowIndex, columnIndex } of neighbors) {
        if (isBoundary(array, rowIndex, columnIndex, boundary)) {
            return true;
        }
        const resp = doExplore(array, rowIndex, columnIndex, boundary, explored);
        boundary[`${rowIndex}-${columnIndex}`] = resp;
        if (resp) {
            return resp;
        }
    }
    return false;
}

var numEnclaves = function (array) {
    let count = 0;
    let boundary = {};
    for (let rowIndex = 1; rowIndex < array.length - 1; rowIndex++) {
        for (let columnIndex = 1; columnIndex < array[rowIndex].length - 1; columnIndex++) {
            if (rowIndex === 1 && columnIndex == 6 && array[rowIndex][columnIndex]) {
                // console.log('object');
            }
            if (
                array[rowIndex][columnIndex] == 1 &&
                !isBoundary(array, rowIndex, columnIndex, boundary)
            ) {
                const aa = {};
                const resp = doExplore(array, rowIndex, columnIndex, boundary, aa);
                boundary[`${rowIndex}-${columnIndex}`] = resp;
                if (!resp) {
                    count += Object.keys(aa).length;
                }
            }
        }
    }
    return count;
};

console.log(
    numEnclaves(
        (grid = [
            [0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
            [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1],
        ]),
    ) === 10,
);
console.log(
    numEnclaves(
        (grid = [
            [0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
            [0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0],
            [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0],
            [1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1],
        ]),
    ) === 8,
);

console.log(
    numEnclaves(
        (grid = [
            [0, 0, 0, 0],
            [1, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
        ]),
    ) === 3,
);

console.log(
    numEnclaves(
        (grid = [
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0],
        ]),
    ) === 0,
);
