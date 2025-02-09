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

var generateMatrix = function (size) {
    const output = [];
    const storage = {};
    let count = 2;
    let movement = `row`;
    let rowIndex = 0;
    let columnIndex = 0;
    let tempSize = size * size;
    for (let rowIndex = 0; rowIndex < size; rowIndex++) {
        output[rowIndex] = [];
        for (let columnIndex = 0; columnIndex < size; columnIndex++) {
            output[rowIndex][columnIndex] = 1;
        }
    }
    while (tempSize--) {
        storage[`${rowIndex}_${columnIndex}`] = true;
        const neighbors = getNeighbors(output, rowIndex, columnIndex, storage);
        if (Object.keys(neighbors).length === 0) {
            break;
        }
        if (Object.keys(neighbors).length === 1) {
            if (neighbors.right) {
                rowIndex = neighbors.right.rowIndex;
                columnIndex = neighbors.right.columnIndex;
                if (!output[neighbors.right.columnIndex]) {
                    output[neighbors.right.columnIndex] = [];
                }
                output[neighbors.right.rowIndex][neighbors.right.columnIndex] = count++;
                movement = `row`;
            } else if (neighbors.left) {
                rowIndex = neighbors.left.rowIndex;
                columnIndex = neighbors.left.columnIndex;
                if (!output[neighbors.left.columnIndex]) {
                    output[neighbors.left.columnIndex] = [];
                }
                output[neighbors.left.rowIndex][neighbors.left.columnIndex] = count++;
                movement = `row`;
            } else if (neighbors.down) {
                rowIndex = neighbors.down.rowIndex;
                columnIndex = neighbors.down.columnIndex;
                if (!output[neighbors.down.columnIndex]) {
                    output[neighbors.down.columnIndex] = [];
                }
                output[neighbors.down.rowIndex][neighbors.down.columnIndex] = count++;
                movement = `column`;
            } else {
                rowIndex = neighbors.up.rowIndex;
                columnIndex = neighbors.up.columnIndex;
                if (!output[neighbors.up.columnIndex]) {
                    output[neighbors.up.columnIndex] = [];
                }
                output[neighbors.up.rowIndex][neighbors.up.columnIndex] = count++;
                movement = `column`;
            }
        } else {
            if (movement === `row`) {
                if (neighbors.right) {
                    rowIndex = neighbors.right.rowIndex;
                    columnIndex = neighbors.right.columnIndex;
                    if (!output[neighbors.right.columnIndex]) {
                        output[neighbors.right.columnIndex] = [];
                    }
                    output[neighbors.right.rowIndex][neighbors.right.columnIndex] = count++;
                } else {
                    rowIndex = neighbors.left.rowIndex;
                    columnIndex = neighbors.left.columnIndex;
                    if (!output[neighbors.left.columnIndex]) {
                        output[neighbors.left.columnIndex] = [];
                    }
                    output[neighbors.left.rowIndex][neighbors.left.columnIndex] = count++;
                }
            } else {
                if (neighbors.up) {
                    rowIndex = neighbors.up.rowIndex;
                    columnIndex = neighbors.up.columnIndex;
                    if (!output[neighbors.up.columnIndex]) {
                        output[neighbors.up.columnIndex] = [];
                    }
                    output[neighbors.up.rowIndex][neighbors.up.columnIndex] = count++;
                } else {
                    rowIndex = neighbors.down.rowIndex;
                    columnIndex = neighbors.down.columnIndex;
                    if (!output[neighbors.down.columnIndex]) {
                        output[neighbors.down.columnIndex] = [];
                    }
                    output[neighbors.down.rowIndex][neighbors.down.columnIndex] = count++;
                }
            }
        }
    }
    return output;
};

console.log(generateMatrix(3));
