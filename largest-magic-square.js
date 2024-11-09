var largestMagicSquare = function (grid) {
    const rowSum = [];
    const columnSum = [];
    const leftToRightDiagonalSum = [];
    const rightToLeftDiagonalSum = [];
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        rowSum[rowIndex] = [];
        for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
            rowSum[rowIndex][columnIndex] =
                grid[rowIndex][columnIndex] + (rowSum[rowIndex][columnIndex - 1] || 0);
        }
    }

    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        columnSum[rowIndex] = [];
        for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
            columnSum[rowIndex][columnIndex] =
                grid[rowIndex][columnIndex] +
                ((columnSum[rowIndex - 1] && columnSum[rowIndex - 1][columnIndex]) || 0);
        }
    }

    for (let rowIndex = grid.length - 1; rowIndex >= 0; rowIndex--) {
        let tempRowIndex = rowIndex;
        let tempColumnIndex = 0;
        let tempSum = 0;
        while ((grid[tempRowIndex] && grid[tempRowIndex][tempColumnIndex]) !== undefined) {
            if (!leftToRightDiagonalSum[tempRowIndex]) {
                leftToRightDiagonalSum[tempRowIndex] = [];
            }
            tempSum += grid[tempRowIndex][tempColumnIndex];
            leftToRightDiagonalSum[tempRowIndex][tempColumnIndex] = tempSum;
            tempRowIndex++;
            tempColumnIndex++;
        }
    }

    for (let columnIndex = 1; columnIndex < grid[0].length; columnIndex++) {
        let tempRowIndex = 0;
        let tempColumnIndex = columnIndex;
        let tempSum = 0;
        while ((grid[tempRowIndex] && grid[tempRowIndex][tempColumnIndex]) !== undefined) {
            if (!leftToRightDiagonalSum[tempRowIndex]) {
                leftToRightDiagonalSum[tempRowIndex] = [];
            }
            tempSum += grid[tempRowIndex][tempColumnIndex];
            leftToRightDiagonalSum[tempRowIndex][tempColumnIndex] = tempSum;
            tempRowIndex++;
            tempColumnIndex++;
        }
    }

    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        let tempRowIndex = rowIndex;
        let tempColumnIndex = 0;
        let tempSum = 0;
        while ((grid[tempRowIndex] && grid[tempRowIndex][tempColumnIndex]) !== undefined) {
            if (!rightToLeftDiagonalSum[tempRowIndex]) {
                rightToLeftDiagonalSum[tempRowIndex] = [];
            }
            tempSum += grid[tempRowIndex][tempColumnIndex];
            rightToLeftDiagonalSum[tempRowIndex][tempColumnIndex] = tempSum;
            tempRowIndex--;
            tempColumnIndex++;
        }
    }

    for (let columnIndex = 1; columnIndex < grid[0].length; columnIndex++) {
        let tempRowIndex = grid.length - 1;
        let tempColumnIndex = columnIndex;
        let tempSum = 0;
        while ((grid[tempRowIndex] && grid[tempRowIndex][tempColumnIndex]) !== undefined) {
            if (!rightToLeftDiagonalSum[tempRowIndex]) {
                rightToLeftDiagonalSum[tempRowIndex] = [];
            }
            tempSum += grid[tempRowIndex][tempColumnIndex];
            rightToLeftDiagonalSum[tempRowIndex][tempColumnIndex] = tempSum;
            tempRowIndex--;
            tempColumnIndex++;
        }
    }
    let output = 1;
    let maxPossibility = Math.min(grid[0].length, grid.length);
    let currentSizeMagicSquare = 3;
    while (currentSizeMagicSquare <= maxPossibility) {
        for (let rowIndex = 0; rowIndex <= grid.length - currentSizeMagicSquare; rowIndex++) {
            let hasBroken = false;
            for (
                let columnIndex = 0;
                columnIndex <= grid[rowIndex].length - currentSizeMagicSquare;
                columnIndex++
            ) {
                const bottomToTopDiagonalIndexes = {
                    rowIndex,
                    columnIndex: columnIndex + currentSizeMagicSquare - 1,
                };
                const topToBottomDiagonalIndexes = {
                    rowIndex: rowIndex + currentSizeMagicSquare - 1,
                    columnIndex: columnIndex + currentSizeMagicSquare - 1,
                };
                let store = null;
                let tempColumnIndex = columnIndex + currentSizeMagicSquare - 1;
                for (
                    let tempRowIndex = rowIndex;
                    tempRowIndex < rowIndex + currentSizeMagicSquare;
                    tempRowIndex++
                ) {
                    let curSum =
                        rowSum[tempRowIndex][tempColumnIndex] -
                        (rowSum[tempRowIndex][tempColumnIndex - currentSizeMagicSquare] || 0);
                    if (store == null) {
                        store = curSum;
                    } else if (store !== curSum) {
                        hasBroken = true;
                        break;
                    }
                }
                if (hasBroken) {
                    currentSizeMagicSquare++;
                    continue;
                }
                let tempRowIndex = rowIndex + currentSizeMagicSquare - 1;
                for (
                    let tempColumnIndex = columnIndex;
                    tempColumnIndex < columnIndex + currentSizeMagicSquare - 1;
                    tempColumnIndex++
                ) {
                    let curSum =
                        columnSum[tempRowIndex][tempColumnIndex] -
                        ((columnSum[tempRowIndex - currentSizeMagicSquare] &&
                            columnSum[tempRowIndex - currentSizeMagicSquare][tempColumnIndex]) ||
                            0);
                    if (store !== curSum) {
                        hasBroken = true;
                        break;
                    }
                }
                if (hasBroken) {
                    currentSizeMagicSquare++;
                    continue;
                }
                if (
                    rightToLeftDiagonalSum[bottomToTopDiagonalIndexes.rowIndex][
                        bottomToTopDiagonalIndexes.columnIndex
                    ] === store &&
                    leftToRightDiagonalSum[topToBottomDiagonalIndexes.rowIndex][
                        topToBottomDiagonalIndexes.columnIndex
                    ] === store
                ) {
                    output = Math.max(output, currentSizeMagicSquare);
                }
                currentSizeMagicSquare++;
            }
        }
    }
    return output;
};

console.log(
    largestMagicSquare(
        (grid = [
            [7, 1, 4, 5, 6],
            [2, 5, 1, 6, 4],
            [1, 5, 4, 3, 2],
            [1, 2, 7, 3, 4],
        ]),
    ),
);
console.log(
    largestMagicSquare(
        (grid = [
            [5, 1, 6],
            [5, 4, 3],
            [2, 7, 3],
        ]),
    ),
);

console.log(
    largestMagicSquare(
        (grid = [
            [1, 1],
            [1, 1],
        ]),
    ),
);
