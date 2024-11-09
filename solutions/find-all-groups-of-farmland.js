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

var findFarmland = function (land) {
    const res = [];
    const explored = {};
    let tempCount = 0;
    let tempMaxRow = 0;
    let tempMaxColumn = 0;
    function explore(row, column) {
        if (explored[`${row}-${column}`]) {
            return;
        }
        explored[`${row}-${column}`] = true;
        const neighbors = getNeighbors(land, row, column);
        for (const { rowIndex, columnIndex } of neighbors) {
            const element = land[rowIndex][columnIndex];
            if (element === 1 && !explored[`${rowIndex}-${columnIndex}`]) {
                tempCount++;
                tempMaxRow = Math.max(tempMaxRow, rowIndex);
                tempMaxColumn = Math.max(tempMaxColumn, columnIndex);
                explore(rowIndex, columnIndex);
            }
        }
    }

    for (let rowIndex = 0; rowIndex < land.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < land[rowIndex].length; columnIndex++) {
            const element = land[rowIndex][columnIndex];
            if (element === 1 && !explored[`${rowIndex}-${columnIndex}`]) {
                tempCount = 1;
                tempMaxRow = rowIndex;
                tempMaxColumn = columnIndex;
                explore(rowIndex, columnIndex);
                res.push([rowIndex, columnIndex, tempMaxRow, tempMaxColumn]);
                console.log('object');
            }
            explored[`${rowIndex}-${columnIndex}`] = true;
        }
    }
    return res;
};

console.log(
    findFarmland(
        (land = [
            [1, 0, 0],
            [0, 1, 1],
            [0, 1, 1],
        ]),
    ),
);
console.log(
    findFarmland(
        (land = [
            [1, 1],
            [1, 1],
        ]),
    ),
);
console.log(findFarmland((land = [[0]])));
