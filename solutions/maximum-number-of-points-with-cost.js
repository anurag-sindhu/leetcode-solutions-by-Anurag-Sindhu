function maxPoints(dp) {
    for (let rowIndex = 1; rowIndex < dp.length; rowIndex++) {
        let row = [];
        let tempMax = 0;
        for (let columnIndex = 0; columnIndex < dp[rowIndex].length; columnIndex++) {
            tempMax = Math.max(tempMax, dp[rowIndex - 1][columnIndex]);
            row[columnIndex] = tempMax;
            tempMax--;
        }
        for (let columnIndex = dp[rowIndex].length - 1; columnIndex >= 0; columnIndex--) {
            tempMax = Math.max(tempMax, dp[rowIndex - 1][columnIndex]);
            row[columnIndex] = Math.max(tempMax, row[columnIndex]);
            tempMax--;
        }
        for (let columnIndex = dp[rowIndex].length - 1; columnIndex >= 0; columnIndex--) {
            dp[rowIndex][columnIndex] += row[columnIndex];
        }
    }
    let max = -Infinity;
    const rowIndex = dp.length - 1;
    for (let index = 0; index < dp[rowIndex].length; index++) {
        max = Math.max(max, dp[rowIndex][index]);
    }
    return max;
}

console.log(
    maxPoints(
        (points = [
            [5, 2, 1, 2],
            [2, 1, 5, 2],
            [5, 5, 5, 0],
        ]),
    ) === 13,
);
var maxPoints1 = function (dp) {
    for (let rowIndex = 1; rowIndex < dp.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < dp[rowIndex].length; columnIndex++) {
            let max = -Infinity;
            for (let columnInd = 0; columnInd < dp[rowIndex].length; columnInd++) {
                max = Math.max(
                    dp[rowIndex - 1][columnInd] - Math.abs(columnInd - columnIndex),
                    max,
                );
            }
            dp[rowIndex][columnIndex] = dp[rowIndex][columnIndex] + max;
        }
    }
    let max = -Infinity;
    const rowIndex = dp.length - 1;
    for (let index = 0; index < dp[rowIndex].length; index++) {
        max = Math.max(max, dp[rowIndex][index]);
    }
    return max;
};

console.log(
    maxPoints(
        (points = [
            [1, 2, 3],
            [1, 5, 1],
            [3, 1, 1],
        ]),
    ) === 9,
);
console.log(
    maxPoints(
        (points = [
            [1, 5],
            [2, 3],
            [4, 2],
        ]),
    ) === 11,
);

/**
 *    dp[rowIndex][columnIndex] =
                dp[rowIndex][columnIndex] +
                Math.max(
                    dp[rowIndex - 1][columnIndex - 1] !== undefined
                        ? dp[rowIndex - 1][columnIndex - 1] - 1
                        : -Infinity,
                    dp[rowIndex - 1][columnIndex] !== undefined
                        ? dp[rowIndex - 1][columnIndex]
                        : -Infinity,
                    dp[rowIndex - 1][columnIndex + 1] !== undefined
                        ? dp[rowIndex - 1][columnIndex + 1] - 1
                        : -Infinity,
                );
 */
