function crawlMatrix(grid, row, column, dynamicProgramming, exploringConfig = {}, count = 0) {
    if (dynamicProgramming[`${row}_${column}`] !== undefined) {
        return dynamicProgramming[`${row}_${column}`];
    }
    if (grid[row] == undefined || grid[row][column] === undefined) {
        return count;
    }
    const key = `${row}_${column}`;
    if (exploringConfig[key]) {
        return exploringConfig[key];
    }
    exploringConfig[key] = 1;
    let leftSide = 0;
    let rightSide = 0;
    let upSide = 0;
    let downSide = 0;
    if (
        grid[row] !== undefined &&
        grid[row][column - 1] !== undefined &&
        grid[row][column] < grid[row][column - 1]
    ) {
        leftSide = crawlMatrix(
            grid,
            row,
            column - 1,
            dynamicProgramming,
            exploringConfig,
            count + 1
        );
    }
    if (
        grid[row] !== undefined &&
        grid[row][column + 1] !== undefined &&
        grid[row][column] < grid[row][column + 1]
    ) {
        rightSide = crawlMatrix(
            grid,
            row,
            column + 1,
            dynamicProgramming,
            exploringConfig,
            count + 1
        );
    }
    if (
        grid[row - 1] !== undefined &&
        grid[row - 1][column] !== undefined &&
        grid[row][column] < grid[row - 1][column]
    ) {
        upSide = crawlMatrix(grid, row - 1, column, dynamicProgramming, exploringConfig, count + 1);
    }
    if (
        grid[row + 1] !== undefined &&
        grid[row + 1][column] !== undefined &&
        grid[row][column] < grid[row + 1][column]
    ) {
        downSide = crawlMatrix(
            grid,
            row + 1,
            column,
            dynamicProgramming,
            exploringConfig,
            count + 1
        );
    }
    dynamicProgramming[`${row}_${column}`] = 1 + Math.max(leftSide, rightSide, upSide, downSide);
    return dynamicProgramming[`${row}_${column}`];
}

var longestIncreasingPath = function(grid) {
    const dynamicProgramming = {};
    let output = 0;
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
            const score = crawlMatrix(grid, rowIndex, columnIndex, dynamicProgramming);
            if (output < score) {
                output = score;
            }
        }
    }
    return output;
};

console.log(longestIncreasingPath((matrix = [[3, 4, 5], [3, 6, 6], [2, 2, 1]])));
console.log(longestIncreasingPath((matrix = [[3, 4, 5], [3, 2, 6], [2, 2, 1]])));
console.log(longestIncreasingPath((matrix = [[9, 9, 4], [6, 6, 8], [2, 1, 1]])));
console.log(longestIncreasingPath((matrix = [[1]])));
