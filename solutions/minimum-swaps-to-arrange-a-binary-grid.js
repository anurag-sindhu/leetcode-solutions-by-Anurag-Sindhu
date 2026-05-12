function findIndexWithGivenZero(grid, zeroRequired = null, fromRowIndex) {
    for (let rowIndex = fromRowIndex; rowIndex < grid.length; rowIndex++) {
        if (grid[rowIndex][0] >= zeroRequired) {
            return rowIndex;
        }
    }
    return -1;
}

var minSwaps = function (grid) {
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        let count = 0;
        for (let columnIndex = grid[rowIndex].length - 1; columnIndex >= 0; columnIndex--) {
            if (grid[rowIndex][columnIndex] == 0) {
                count += 1;
            } else {
                break;
            }
        }
        grid[rowIndex][0] = count;
    }

    let totalZeroRequired = grid.length - 1;
    let steps = 0;
    for (let rowIndex = 0; rowIndex < grid.length - 1; rowIndex++) {
        if (totalZeroRequired > grid[rowIndex][0]) {
            const targetIndex = findIndexWithGivenZero(grid, totalZeroRequired, rowIndex + 1);
            if (targetIndex === -1) {
                return targetIndex;
            }
            steps += targetIndex - rowIndex;
            const arrFromTopToCurrent = grid.slice(0, rowIndex);
            const arrFromCurrentTillTargetIndex = grid.slice(rowIndex, targetIndex);
            const targetArr = grid[targetIndex];
            const arrAfterTargetTillLastIndex = grid.slice(targetIndex + 1);
            grid = [
                ...arrFromTopToCurrent,
                targetArr,
                ...arrFromCurrentTillTargetIndex,
                ...arrAfterTargetTillLastIndex,
            ];
        }
        totalZeroRequired -= 1;
    }
    return steps;
};

console.log(
    minSwaps(
        (grid = [
            [1, 0, 0],
            [1, 1, 0],
            [1, 1, 1],
        ]),
    ),
);

console.log(
    minSwaps(
        (grid = [
            [0, 0, 1],
            [1, 1, 0],
            [1, 0, 0],
        ]),
    ),
);
console.log(
    minSwaps(
        (grid = [
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
        ]),
    ),
);
