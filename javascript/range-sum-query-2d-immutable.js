var NumMatrix = function (matrix) {
    const matt = [];
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        matt[rowIndex] = [];
        for (let columnIndex = 0; columnIndex < matrix[rowIndex].length; columnIndex++) {
            matt[rowIndex][columnIndex] =
                ((matt[rowIndex - 1] && matt[rowIndex - 1][columnIndex]) || 0) +
                ((matt[rowIndex] && matt[rowIndex][columnIndex - 1]) || 0) +
                matrix[rowIndex][columnIndex] -
                ((matt[rowIndex - 1] && matt[rowIndex - 1][columnIndex - 1]) || 0);
        }
    }
    this.matt = matt;
};

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    const totalSum = this.matt[row2][col2];
    const fromSum = (this.matt[row1 - 1] && this.matt[row1 - 1][col2]) || 0;
    const fromSum1 = (this.matt[row2] && this.matt[row2][col1 - 1]) || 0;
    const addSum = (this.matt[row1 - 1] && this.matt[row1 - 1][col1 - 1]) || 0;
    return totalSum - fromSum - fromSum1 + addSum;
};

let obj;
let operations;
let values;
operations = ['NumMatrix', 'sumRegion', 'sumRegion', 'sumRegion'];
values = [
    [
        [
            [3, 0, 1, 4, 2],
            [5, 6, 3, 2, 1],
            [1, 2, 0, 1, 5],
            [4, 1, 0, 1, 7],
            [1, 0, 3, 0, 5],
        ],
    ],
    [2, 1, 4, 3],
    [1, 1, 2, 2],
    [1, 2, 2, 4],
];

obj = new NumMatrix(...values[0]);

for (let index = 1; index < operations.length; index++) {
    console.log(obj[operations[index]](...values[index]));
    //[-1,null,null,null,null,1,null,2]
}
