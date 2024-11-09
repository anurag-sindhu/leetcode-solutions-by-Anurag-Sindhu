
function getNeighbors(array, rowIndex, columnIndex) {
    const neighbors = [];
    if (array[rowIndex] && array[rowIndex][columnIndex - 1] !== undefined) {
        neighbors.push({
            rowIndex: rowIndex,
            columnIndex: columnIndex - 1,
        });
    }
    if (array[rowIndex] && array[rowIndex][columnIndex + 1] !== undefined) {
        neighbors.push({
            rowIndex: rowIndex,
            columnIndex: columnIndex + 1,
        });
    }
    if (array[rowIndex - 1] && array[rowIndex - 1][columnIndex] !== undefined) {
        neighbors.push({
            rowIndex: rowIndex - 1,
            columnIndex: columnIndex,
        });
    }
    if (array[rowIndex + 1] && array[rowIndex + 1][columnIndex] !== undefined) {
        neighbors.push({
            rowIndex: rowIndex + 1,
            columnIndex: columnIndex,
        });
    }
    return neighbors;
}
var surfaceArea = function (grid) {
    let zero = 0;
    let area = grid.length * grid[0].length * 2;
    for (let row = 0; row < grid.length; row++) {
        for (let column = 0; column < grid[row].length; column++) {
            const neighbors = getNeighbors(grid, row, column);
            if (grid[row][column] === 0) {
                zero += 1;
            }
            area += (4 - neighbors.length) * grid[row][column];
            for (const iteratee of neighbors) {
                const { rowIndex, columnIndex } = iteratee;
                if (grid[row][column] < grid[rowIndex][columnIndex]) {
                    area += grid[rowIndex][columnIndex] - grid[row][column];
                }
            }
        }
    }
    return area - zero * 2;
};

console.log(
    surfaceArea(
        (grid = [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1],
        ]),
    ),
);
console.log(
    surfaceArea(
        (grid = [
            [1, 2],
            [3, 4],
        ]),
    ),
);

console.log(
    surfaceArea(
        (grid = [
            [2, 2, 2],
            [2, 1, 2],
            [2, 2, 2],
        ]),
    ),
);
