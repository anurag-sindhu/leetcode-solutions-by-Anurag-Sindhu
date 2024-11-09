var transpose = function (matrix) {
    let output = [];

    for (let columnIndex = 0; columnIndex < matrix[0].length; columnIndex++) {
        if (!output[columnIndex]) {
            output[columnIndex] = [];
        }
        for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
            output[columnIndex].push(matrix[rowIndex][columnIndex]);
        }
    }
    return output;
};

console.log(
    transpose(
        (matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ])
    )
);

console.log(
    transpose(
        (matrix = [
            [1, 2, 3],
            [4, 5, 6]
        ])
    )
);
