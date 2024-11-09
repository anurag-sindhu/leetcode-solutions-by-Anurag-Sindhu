var areSimilar = function (mat, k) {
    const numberOfRotationsRequired = k % mat[0].length;
    for (let rowIndex = 0; rowIndex < mat.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < mat[rowIndex].length; columnIndex++) {
            const newColumnIndex = (columnIndex + numberOfRotationsRequired) % mat[rowIndex].length;
            if (mat[rowIndex][columnIndex] !== mat[rowIndex][newColumnIndex]) {
                return false;
            }
        }
    }
    return true;
};

console.log(areSimilar([[1, 2]], 1) === false);

console.log(
    areSimilar(
        (mat = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ]),
        (k = 4),
    ) === false,
);
console.log(
    areSimilar(
        (mat = [
            [1, 2, 1, 2],
            [5, 5, 5, 5],
            [6, 3, 6, 3],
        ]),
        (k = 2),
    ),
);
console.log(
    areSimilar(
        (mat = [
            [2, 2],
            [2, 2],
        ]),
        (k = 3),
    ),
);
