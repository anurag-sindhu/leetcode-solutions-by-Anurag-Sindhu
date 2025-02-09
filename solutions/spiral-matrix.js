const { areTwoArrayEqual } = require('../javascript/compare-two-array.js');

function getNeighbors(array, rowIndex, columnIndex, storage) {
    const neighbors = {};
    if (
        array[rowIndex] &&
        array[rowIndex][columnIndex + 1] !== undefined &&
        !storage[`${rowIndex}_${columnIndex + 1}`]
    ) {
        neighbors.right = { rowIndex: rowIndex, columnIndex: columnIndex + 1 };
    }

    if (
        array[rowIndex] &&
        array[rowIndex][columnIndex - 1] !== undefined &&
        !storage[`${rowIndex}_${columnIndex - 1}`]
    ) {
        neighbors.left = { rowIndex: rowIndex, columnIndex: columnIndex - 1 };
    }
    if (
        array[rowIndex + 1] &&
        array[rowIndex + 1][columnIndex] !== undefined &&
        !storage[`${rowIndex + 1}_${columnIndex}`]
    ) {
        neighbors.down = { rowIndex: rowIndex + 1, columnIndex: columnIndex };
    }
    if (
        array[rowIndex - 1] &&
        array[rowIndex - 1][columnIndex] !== undefined &&
        !storage[`${rowIndex - 1}_${columnIndex}`]
    ) {
        neighbors.up = { rowIndex: rowIndex - 1, columnIndex: columnIndex };
    }
    return neighbors;
}

var spiralOrder = function (matrix) {
    const output = [];
    const storage = {};
    let movement = `row`;
    let rowIndex = 0;
    let columnIndex = 0;
    while (true) {
        output.push(matrix[rowIndex][columnIndex]);
        storage[`${rowIndex}_${columnIndex}`] = true;
        const neighbors = getNeighbors(matrix, rowIndex, columnIndex, storage);
        if (Object.keys(neighbors).length === 0) {
            break;
        }
        if (Object.keys(neighbors).length === 1) {
            if (neighbors.right) {
                rowIndex = neighbors.right.rowIndex;
                columnIndex = neighbors.right.columnIndex;
                movement = `row`;
            } else if (neighbors.left) {
                rowIndex = neighbors.left.rowIndex;
                columnIndex = neighbors.left.columnIndex;
                movement = `row`;
            } else if (neighbors.down) {
                rowIndex = neighbors.down.rowIndex;
                columnIndex = neighbors.down.columnIndex;
                movement = `column`;
            } else {
                rowIndex = neighbors.up.rowIndex;
                columnIndex = neighbors.up.columnIndex;
                movement = `column`;
            }
        } else {
            if (movement === `row`) {
                if (neighbors.right) {
                    rowIndex = neighbors.right.rowIndex;
                    columnIndex = neighbors.right.columnIndex;
                } else {
                    rowIndex = neighbors.left.rowIndex;
                    columnIndex = neighbors.left.columnIndex;
                }
            } else {
                if (neighbors.up) {
                    rowIndex = neighbors.up.rowIndex;
                    columnIndex = neighbors.up.columnIndex;
                } else {
                    rowIndex = neighbors.down.rowIndex;
                    columnIndex = neighbors.down.columnIndex;
                }
            }
        }
    }
    return output;
};

console.log(
    areTwoArrayEqual(
        spiralOrder([
            [2, 5],
            [8, 4],
            [0, -1],
        ]),
        [2, 5, 4, -1, 0, 8],
    ),
);
console.log(areTwoArrayEqual(spiralOrder([[3], [2]]), [3, 2]));
console.log(
    areTwoArrayEqual(
        spiralOrder([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ]),
        [1, 2, 3, 6, 9, 8, 7, 4, 5],
    ),
);
console.log(
    areTwoArrayEqual(
        spiralOrder([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
        ]),
        [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
    ),
);
console.log(
    areTwoArrayEqual(
        spiralOrder([
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5],
        ]),
        [1, 2, 3, 4, 5, 5, 5, 5, 5, 4, 3, 2, 1, 1, 1, 1, 2, 3, 4, 4, 4, 3, 2, 2, 3],
    ),
);
