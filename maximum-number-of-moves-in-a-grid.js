function getNeighbors(array, rowIndex, columnIndex) {
    const neighbors = [];
    if (array[rowIndex] && array[rowIndex][columnIndex + 1] !== undefined) {
        neighbors.push({
            rowIndex: rowIndex,
            columnIndex: columnIndex + 1,
        });
    }
    if (
        array[rowIndex - 1] &&
        array[rowIndex - 1][columnIndex + 1] !== undefined
    ) {
        neighbors.push({
            rowIndex: rowIndex - 1,
            columnIndex: columnIndex + 1,
        });
    }
    if (
        array[rowIndex + 1] &&
        array[rowIndex + 1][columnIndex + 1] !== undefined
    ) {
        neighbors.push({
            rowIndex: rowIndex + 1,
            columnIndex: columnIndex + 1,
        });
    }
    return neighbors;
}



var maxMoves = function (grid) {
    const memoize = {};
    const explore = function (grid, rIndex, cIndex,) {
        let maxDistanceTraveled = 0;
        if (memoize[`${rIndex}_${cIndex}`] !== undefined) {
            return memoize[`${rIndex}_${cIndex}`];
        }
        const neighbors = getNeighbors(grid, rIndex, cIndex);
        for (const { rowIndex, columnIndex } of neighbors) {
            if (grid[rIndex][cIndex] < grid[rowIndex][columnIndex]) {
                const tempMax = explore(grid, rowIndex, columnIndex,);
                memoize[`${rowIndex}_${columnIndex}`] = tempMax;
                if (tempMax > maxDistanceTraveled) {
                    maxDistanceTraveled = tempMax;
                }
            }
        }
        return 1 + maxDistanceTraveled;
    };

    let output = -Infinity;
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        for (
            let columnIndex = 0;
            columnIndex < 1;
            columnIndex++
        ) {
            const maxDistanceTraveled = explore(grid, rowIndex, columnIndex);
            if (maxDistanceTraveled > output) {
                output = maxDistanceTraveled
            }
            memoize[`${rowIndex}_${columnIndex}`] = maxDistanceTraveled;
        }
    }
    return output - 1;
};

console.log(maxMoves((grid = [[3, 2, 4], [2, 1, 9], [1, 1, 7]])));
console.log(
    maxMoves(
        (grid = [[2, 4, 3, 5], [5, 4, 9, 3], [3, 4, 2, 11], [10, 9, 13, 15]])
    )
);
