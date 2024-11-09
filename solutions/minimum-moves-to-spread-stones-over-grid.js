var minimumMoves = function (grid) {
    let totalDist = 0;
    const extraCoin = [];
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
            const element = grid[rowIndex][columnIndex];
            if (element > 1) {
                extraCoin.push([rowIndex, columnIndex]);
            }
        }
    }
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
            const element = grid[rowIndex][columnIndex];
            if (element === 0) {
                let dist = Infinity;
                let distExtraCoinIndex = 0;
                for (let index = extraCoin.length - 1; index >= 0; index--) {
                    if (!extraCoin[index]) {
                        continue;
                    }
                    const [row, column] = extraCoin[index];
                    const tempDist = Math.abs(row - rowIndex) + Math.abs(column - columnIndex);
                    if (tempDist <= dist) {
                        dist = tempDist;
                        distExtraCoinIndex = index;
                    }
                }
                grid[extraCoin[distExtraCoinIndex][0]][extraCoin[distExtraCoinIndex][1]] -= 1;
                const balance =
                    grid[extraCoin[distExtraCoinIndex][0]][extraCoin[distExtraCoinIndex][1]];
                if (balance === 1) {
                    extraCoin[distExtraCoinIndex] = undefined;
                }
                totalDist += dist;
            }
        }
    }

    return totalDist;
};

console.log(
    minimumMoves(
        (grid = [
            [3, 2, 0],
            [0, 1, 0],
            [0, 3, 0],
        ]),
    ) === 7,
);

console.log(
    minimumMoves(
        (grid = [
            [1, 3, 0],
            [1, 0, 0],
            [1, 0, 3],
        ]),
    ) === 4,
);

console.log(
    minimumMoves(
        (grid = [
            [1, 1, 0],
            [1, 1, 1],
            [1, 2, 1],
        ]),
    ) === 3,
);
