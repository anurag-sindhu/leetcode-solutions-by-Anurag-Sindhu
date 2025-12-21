function getIndexesForZero(array) {
    const arr = [];
    for (let rowIndex = 0; rowIndex < array.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < array[rowIndex].length; columnIndex++) {
            if (!array[rowIndex][columnIndex]) {
                arr.push([rowIndex, columnIndex]);
            }
        }
    }
    return arr;
}

function updateRow(array, rowIndex) {
    array[rowIndex].forEach((value, index, arr) => (arr[index] = 0));
}

function updateColumn(array, columnIndex) {
    for (let index = 0; index < array.length; index++) {
        array[index][columnIndex] = 0;
    }
}

var setZeroes1 = function (array) {
    const indexesForZero = getIndexesForZero(array);
    for (const [rowIndex, columnIndex] of indexesForZero) {
        updateRow(array, rowIndex);
        updateColumn(array, columnIndex);
    }
};

function setZeroes(matrix) {
    let col0 = 1;
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Step 1: mark rows and cols
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            // col0 = 0;
        }
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Step 2: set zeroes bottom-up
    for (let i = rows - 1; i >= 0; i--) {
        for (let j = cols - 1; j >= 1; j--) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
        if (col0 === 0) {
            // matrix[i][0] = 0;
        }
    }
    return matrix;
}

console.log(
    setZeroes([
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5],
    ]),
);
console.log(
    setZeroes([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
    ]),
);
