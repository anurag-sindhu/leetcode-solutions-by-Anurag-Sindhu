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

let maxEffort = Infinity;
let min = Infinity;
var minimumEffortPath = function (
    heights,
    rowIndex = 0,
    columnIndex = 0,
    efforts = 0,
    explored = {},
) {
    if (heights.length - 1 === rowIndex && heights[0].length - 1 === columnIndex) {
        maxEffort = Math.min(efforts, maxEffort);
        return efforts;
    }
    // const currentElement = heights[rowIndex][columnIndex];
    // if (efforts.min > currentElement) {
    //     efforts.min = currentElement;
    // }
    // if (efforts.max < currentElement) {
    //     efforts.max = currentElement;
    // }
    const neighbor = getNeighbors(heights, rowIndex, columnIndex);
    explored[`${rowIndex}_${columnIndex}`] = true;
    for (const iterator of neighbor) {
        if (!explored[`${iterator.rowIndex}_${iterator.columnIndex}`]) {
            console.log(iterator.rowIndex, iterator.columnIndex);
            minimumEffortPath(
                heights,
                iterator.rowIndex,
                iterator.columnIndex,
                Math.max(
                    efforts,
                    Math.abs(
                        heights[rowIndex][columnIndex] -
                            heights[iterator.rowIndex][iterator.columnIndex],
                    ),
                ),
                explored,
            );
            console.log(iterator.rowIndex, iterator.columnIndex);
        }
    }
};

console.log(
    minimumEffortPath(
        (heights = [
            [1, 2, 2],
            [3, 8, 2],
            [5, 3, 5],
        ]),
    ),
);
maxEffort = Infinity;

console.log(
    minimumEffortPath(
        (heights = [
            [1, 2, 3],
            [3, 8, 4],
            [5, 3, 5],
        ]),
    ),
);
maxEffort = Infinity;

console.log(
    minimumEffortPath(
        (heights = [
            [1, 2, 1, 1, 1],
            [1, 2, 1, 2, 1],
            [1, 2, 1, 2, 1],
            [1, 2, 1, 2, 1],
            [1, 1, 1, 2, 1],
        ]),
    ),
);
maxEffort = Infinity;
