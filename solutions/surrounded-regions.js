function getNeighbors(array, rowIndex, columnIndex) {
    const neighbors = [];
    if (array[rowIndex] && array[rowIndex][columnIndex - 1] !== undefined) {
        neighbors.push({ rowIndex: rowIndex, columnIndex: columnIndex - 1 });
    }
    if (array[rowIndex] && array[rowIndex][columnIndex + 1] !== undefined) {
        neighbors.push({ rowIndex: rowIndex, columnIndex: columnIndex + 1 });
    }
    if (array[rowIndex - 1] && array[rowIndex - 1][columnIndex] !== undefined) {
        neighbors.push({ rowIndex: rowIndex - 1, columnIndex: columnIndex });
    }
    if (array[rowIndex + 1] && array[rowIndex + 1][columnIndex] !== undefined) {
        neighbors.push({ rowIndex: rowIndex + 1, columnIndex: columnIndex });
    }
    return neighbors;
}

function isBoundary(board, rowIndex, columnIndex) {
    const totalRow = board.length;
    const totalColumn = board[rowIndex].length;
    if (rowIndex === totalRow - 1 || rowIndex === 0) {
        return true;
    }
    if (columnIndex === totalColumn - 1 || columnIndex === 0) {
        return true;
    }
    return false;
}

var solve = function (board) {
    const explored = {};
    let isPossible = false;

    function explore(board, row, column, explored, region) {
        const key = `${row}_${column}`;
        if (explored[key]) {
            return;
        }
        explored[key] = true;
        region.push({ row, column }); // track cells in this region, don't mutate yet
        const neighbors = getNeighbors(board, row, column);
        for (const { rowIndex, columnIndex } of neighbors) {
            const element = board[rowIndex][columnIndex];
            if (element === 'O') {
                if (isBoundary(board, rowIndex, columnIndex)) {
                    isPossible = false;
                }
                explore(board, rowIndex, columnIndex, explored, region);
            }
        }
    }

    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < board[rowIndex].length; columnIndex++) {
            const element = board[rowIndex][columnIndex];
            if (element === 'O' && !explored[`${rowIndex}_${columnIndex}`]) {
                if (!isBoundary(board, rowIndex, columnIndex)) {
                    isPossible = true;
                    const region = [];
                    explore(board, rowIndex, columnIndex, explored, region);
                    if (isPossible) {
                        for (const { row, column } of region) {
                            board[row][column] = 'X';
                        }
                    }
                }
            }
        }
    }
    return;
};

console.log(
    solve([
        ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'O', 'X', 'O'],
        ['X', 'O', 'O', 'X', 'X', 'X', 'O', 'O', 'O', 'X'],
        ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'X'],
        ['O', 'O', 'O', 'O', 'O', 'O', 'X', 'O', 'O', 'X'],
        ['O', 'O', 'X', 'X', 'O', 'X', 'X', 'O', 'O', 'O'],
        ['X', 'O', 'O', 'X', 'X', 'X', 'O', 'X', 'X', 'O'],
        ['X', 'O', 'X', 'O', 'O', 'X', 'X', 'O', 'X', 'O'],
        ['X', 'X', 'O', 'X', 'X', 'O', 'X', 'O', 'O', 'X'],
        ['O', 'O', 'O', 'O', 'X', 'O', 'X', 'O', 'X', 'O'],
        ['X', 'X', 'O', 'X', 'X', 'X', 'X', 'O', 'O', 'O'],
    ]),
);
/**
[
    ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'O', 'X', 'O'],
    ['X', 'O', 'O', 'X', 'X', 'X', 'O', 'O', 'O', 'X'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'X'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'X', 'O', 'O', 'X'],
    ['O', 'O', 'X', 'X', 'O', 'X', 'X', 'O', 'O', 'O'],
    ['X', 'O', 'O', 'X', 'X', 'X', 'X', 'X', 'X', 'O'],
    ['X', 'O', 'X', 'X', 'X', 'X', 'X', 'O', 'X', 'O'],
    ['X', 'X', 'O', 'X', 'X', 'X', 'X', 'O', 'X', 'X'],
    ['O', 'O', 'O', 'O', 'X', 'X', 'X', 'O', 'X', 'O'],
    ['X', 'X', 'O', 'X', 'X', 'X', 'X', 'O', 'O', 'O'],
]
 */
/**
 [
        ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'O', 'X', 'O'],
        ['X', 'O', 'O', 'X', 'X', 'X', 'O', 'O', 'O', 'X'],
        ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'X'],
        ['O', 'O', 'O', 'O', 'O', 'O', 'X', 'O', 'O', 'X'],
        ['O', 'O', 'X', 'X', 'O', 'X', 'X', 'O', 'O', 'O'],
        ['X', 'O', 'O', 'X', 'X', 'X', 'X', 'X', 'X', 'O'],
        ['X', 'O', 'X', 'X', 'X', 'X', 'X', 'O', 'X', 'O'],
        ['X', 'X', 'O', 'X', 'X', 'X', 'X', 'O', 'O', 'X'],
        ['O', 'O', 'O', 'O', 'X', 'X', 'X', 'O', 'X', 'O'],
        ['X', 'X', 'O', 'X', 'X', 'X', 'X', 'O', 'O', 'O'],
    ]
 */
console.log(
    solve([
        ['X', 'O', 'X'],
        ['O', 'X', 'O'],
        ['X', 'O', 'X'],
    ]),
);
/**
[
        ['X', 'O', 'X'],
        ['O', 'X', 'O'],
        ['X', 'O', 'X'],
    ]
 */

console.log(
    solve([
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'O', 'X'],
        ['X', 'X', 'O', 'X'],
        ['X', 'X', 'O', 'X'],
    ]),
);

console.log(
    solve([
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'O', 'X'],
        ['X', 'X', 'O', 'X'],
        ['X', 'O', 'X', 'X'],
    ]),
);
