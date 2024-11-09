function getNeighbors(rowLength, columnLength, rowIndex, columnIndex) {
    const neighbors = [];
    if (columnIndex < columnLength - 1 && rowIndex < rowLength - 1) {
        if (columnIndex - 1 >= 0) {
            neighbors.push({
                rowIndex: rowIndex,
                columnIndex: columnIndex - 1,
            });
        }
        if (columnIndex + 1 < columnLength) {
            neighbors.push({
                rowIndex: rowIndex,
                columnIndex: columnIndex + 1,
            });
        }
        if (rowIndex - 1 >= 0) {
            neighbors.push({
                rowIndex: rowIndex - 1,
                columnIndex: columnIndex,
            });
        }
        if (rowIndex + 1 < rowLength) {
            neighbors.push({
                rowIndex: rowIndex + 1,
                columnIndex: columnIndex,
            });
        }
        if (rowIndex + 1 < rowLength && columnIndex + 1 < columnLength) {
            neighbors.push({
                rowIndex: rowIndex + 1,
                columnIndex: columnIndex + 1,
            });
        }
        if (rowIndex - 1 >= 0 && columnIndex - 1 >= 0) {
            neighbors.push({
                rowIndex: rowIndex - 1,
                columnIndex: columnIndex - 1,
            });
        }
        if (rowIndex - 1 >= 0 && columnIndex + 1 < columnLength) {
            neighbors.push({
                rowIndex: rowIndex - 1,
                columnIndex: columnIndex + 1,
            });
        }
        if (rowIndex + 1 < rowLength && columnIndex - 1 >= 0) {
            neighbors.push({
                rowIndex: rowIndex + 1,
                columnIndex: columnIndex - 1,
            });
        }
    }

    return neighbors;
}

var countBlackBlocks = function (rowLength, columnLength, coordinates) {
    const counting = [0, 0, 0, 0, 0];
    const mapping = {};
    for (const [row, column] of coordinates) {
        mapping[`${row}_${column}`] = true;
    }
    for (const [row, column] of coordinates) {
        let count = 0;
        const neighbors = getNeighbors(rowLength, columnLength, row, column);
        if (neighbors.length) {
            count = 1;
            for (const { rowIndex, columnIndex } of neighbors) {
                if (mapping[`${rowIndex}_${columnIndex}`]) {
                    count += 1;
                }
            }
        }
        counting[count] += 1;
    }
    return counting;
};

console.log(countBlackBlocks((m = 3), (n = 3), (coordinates = [[1, 1]])));
console.log(
    countBlackBlocks(
        (m = 3),
        (n = 3),
        (coordinates = [
            [0, 0],
            [1, 1],
            [0, 2],
        ]),
    ),
);
console.log(countBlackBlocks((m = 3), (n = 3), (coordinates = [[0, 0]])));
