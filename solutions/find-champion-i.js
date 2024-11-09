var findChampion = function (grid) {
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        let hasNotWon = false;
        for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
            if (rowIndex !== columnIndex && grid[rowIndex][columnIndex] !== 1) {
                hasNotWon = true;
                break;
            }
        }
        if (!hasNotWon) {
            return rowIndex;
        }
    }
};

console.log(
    findChampion(
        (grid = [
            [0, 1],
            [0, 0],
        ]),
    ),
);
console.log(
    findChampion(
        (grid = [
            [0, 0, 1],
            [1, 0, 1],
            [0, 0, 0],
        ]),
    ),
);
