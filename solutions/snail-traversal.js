const thiss = [
    19,
    10,
    3,
    7,
    9,
    8,
    5,
    2,
    1,
    17,
    16,
    14,
    12,
    18,
    6,
    13,
    11,
    20,
    4,
    15,
];

function snail(rowsCount, colsCount) {
    const output = [];
    for (let rowIndex = 0; rowIndex < rowsCount; rowIndex++) {
        output[rowIndex] = [];
        for (let columnIndex = 0; columnIndex < colsCount; columnIndex++) {
            if (columnIndex % 2 === 0) {
                const tempIndex = rowsCount * columnIndex + rowIndex
                console.log({ tempIndex });
                output[rowIndex][columnIndex] = thiss[tempIndex];
            } else {
                const tempIndex = rowsCount * columnIndex + (rowsCount - rowIndex - 1)
                console.log({ tempIndex });
                output[rowIndex][columnIndex] = thiss[tempIndex];
            }
        }
    }
    return output;
}

console.log(
    snail(5, 4)
);
console.log(snail([1, 2, 3, 4]));
