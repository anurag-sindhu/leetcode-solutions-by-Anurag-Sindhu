var minFallingPathSum = function (dp) {
    for (let rowIndex = dp.length - 2; rowIndex >= 0; rowIndex--) {
        for (let columnIndex = 0; columnIndex < dp[rowIndex].length; columnIndex++) {
            dp[rowIndex][columnIndex] =
                dp[rowIndex][columnIndex] +
                Math.min(
                    dp[rowIndex + 1][columnIndex - 1] !== undefined
                        ? dp[rowIndex + 1][columnIndex - 1]
                        : Infinity,
                    dp[rowIndex + 1][columnIndex] !== undefined
                        ? dp[rowIndex + 1][columnIndex]
                        : Infinity,
                    dp[rowIndex + 1][columnIndex + 1] !== undefined
                        ? dp[rowIndex + 1][columnIndex + 1]
                        : Infinity,
                );
        }
    }
    let min = Infinity;
    for (let index = 0; index < dp[0].length.length; index++) {
        min = Math
    }
    return min;
};

console.log(
    minFallingPathSum(
        (matrix = [
            [2, 1, 3],
            [6, 5, 4],
            [7, 8, 9],
        ]),
    ),
);
console.log(
    minFallingPathSum(
        (matrix = [
            [-19, 57],
            [-40, -5],
        ]),
    ),
);
