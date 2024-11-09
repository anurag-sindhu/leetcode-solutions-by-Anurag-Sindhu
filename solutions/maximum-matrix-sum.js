var maxMatrixSum = function (matrix) {
    let sum = 0;
    let negSign = 0;
    let minNegSign = Infinity;
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            if (matrix[row][column] <= 0) {
                negSign++;
            }
            minNegSign = Math.min(minNegSign, Math.abs(matrix[row][column]));
            sum += Math.abs(matrix[row][column]);
        }
    }
    if (negSign % 2 !== 0) {
        return sum - minNegSign * 2;
    }
    return sum;
};

console.log(
    maxMatrixSum(
        (matrix = [
            [2, 9, 3],
            [5, 4, -4],
            [1, 7, 1],
        ]),
    ) === 15,
);

console.log(
    maxMatrixSum(
        (matrix = [
            [-1, 0, -1],
            [-2, 1, 3],
            [3, 2, 2],
        ]),
    ) === 15,
);
console.log(
    maxMatrixSum(
        (matrix = [
            [1, 2, 3],
            [-1, -2, -3],
            [1, 2, 3],
        ]),
    ) === 16,
);
console.log(
    maxMatrixSum(
        (matrix = [
            [9, -3, -4],
            [-4, -1, -3],
            [-6, -3, -3],
        ]),
    ) === 36,
);

console.log(
    maxMatrixSum(
        (matrix = [
            [1, -1],
            [-1, 1],
        ]),
    ) === 4,
);
