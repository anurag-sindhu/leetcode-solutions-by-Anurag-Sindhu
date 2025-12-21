var minPathSum = function (grid) {
    const arr = [];
    function findMinSum(rowIndex, colIndex) {
        if (arr[rowIndex] !== undefined && arr[rowIndex][colIndex] !== undefined) {
            return arr[rowIndex][colIndex];
        }
        if (grid[rowIndex] == undefined || grid[rowIndex][colIndex] == undefined) {
            return Infinity;
        }
        if (rowIndex == grid.length - 1 && colIndex == grid[0].length - 1) {
            return grid[grid.length - 1][grid[0].length - 1];
        }
        const first = findMinSum(rowIndex + 1, colIndex);
        const second = findMinSum(rowIndex, colIndex + 1);
        const output = grid[rowIndex][colIndex] + Math.min(first, second);
        if (arr[rowIndex] == undefined) {
            arr[rowIndex] = [];
        }
        arr[rowIndex][colIndex] = output;
        return output;
    }
    const resp = findMinSum(0, 0);
    return resp;
};

console.log(
    12 ==
        minPathSum([
            [1, 2, 3],
            [4, 5, 6],
        ]),
);

console.log(
    7 ==
        minPathSum([
            [1, 3, 1],
            [1, 5, 1],
            [4, 2, 1],
        ]),
);
