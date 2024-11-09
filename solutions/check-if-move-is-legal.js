var checkMove = function (board, rMove, cMove, color) {
    const mapping = {
        B: 'W',
        W: 'B',
    };
    board[rMove][cMove] = color;
    //move vertical

    let immediateBeside;
    let columnIndex;
    let rowIndex;

    for (
        immediateBeside = true, columnIndex = cMove, rowIndex = rMove + 1;
        rowIndex < board.length;
        rowIndex++
    ) {
        const element = board[rowIndex][columnIndex];
        if (immediateBeside) {
            immediateBeside = false;
            if (element !== mapping[color]) {
                break;
            }
        } else {
            if (element == color) {
                return true;
            } else if (element == `.`) {
                break;
            }
        }
    }

    for (
        immediateBeside = true, columnIndex = cMove, rowIndex = rMove - 1;
        rowIndex >= 0;
        rowIndex--
    ) {
        const element = board[rowIndex][columnIndex];
        if (immediateBeside) {
            immediateBeside = false;
            if (element !== mapping[color]) {
                break;
            }
        } else {
            if (element == color) {
                return true;
            } else if (element == `.`) {
                break;
            }
        }
    }
    //move horizontal
    for (
        immediateBeside = true, columnIndex = cMove + 1, rowIndex = rMove;
        columnIndex < board[rowIndex].length;
        columnIndex++
    ) {
        const element = board[rowIndex][columnIndex];
        if (immediateBeside) {
            immediateBeside = false;
            if (element !== mapping[color]) {
                break;
            }
        } else {
            if (element == color) {
                return true;
            } else if (element == `.`) {
                break;
            }
        }
    }

    for (
        immediateBeside = true, columnIndex = cMove - 1, rowIndex = rMove;
        columnIndex >= 0;
        columnIndex--
    ) {
        const element = board[rowIndex][columnIndex];
        if (immediateBeside) {
            immediateBeside = false;
            if (element !== mapping[color]) {
                break;
            }
        } else {
            if (element == color) {
                return true;
            } else if (element == `.`) {
                break;
            }
        }
    }
    // move diagonally
    // left to right
    for (
        immediateBeside = true, columnIndex = cMove + 1, rowIndex = rMove + 1;
        ;
        rowIndex++, columnIndex++
    ) {
        if (board[rowIndex] && board[rowIndex][columnIndex] !== undefined) {
            const element = board[rowIndex][columnIndex];
            if (immediateBeside) {
                immediateBeside = false;
                if (element !== mapping[color]) {
                    break;
                }
            } else {
                if (element == color) {
                    return true;
                } else if (element == `.`) {
                    break;
                }
            }
        } else {
            break;
        }
    }

    for (
        immediateBeside = true, columnIndex = cMove - 1, rowIndex = rMove - 1;
        ;
        rowIndex--, columnIndex--
    ) {
        if (board[rowIndex] && board[rowIndex][columnIndex] !== undefined) {
            const element = board[rowIndex][columnIndex];
            if (immediateBeside) {
                immediateBeside = false;
                if (element !== mapping[color]) {
                    break;
                }
            } else {
                if (element == color) {
                    return true;
                } else if (element == `.`) {
                    break;
                }
            }
        } else {
            break;
        }
    }

    // right to left
    for (
        immediateBeside = true, columnIndex = cMove + 1, rowIndex = rMove - 1;
        ;
        rowIndex--, columnIndex++
    ) {
        if (board[rowIndex] && board[rowIndex][columnIndex] !== undefined) {
            const element = board[rowIndex][columnIndex];
            if (immediateBeside) {
                immediateBeside = false;
                if (element !== mapping[color]) {
                    break;
                }
            } else {
                if (element == color) {
                    return true;
                } else if (element == `.`) {
                    break;
                }
            }
        } else {
            break;
        }
    }

    for (
        immediateBeside = true, rowIndex = rMove + 1, columnIndex = cMove - 1;
        columnIndex >= 0;
        rowIndex++, columnIndex--
    ) {
        if (board[rowIndex] && board[rowIndex][columnIndex] !== undefined) {
            const element = board[rowIndex][columnIndex];
            if (immediateBeside) {
                immediateBeside = false;
                if (element !== mapping[color]) {
                    break;
                }
            } else {
                if (element == color) {
                    return true;
                } else if (element == `.`) {
                    break;
                }
            }
        } else {
            break;
        }
    }
    return false;
};

console.log(
    checkMove(
        [
            ['B', '.', 'B', 'W', '.', '.', 'B', 'B'],
            ['B', '.', '.', 'W', '.', 'W', 'B', 'W'],
            ['B', '.', 'B', '.', 'W', 'W', 'W', 'W'],
            ['B', 'W', '.', 'B', '.', 'B', 'B', '.'],
            ['.', '.', 'B', 'W', 'W', '.', 'B', 'W'],
            ['B', 'B', '.', '.', 'W', '.', 'B', 'B'],
            ['.', 'B', 'W', '.', 'B', '.', 'W', '.'],
            ['B', '.', 'W', 'B', 'W', 'B', 'W', '.'],
        ],
        3,
        2,
        'W',
    ) === false,
);

console.log(
    checkMove(
        [
            ['W', 'B', 'B', 'W', 'W', 'B', '.', 'B'],
            ['W', '.', '.', 'W', 'B', '.', '.', 'B'],
            ['.', 'B', 'B', 'B', 'W', '.', 'W', '.'],
            ['B', 'W', 'B', '.', 'B', 'W', '.', '.'],
            ['W', 'W', '.', 'W', 'B', 'B', 'B', '.'],
            ['.', '.', '.', '.', 'W', '.', 'B', '.'],
            ['.', '.', 'B', 'W', 'W', 'B', 'B', '.'],
            ['B', 'B', '.', 'W', 'B', '.', 'B', '.'],
        ],
        3,
        7,
        'W',
    ) === false,
);
console.log(
    checkMove(
        (board = [
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', 'B', '.', '.', 'W', '.', '.', '.'],
            ['.', '.', 'W', '.', '.', '.', '.', '.'],
            ['.', '.', '.', 'W', 'B', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', 'B', 'W', '.', '.'],
            ['.', '.', '.', '.', '.', '.', 'W', '.'],
            ['.', '.', '.', '.', '.', '.', '.', 'B'],
        ]),
        (rMove = 4),
        (cMove = 4),
        (color = 'W'),
    ) === false,
);

console.log(
    checkMove(
        [
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', 'B', '.', '.', '.', '.'],
            ['.', '.', '.', 'W', '.', '.', '.', '.'],
            ['.', '.', '.', 'W', '.', '.', '.', '.'],
            ['W', 'B', 'B', '.', 'W', 'W', 'W', '.'],
            ['.', '.', '.', 'B', '.', '.', '.', '.'],
            ['.', '.', '.', 'B', '.', '.', '.', '.'],
            ['.', '.', '.', 'W', '.', '.', '.', '.'],
        ],
        4,
        3,
        'B',
    ) === true,
);

console.log(
    checkMove(
        (board = [
            ['.', '.', '.', 'B', '.', '.', '.', '.'],
            ['.', '.', '.', 'W', '.', '.', '.', '.'],
            ['.', '.', '.', 'W', '.', '.', '.', '.'],
            ['.', '.', '.', 'W', '.', '.', '.', '.'],
            ['W', 'B', 'B', '.', 'W', 'W', 'W', 'B'],
            ['.', '.', '.', 'B', '.', '.', '.', '.'],
            ['.', '.', '.', 'B', '.', '.', '.', '.'],
            ['.', '.', '.', 'W', '.', '.', '.', '.'],
        ]),
        (rMove = 4),
        (cMove = 3),
        (color = 'B'),
    ),
);
