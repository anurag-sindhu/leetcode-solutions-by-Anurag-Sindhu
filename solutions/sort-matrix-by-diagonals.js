/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function (grid) {
    let rowIndex = 0;
    let columnIndex = 0;
    //top to bottom
    rowIndex = 0;
    columnIndex = 0;
    let arr = [];
    while (rowIndex < grid.length - 1) {
        let initRow = rowIndex;
        arr[initRow] = [];
        for (; rowIndex < grid.length; rowIndex++) {
            const element = grid[rowIndex][columnIndex];
            arr[initRow].push(element);
            columnIndex++;
        }
        columnIndex = 0;
        rowIndex = initRow + 1;
    }
    for (const element of arr) {
        if (element) {
            element.sort((a, b) => b - a);
        }
    }
    //filling: top to bottom
    rowIndex = 0;
    columnIndex = 0;
    while (rowIndex < grid.length - 1) {
        let initRow = rowIndex;
        for (; rowIndex < grid.length; rowIndex++) {
            grid[rowIndex][columnIndex] = arr[initRow][columnIndex];
            columnIndex++;
        }
        columnIndex = 0;
        rowIndex = initRow + 1;
    }
    arr = [];
    //left to right
    rowIndex = 0;
    columnIndex = 1;
    while (rowIndex < grid.length - 1) {
        let col = 0;
        arr[rowIndex] = [];
        for (; columnIndex < grid.length; columnIndex++) {
            const element = grid[col][columnIndex];
            arr[rowIndex][columnIndex] = element;
            console.log(col, columnIndex, { element });
            col++;
        }
        columnIndex = ++rowIndex;
    }
    for (const element of arr) {
        if (element) {
            element.sort((a, b) => a - b);
        }
    }
    //filling: left to right
    rowIndex = 0;
    columnIndex = 1;
    while (rowIndex < grid.length - 1) {
        let col = 0;
        for (; columnIndex < grid.length; columnIndex++) {
            grid[col][columnIndex] = arr[rowIndex][col];
            col++;
        }
        columnIndex = ++rowIndex;
    }
    return grid;
};

console.log(
    sortMatrix(
        (grid = [
            [1, 7, 3, 3],
            [9, 8, 2, 2],
            [4, 5, 6, 6],
            [8, 9, 2, 1],
        ]),
    ),
);

console.log(
    sortMatrix(
        (grid = [
            [8, 2, 2, 3],
            [9, 6, 6, 3],
            [9, 5, 1, 7],
            [8, 4, 2, 1],
        ]),
    ),
);
console.log(
    sortMatrix(
        (grid = [
            [1, 7, 3],
            [9, 8, 2],
            [4, 5, 6],
        ]),
    ),
);
console.log(
    sortMatrix(
        (grid = [
            [0, 1],
            [1, 2],
        ]),
    ),
);
console.log(sortMatrix((grid = [[1]])));
