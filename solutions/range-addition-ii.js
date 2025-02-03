var maxCount1 = function (m, n, ops) {
    if (!ops.length) {
        return m * n;
    }
    const obj = {};
    for (const [row, column] of ops) {
        const key = `${row - 1}_${column - 1}`;
        if (!obj[key]) {
            obj[key] = 0;
        }
        obj[key] += 1;
    }
    const matrix = [];

    let tempRow = Math.max(m, n);
    let tempColumn = Math.max(m, n);
    const max = {};
    while (tempRow >= 0 && tempColumn >= 0) {
        //row traverse
        for (let index = tempRow; index >= 0; index--) {
            if (!matrix[index]) {
                matrix[index] = [];
            }
            const key = `${index}_${tempColumn}`;
            let num = 0;
            if (obj[key]) {
                num =
                    obj[key] +
                        Math.max(
                            (matrix[index + 1] && matrix[index + 1][tempColumn]) || 0,
                            matrix[index][tempColumn + 1] || 0,
                        ) || 0;
                matrix[index][tempColumn] = num;
            } else {
                num =
                    Math.max(
                        (matrix[index + 1] && matrix[index + 1][tempColumn]) || 0,
                        matrix[index][tempColumn + 1] || 0,
                    ) || 0;
                matrix[index][tempColumn] = num;
            }
            if (!max[num]) {
                max[num] = 0;
            }
            max[num] += 1;
        }
        //column traverse
        for (let index = tempColumn - 1; index >= 0; index--) {
            if (!matrix[tempRow]) {
                matrix[tempRow] = [];
            }
            const key = `${tempRow}_${index}`;
            let num = 0;
            if (obj[key]) {
                num =
                    obj[key] +
                        Math.max(
                            (matrix[tempRow + 1] && matrix[tempRow + 1][index]) || 0,
                            matrix[tempRow][index + 1] || 0,
                        ) || 0;
                matrix[tempRow][index] = num;
            } else {
                num =
                    Math.max(
                        (matrix[tempRow + 1] && matrix[tempRow + 1][index]) || 0,
                        matrix[tempRow][index + 1] || 0,
                    ) || 0;
                matrix[tempRow][index] = num;
            }
            if (!max[num]) {
                max[num] = 0;
            }
            max[num] += 1;
        }
        tempRow -= 1;
        tempColumn -= 1;
    }
    const maxNum = Math.max(...Object.keys(max));
    return max[maxNum];
};

var maxCount = function (m, n, ops) {
    if (!ops.length) {
        return m * n;
    }
    ops.sort((a, b) => {
        if (a[0] == b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    return ops[0][0] * ops[0][1];
};

console.log(
    maxCount((m = 18), (n = 3), [
        [16, 1],
        [14, 3],
        [14, 2],
        [4, 1],
        [10, 1],
        [11, 1],
        [8, 3],
        [16, 2],
        [13, 1],
        [8, 3],
        [2, 2],
        [9, 1],
        [3, 1],
        [2, 2],
        [6, 3],
    ]),
);
console.log(maxCount((m = 40000), (n = 40000), (ops = [])));
console.log(maxCount((m = 3), (n = 3), (ops = [])));
console.log(
    maxCount(
        (m = 3),
        (n = 3),
        (ops = [
            [2, 1],
            [3, 3],
            [3, 3],
        ]),
    ),
);

console.log(
    maxCount(
        (m = 3),
        (n = 3),
        (ops = [
            [2, 2],
            [3, 3],
        ]),
    ),
);
console.log(
    maxCount(
        (m = 3),
        (n = 3),
        (ops = [
            [2, 2],
            [3, 3],
            [3, 3],
            [3, 3],
            [2, 2],
            [3, 3],
            [3, 3],
            [3, 3],
            [2, 2],
            [3, 3],
            [3, 3],
            [3, 3],
        ]),
    ),
);
