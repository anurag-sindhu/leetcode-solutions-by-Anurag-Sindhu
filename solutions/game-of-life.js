function getLiveNeighbours(curr, i, j, m, n) {
    let liveNeighbours = 0;

    if (i > 0) {
        if (curr[i - 1][j] === 1) liveNeighbours++; // upper
    }
    if (i < m - 1) {
        if (curr[i + 1][j] === 1) liveNeighbours++; // lower
    }
    if (j > 0) {
        if (curr[i][j - 1] === 1) liveNeighbours++; // left
    }
    if (j < n - 1) {
        if (curr[i][j + 1] === 1) liveNeighbours++; // right
    }

    if (i > 0 && j > 0) {
        if (curr[i - 1][j - 1] === 1) liveNeighbours++; // upper-left
    }
    if (i > 0 && j < n - 1) {
        if (curr[i - 1][j + 1] === 1) liveNeighbours++; // upper-right
    }
    if (i < m - 1 && j > 0) {
        if (curr[i + 1][j - 1] === 1) liveNeighbours++; // lower-left
    }
    if (i < m - 1 && j < n - 1) {
        if (curr[i + 1][j + 1] === 1) liveNeighbours++; // lower-right
    }

    return liveNeighbours;
}

function gameOfLife(board) {
    const m = board.length;
    const n = board[0].length;

    // Deep copy same as curr = board in C++
    const curr = board.map((row) => [...row]);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const ln = getLiveNeighbours(curr, i, j, m, n);

            if (board[i][j] === 0) {
                if (ln === 3) {
                    board[i][j] = 1;
                } // dead -> alive
            } else {
                if (ln < 2 || ln > 3) {
                    board[i][j] = 0;
                } // alive -> dead}
            }
        }
    }
    return board;
}

console.log(
    gameOfLife([
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],
    ]),
);
console.log(
    gameOfLife([
        [1, 1],
        [1, 0],
    ]),
);
