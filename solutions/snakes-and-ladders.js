function getRowColFromLabel(board, num) {
    const rows = board.length;
    const cols = board[0].length;

    const idx = num - 1;
    const rowFromBottom = Math.floor(idx / cols);
    const rowIndex = rows - rowFromBottom - 1;
    const offset = idx % cols;

    let columnIndex;

    if (rows % 2 === 1) {
        if (rowFromBottom % 2 === 0) {
            columnIndex = offset;
        } else {
            columnIndex = cols - offset - 1;
        }
    } else {
        if (rowFromBottom % 2 === 0) {
            columnIndex = cols - offset - 1;
        } else {
            columnIndex = offset;
        }
    }

    return { rowIndex, columnIndex };
}

function getLabel(board, rowIndex, columnIndex) {
    let resp = 0;
    if (board.length % 2) {
        if ((rowIndex + 1) % 2 !== 0) {
            resp = (board.length - rowIndex - 1) * board[0].length + columnIndex + 1;
        } else {
            resp =
                (board.length - rowIndex - 1) * board[0].length + (board[0].length - columnIndex);
        }
    } else {
        if ((rowIndex + 1) % 2 == 0) {
            resp = (board.length - rowIndex - 1) * board[0].length + columnIndex + 1;
        } else {
            resp =
                (board.length - rowIndex - 1) * board[0].length + (board[0].length - columnIndex);
        }
    }
    return resp;
}

var snakesAndLadders = function (board) {
    let rowIndex = board.length - 1;
    let columnIndex = 0;
    const inProgress = {};
    const addressed = {};
    function iterate(rowIndex, columnIndex) {
        if (inProgress[`${rowIndex}_${columnIndex}`]) {
            return Infinity;
        }
        if (addressed[`${rowIndex}_${columnIndex}`] != undefined) {
            return addressed[`${rowIndex}_${columnIndex}`];
        }
        if (rowIndex <= 0 && columnIndex <= 0) {
            return 0;
        }
        inProgress[`${rowIndex}_${columnIndex}`] = true;
        let label = getLabel(board, rowIndex, columnIndex);
        const fromStep = label + 1;
        const tillStep = Math.min(label + 6, Math.pow(board.length, 2));
        let minValue = Infinity;
        for (let label = fromStep; label <= tillStep; label++) {
            let { rowIndex: row, columnIndex: column } = getRowColFromLabel(board, label);
            const canJumpToLabel = board[row][column];
            let steps;
            if (canJumpToLabel !== -1) {
                const temp = getRowColFromLabel(board, canJumpToLabel);
                steps =
                    1 + Math.min(iterate(row, column), iterate(temp.rowIndex, temp.columnIndex));
            } else {
                steps = 1 + iterate(row, column);
            }
            minValue = Math.min(steps, minValue);
        }
        addressed[`${rowIndex}_${columnIndex}`] = minValue;
        inProgress[`${rowIndex}_${columnIndex}`] = false;
        return minValue;
    }
    const resp = iterate(rowIndex, columnIndex);
    return resp;
};

console.log(
    snakesAndLadders(
        (board = [
            [-1, -1],
            [-1, -1],
        ]),
    ),
);

console.log(
    snakesAndLadders(
        (board = [
            [-1, -1],
            [-1, 1],
        ]),
    ),
);

console.log(
    2 ===
        snakesAndLadders(
            (board = [
                [-1, 4, -1],
                [6, 2, 6],
                [-1, 3, -1],
            ]),
        ),
);

console.log(
    snakesAndLadders(
        (board = [
            [-1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1],
            [-1, 35, -1, -1, 13, -1],
            [-1, -1, -1, -1, -1, -1],
            [-1, 15, -1, -1, -1, -1],
        ]),
    ),
);

console.log(
    snakesAndLadders(
        (board = [
            [-1, -1],
            [-1, 3],
        ]),
    ),
);
