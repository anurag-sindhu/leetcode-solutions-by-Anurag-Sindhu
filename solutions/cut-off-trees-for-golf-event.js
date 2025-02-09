function getNeighbors(grid, row, column) {
    const totalRows = grid.length;
    const totalColumns = grid[0].length;
    const neighbors = [];
    if (row > 0) {
        if (grid[row - 1] && grid[row - 1][column]) {
            neighbors.push({ rowIndex: row - 1, columnIndex: column });
        }
    }
    if (row < totalRows - 1) {
        if (grid[row + 1] && grid[row + 1][column]) {
            neighbors.push({ rowIndex: row + 1, columnIndex: column });
        }
    }

    if (column > 0) {
        if (grid[row] && grid[row][column - 1]) {
            neighbors.push({ rowIndex: row, columnIndex: column - 1 });
        }
    }

    if (column < totalColumns - 1) {
        if (grid[row] && grid[row][column + 1]) {
            neighbors.push({ rowIndex: row, columnIndex: column + 1 });
        }
    }
    return neighbors;
}

var cutOffTree = function (forest) {
    let isPath = false;
    for (let rowIndex = 0; rowIndex < forest.length; rowIndex++) {
        isPath = false;
        for (let columnIndex = 0; columnIndex < forest[rowIndex].length; columnIndex++) {
            const element = forest[rowIndex][columnIndex];
            if (element != 0) {
                isPath = true;
                break;
            }
        }
        if (isPath == false) {
            return -1;
        }
    }
    for (let columnIndex = 0; columnIndex < forest[0].length; columnIndex++) {
        isPath = false;
        for (let rowIndex = 0; rowIndex < forest.length; rowIndex++) {
            const element = forest[rowIndex][columnIndex];
            if (element != 0) {
                isPath = true;
                break;
            }
        }
        if (isPath == false) {
            return -1;
        }
    }
    let treeIndexMapping = {};
    let indexTreeMapping = {};
    let trees = [];
    let steps = 0;
    for (let rowIndex = 0; rowIndex < forest.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < forest[rowIndex].length; columnIndex++) {
            const element = forest[rowIndex][columnIndex];
            if (element) {
                treeIndexMapping[element] = `${rowIndex}_${columnIndex}`;
                indexTreeMapping[`${rowIndex}_${columnIndex}`] = element;
                trees.push(element);
            }
        }
    }
    trees.sort((a, b) => a - b);

    function findSteps(grid, sourceRow, sourceCol, destRow, destCol, path = {}) {
        const neighbor = getNeighbors(grid, sourceRow, sourceCol);
        let minSteps = Infinity;
        for (const { rowIndex, columnIndex } of neighbor) {
            const key = `${rowIndex}_${columnIndex}`;
            if (path[key]) {
                continue;
            }
            if (destRow === rowIndex && destCol == columnIndex) {
                return 0;
            }
            path[key] = true;
            const resp = 1 + findSteps(grid, rowIndex, columnIndex, destRow, destCol, path);
            minSteps = Math.min(resp, minSteps);
        }
        return minSteps;
    }

    let lastRowIndex = 0;
    let lastColumnIndex = 0;
    for (const element of trees) {
        const [rowIndex, columnIndex] = treeIndexMapping[element].split('_');
        const path = {};
        path[`${3 || lastRowIndex}_${3 || lastColumnIndex}`] = true;
        const minSteps =
            1 +
            findSteps(
                forest,
                3 || lastRowIndex,
                3 || lastColumnIndex,
                // Number(rowIndex),
                // Number(columnIndex),
                0,
                0,
                path,
            );
        steps += minSteps;
        lastRowIndex = Number(rowIndex);
        lastColumnIndex = Number(columnIndex);
    }
    return steps;
};

console.log(
    cutOffTree(
        (forest = [
            [54581641, 64080174, 24346381, 69107959],
            [86374198, 61363882, 68783324, 79706116],
            [668150, 92178815, 89819108, 94701471],
            [83920491, 22724204, 46281641, 47531096],
            [89078499, 18904913, 25462145, 60813308],
        ]),
    ) == 57,
);
console.log(
    cutOffTree(
        (forest = [
            [9, 2, 3],
            [0, 0, 7],
            [4, 0, 5],
            [8, 6, 1],
        ]),
    ),
);
console.log(
    cutOffTree(
        (forest = [
            [1, 2, 3],
            [0, 0, 4],
            [7, 6, 5],
        ]),
    ),
);
console.log(
    cutOffTree(
        (forest = [
            [1, 2, 3],
            [0, 0, 0],
            [7, 6, 5],
        ]),
    ),
);
console.log(
    cutOffTree(
        (forest = [
            [2, 3, 4],
            [0, 0, 5],
            [8, 7, 6],
        ]),
    ),
);
