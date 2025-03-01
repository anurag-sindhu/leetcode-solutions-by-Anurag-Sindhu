function findPossiblePath(grid, rowIndex, colIndex) {
    if (rowIndex == 0) {
        if (grid[rowIndex][colIndex + 1] !== undefined) {
            return [
                { row: 0, col: colIndex + 1 },
                { row: 1, col: colIndex },
            ];
        } else {
            return [{ row: 1, col: colIndex }];
        }
    } else {
        if (grid[rowIndex][colIndex + 1] !== undefined) {
            return [{ row: 1, col: colIndex + 1 }];
        }
        return [];
    }
}

var gridGame = function (grid) {
    let path = {};
    function gridGameHelperMinPath(rowIndex, colIndex) {
        let pathName = `${rowIndex}_${colIndex}`;
        if (rowIndex === 1 && colIndex == grid[0].length - 1) {
            return grid[rowIndex][grid[0].length - 1];
        }
        if (path[pathName] !== undefined && path[pathName] !== Infinity) {
            return path[pathName];
        }
        const possiblePath = findPossiblePath(grid, rowIndex, colIndex);
        if (possiblePath.length) {
            let maxPotential = -Infinity;
            for (const { row, col } of possiblePath) {
                const potential = gridGameHelperMinPath(row, col);
                const temp = potential + grid[rowIndex][colIndex];
                if (maxPotential == -Infinity) {
                    console.log({ row, col });
                    maxPotential = temp;
                }
                if (maxPotential < temp) {
                    maxPotential = temp;
                    console.log({ row, col });
                }
            }
            // console.log({ rowIndex, colIndex });
            path[pathName] = maxPotential;
            return maxPotential;
        }
    }
    gridGameHelperMinPath(0, 0, { [`${0}_${0}`]: Infinity });

    return;
};

console.log(
    gridGame(
        (grid = [
            [2, 5, 4],
            [1, 5, 1],
        ]),
    ),
);

console.log(
    gridGame(
        (grid = [
            [1, 3, 1, 15],
            [1, 3, 3, 1],
        ]),
    ),
);

console.log(
    gridGame(
        (grid = [
            [1, 3, 1, 15],
            [7, 3, 3, 1],
        ]),
    ),
);
console.log(
    gridGame(
        (grid = [
            [3, 3, 1],
            [8, 5, 2],
        ]),
    ),
);
