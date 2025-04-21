function isOk(board) {
    if (
        board[0][0] == 1 &&
        board[0][1] == 2 &&
        board[0][2] == 3 &&
        board[1][0] == 4 &&
        board[1][1] == 5 &&
        board[1][2] == 0
    ) {
        return true;
    }
    return false;
}
function findZero(board) {
    if (board[0][0] == 0) {
        return {
            row: 0,
            column: 0,
        };
    }
    if (board[0][1] == 0) {
        return {
            row: 0,
            column: 1,
        };
    }
    if (board[0][2] == 0) {
        return {
            row: 0,
            column: 2,
        };
    }
    if (board[1][0] == 0) {
        return {
            row: 1,
            column: 0,
        };
    }
    if (board[1][1] == 0) {
        return {
            row: 1,
            column: 1,
        };
    }
    if (board[1][2] == 0) {
        return {
            row: 1,
            column: 2,
        };
    }
}
function getNeighbors(array, row, column) {
    const neighbors = [];
    if (array[row] && array[row][column - 1] !== undefined) {
        neighbors.push({
            row: row,
            column: column - 1,
        });
    }
    if (array[row] && array[row][column + 1] !== undefined) {
        neighbors.push({
            row: row,
            column: column + 1,
        });
    }
    if (array[row - 1] && array[row - 1][column] !== undefined) {
        neighbors.push({
            row: row - 1,
            column: column,
        });
    }
    if (array[row + 1] && array[row + 1][column] !== undefined) {
        neighbors.push({
            row: row + 1,
            column: column,
        });
    }
    return neighbors;
}

const boardMapping = {
    '0-0': 'a',
    '0-1': 'b',
    '0-2': 'c',
    '1-0': 'd',
    '1-1': 'e',
    '1-2': 'f',
};

function createBoardString(board) {
    let str = '';
    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < board[rowIndex].length; columnIndex++) {
            str += board[rowIndex][columnIndex] + '-';
        }
    }
    return str;
}

var slidingPuzzleHelper = function (a, b, c, d, e, f, step = 0, addressed = {}) {
    const mapper = { a, b, c, d, e, f };
    const board = [
        [a, b, c],
        [d, e, f],
    ];
    if (isOk(board)) {
        return step;
    }
    const zero = findZero(board);
    const neighbor = getNeighbors(board, zero.row, zero.column);
    const aaa = createBoardString(board);
    if (addressed[aaa]) {
        return;
    }
    addressed[aaa] = true;
    const zeroKey = boardMapping[`${zero.row}-${zero.column}`];
    for (const { row, column } of neighbor) {
        const keyToBeReplaced = boardMapping[`${row}-${column}`];
        const store = mapper[keyToBeReplaced];
        mapper[keyToBeReplaced] = mapper[zeroKey];
        mapper[zeroKey] = store;
        slidingPuzzleHelper(
            mapper.a,
            mapper.b,
            mapper.c,
            mapper.d,
            mapper.e,
            mapper.f,
            step + 1,
            addressed,
        );
    }
    return
};

var slidingPuzzle = function (board) {
    slidingPuzzleHelper(
        board[0][0],
        board[0][1],
        board[0][2],
        board[1][0],
        board[1][1],
        board[1][2],
    );
    return;
};
console.log(
    slidingPuzzle(
        (board = [
            [1, 2, 3],
            [4, 0, 5],
        ]),
    ),
);
