var maxScore = function (grid) {
    const newGrid = [];
    for (let index = 0; index < grid.length; index++) {
        if (!newGrid[index]) {
            newGrid[index] = [];
        }
        for (let colIndex = 0; colIndex < grid[index].length; colIndex++) {
            const element = grid[index][colIndex];
            newGrid[index][element] = true;
        }
    }
    let prevElement = 0;
    let maxColumnIndex = 0;
    for (let rowIndex = 0; rowIndex < newGrid.length; rowIndex++) {
        prevElement = 0;
        for (let columnIndex = 0; columnIndex < newGrid[rowIndex].length; columnIndex++) {
            const element = newGrid[rowIndex][columnIndex];
            newGrid[rowIndex][columnIndex] = element !== undefined ? columnIndex : prevElement;
            prevElement = newGrid[rowIndex][columnIndex];
            maxColumnIndex = Math.max(maxColumnIndex, columnIndex);
        }
    }
    for (let rowIndex = 0; rowIndex < newGrid.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex <= maxColumnIndex; columnIndex++) {
            const element = newGrid[rowIndex][columnIndex];
            if (element == undefined) {
                newGrid[rowIndex][columnIndex] = newGrid[rowIndex][columnIndex - 1];
            }
        }
    }
    const collectedNum = [];
    for (let rowIndex = 0; rowIndex < newGrid.length; rowIndex++) {
        for (let tempRow = 0; tempRow < newGrid.length; tempRow++) {
            for (let columnIndex = newGrid[tempRow].length - 1; columnIndex >= 0; columnIndex--) {
                const element = newGrid[rowIndex][columnIndex];
                const doesItHas = collectedNum.find((value) => value == element);
                if (doesItHas == undefined) {
                    collectedNum.push(element);
                    break;
                }
            }
        }
    }
    let maxSum = 0;
    let mapping = {};
    function iterate(grid, rowIndex, sum) {
        if (!(rowIndex < grid.length)) {
            return;
        }
        for (let colIndex = grid[rowIndex].length - 1; colIndex > 0; colIndex--) {
            const selectedElement = grid[rowIndex][colIndex];
            if (mapping[selectedElement]) {
                continue;
            }
            mapping[selectedElement] = true;
            maxSum = Math.max(selectedElement + sum, maxSum);
            iterate(grid, rowIndex + 1, sum + selectedElement);
            mapping[selectedElement] = false;
        }
    }
    iterate(newGrid, 0, (sum = 0));
    return maxSum;
};
console.log(
    maxScore(
        (grid = [
            [1, 2, 3, 7, 8],
            [5, 4, 3, 8, 7],
            [0, 0, 0, 0, 3],
            [3, 2, 1, 1, 1],
        ]),
    ),
);
console.log(
    maxScore(
        (grid = [
            [1, 2, 3, 7, 8],
            [5, 4, 3, 8, 7],
            [4, 2, 1, 1, 1],
            [3, 2, 1, 1, 1],
        ]),
    ),
);

console.log(
    maxScore(
        (grid = [
            [8, 7, 6],
            [8, 3, 2],
        ]),
    ),
);

console.log(
    maxScore(
        (grid = [
            [1, 2, 3],
            [4, 3, 2],
            [1, 1, 1],
        ]),
    ),
);
