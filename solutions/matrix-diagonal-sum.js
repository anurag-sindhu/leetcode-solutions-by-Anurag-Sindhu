var diagonalSum = function (mat) {
    let sum = 0;
    let diff = mat.length - 1;
    let start = 0;
    while ((mat[start] && mat[start][start]) !== undefined) {
        sum += mat[start][start];
        if (diff) {
            sum += mat[start + diff][start];
        }
        diff -= 2;
        start += 1;
    }
    return sum;
};

console.log(diagonalSum((mat = [[5]])));
console.log(
    diagonalSum(
        (mat = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ])
    )
);

console.log(
    diagonalSum(
        (mat = [
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1]
        ])
    )
);
