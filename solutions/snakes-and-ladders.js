function getRowColFromLabel(board, num) {
    const n = board.length;
    const idx = num - 1;

    // Calculate row from top
    const rowFromBottom = Math.floor(idx / n);
    const rowIndex = n - 1 - rowFromBottom;

    // Alternating column logic based on row from the bottom
    const columnIndex = rowFromBottom % 2 === 0 ? idx % n : n - 1 - (idx % n);

    return { rowIndex, columnIndex };
}

var snakesAndLadders = function (board) {
    const query = [[1, 0]];
    const rowCount = board.length;
    const labelAdd = { 1: 0 };
    let minSteps = Infinity;
    while (query.length) {
        const [label, steps] = query.shift();
        if (label > rowCount * rowCount) {
            continue;
        }
        if (label == rowCount * rowCount) {
            minSteps = Math.min(minSteps, steps);
        }
        const rowCol = getRowColFromLabel(board, label);
        const { rowIndex, columnIndex } = rowCol;
        if (board[rowIndex] && board[rowIndex][columnIndex] !== -1) {
            const rowCol = getRowColFromLabel(board, board[rowIndex][columnIndex]);
            if (labelAdd[board[rowIndex][columnIndex]] < steps + 1) {
                continue;
            }
            labelAdd[board[rowIndex][columnIndex]] = steps + 1;
            query.push([board[rowIndex][columnIndex], steps + 1]);
        }
        for (let index = label + 1; index <= Math.min(label + 6, rowCount * rowCount); index++) {
            if (labelAdd[index] <= steps + 1) {
                continue;
            }
            labelAdd[index] = steps + 1;
            query.push([index, steps + 1]);
        }
        console.log('');
    }
    return minSteps;
};

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
            [-1, -1],
            [-1, 3],
        ]),
    ),
);

console.log(
    getRowColFromLabel(
        (board = [
            [-1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1],
            [-1, 35, -1, -1, 13, -1],
            [-1, -1, -1, -1, -1, -1],
            [-1, 15, -1, -1, -1, -1],
        ]),
        7,
    ),
);

console.log(
    getRowColFromLabel(
        (board = [
            [-1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1],
            [-1, 35, -1, -1, 13],
            [-1, -1, -1, -1, -1],
        ]),
        5,
    ),
);
