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
    const labelAdd = {};
    let minSteps = Infinity;
    while (query.length) {
        const [label, steps] = query.shift();
        if (labelAdd[label] == undefined) {
            labelAdd[label] = {};
        }
        if (label > rowCount * rowCount) {
            continue;
        }
        if (label == rowCount * rowCount) {
            minSteps = Math.min(minSteps, steps);
        }
        const till = Math.min(label + 6, rowCount * rowCount);
        for (let index = label + 1; index <= till; index++) {
            let nextLabel = index;
            const rowCol = getRowColFromLabel(board, nextLabel);
            const { rowIndex, columnIndex } = rowCol;
            if (board[rowIndex] && board[rowIndex][columnIndex] !== -1) {
                const rowCol = getRowColFromLabel(board, board[rowIndex][columnIndex]);
                nextLabel = board[rowIndex][columnIndex];
            }
            if (labelAdd[label][nextLabel] <= steps + 1) {
                continue;
            }
            labelAdd[label][nextLabel] = steps + 1;
            query.push([nextLabel, steps + 1]);
        }
    }
    return minSteps === Infinity ? -1 : minSteps;
};

console.log(
    4 ==
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
    -1 ===
        snakesAndLadders(
            (board = [
                [1, 1, -1],
                [1, 1, 1],
                [-1, 1, 1],
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
