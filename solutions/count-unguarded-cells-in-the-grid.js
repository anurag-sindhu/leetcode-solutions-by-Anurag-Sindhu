function getNeighbors(totalRows, totalColumns, row, column) {
    const neighbors = [];
    if (row > 0) {
        neighbors.push({ rowIndex: row - 1, columnIndex: column });
    }

    if (column > 0) {
        neighbors.push({ rowIndex: row, columnIndex: column - 1 });
    }

    return neighbors;
}

var countUnguarded = function (m, n, guards, walls) {
    const matrixLeftToRight = [];
    const matrixRightToLeft = [];
    const matrixUpToDown = [];
    const matrixDownToUp = [];
    const matrix1 = [];
    for (let rowIndex = 0; rowIndex < m; rowIndex++) {
        matrixLeftToRight[rowIndex] = [];
        matrixRightToLeft[rowIndex] = [];
        matrixUpToDown[rowIndex] = [];
        matrixDownToUp[rowIndex] = [];
        for (let columnIndex = 0; columnIndex < n; columnIndex++) {
            matrixLeftToRight[rowIndex].push(0);
            matrixRightToLeft[rowIndex].push(0);
            matrixUpToDown[rowIndex].push(0);
            matrixDownToUp[rowIndex].push(0);
        }
    }

    for (const [row, column] of walls) {
        matrixLeftToRight[row][column] = 'W';
        matrixRightToLeft[row][column] = 'W';
        matrixUpToDown[row][column] = 'W';
        matrixDownToUp[row][column] = 'W';
    }

    for (const [row, column] of guards) {
        matrixLeftToRight[row][column] = 'G';
        matrixRightToLeft[row][column] = 'G';
        matrixUpToDown[row][column] = 'G';
        matrixDownToUp[row][column] = 'G';
    }

    for (let rowIndex = 0; rowIndex < matrixLeftToRight.length; rowIndex++) {
        for (let columnINdex = 0; columnINdex < matrixLeftToRight[rowIndex].length; columnINdex++) {
            if (matrixLeftToRight[rowIndex][columnINdex] === 0) {
                if (matrixLeftToRight[rowIndex][columnINdex - 1] === 'G') {
                    matrixLeftToRight[rowIndex][columnINdex] = 'G';
                }
            }
        }
    }

    for (let rowIndex = 0; rowIndex < matrixRightToLeft.length; rowIndex++) {
        for (
            let columnINdex = matrixRightToLeft[rowIndex].length - 1;
            columnINdex >= 0;
            columnINdex--
        ) {
            if (matrixRightToLeft[rowIndex][columnINdex] === 0) {
                if (matrixRightToLeft[rowIndex][columnINdex + 1] === 'G') {
                    matrixRightToLeft[rowIndex][columnINdex] = 'G';
                }
            }
        }
    }

    for (let rowIndex = 0; rowIndex < matrixUpToDown.length; rowIndex++) {
        for (let columnINdex = 0; columnINdex < matrixUpToDown[rowIndex].length; columnINdex++) {
            if (matrixUpToDown[rowIndex][columnINdex] === 0) {
                if (
                    matrixUpToDown[rowIndex - 1] &&
                    matrixUpToDown[rowIndex - 1][columnINdex] === 'G'
                ) {
                    matrixUpToDown[rowIndex][columnINdex] = 'G';
                }
            }
        }
    }

    for (let rowIndex = matrixDownToUp.length - 1; rowIndex >= 0; rowIndex--) {
        for (
            let columnINdex = matrixDownToUp[rowIndex].length - 1;
            columnINdex >= 0;
            columnINdex--
        ) {
            if (matrixDownToUp[rowIndex][columnINdex] === 0) {
                if (
                    matrixDownToUp[rowIndex + 1] &&
                    matrixDownToUp[rowIndex + 1][columnINdex] === 'G'
                ) {
                    matrixDownToUp[rowIndex][columnINdex] = 'G';
                }
            }
        }
    }

    let count = 0;

    for (let rowIndex = 0; rowIndex < m; rowIndex++) {
        for (let columnIndex = 0; columnIndex < n; columnIndex++) {
            if (
                matrixLeftToRight[rowIndex][columnIndex] === 0 &&
                matrixRightToLeft[rowIndex][columnIndex] === 0 &&
                matrixUpToDown[rowIndex][columnIndex] === 0 &&
                matrixDownToUp[rowIndex][columnIndex] === 0
            ) {
                count += 1;
            }
        }
    }

    return count;
};

console.log(
    countUnguarded(
        (m = 3),
        (n = 3),
        (guards = [[1, 1]]),
        (walls = [
            [0, 1],
            [1, 0],
            [2, 1],
            [1, 2],
        ]),
    ),
);

console.log(
    countUnguarded(
        (m = 4),
        (n = 6),
        (guards = [
            [0, 0],
            [1, 1],
            [2, 3],
        ]),
        (walls = [
            [0, 1],
            [2, 2],
            [1, 4],
        ]),
    ),
);
