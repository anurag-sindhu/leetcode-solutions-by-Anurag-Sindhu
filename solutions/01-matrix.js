var updateMatrix = function (mat) {
    const leftToRight = [];
    const rightToLeft = [];
    const topToBottom = [];
    const bottomToTop = [];
    const output = [];

    for (let rowIndex = 0; rowIndex < mat.length; rowIndex++) {
        leftToRight[rowIndex] = [];
        let lastOne = Infinity;
        for (let columnIndex = 0; columnIndex < mat[rowIndex].length; columnIndex++) {
            const element = mat[rowIndex][columnIndex];
            if (element == 0) {
                lastOne = 0;
            } else {
                lastOne += 1;
            }
            leftToRight[rowIndex][columnIndex] = lastOne;
        }
    }

    for (let rowIndex = 0; rowIndex < mat.length; rowIndex++) {
        rightToLeft[rowIndex] = [];
        let lastOne = Infinity;
        for (let columnIndex = mat[rowIndex].length - 1; columnIndex >= 0; columnIndex--) {
            const element = mat[rowIndex][columnIndex];
            if (element == 0) {
                lastOne = 0;
            } else {
                lastOne += 1;
            }
            rightToLeft[rowIndex][columnIndex] = lastOne;
        }
    }

    for (let columnIndex = 0; columnIndex < mat[0].length; columnIndex++) {
        let lastOne = Infinity;
        for (let rowIndex = 0; rowIndex < mat.length; rowIndex++) {
            if (topToBottom[rowIndex] == undefined) {
                topToBottom[rowIndex] = [];
            }
            const element = mat[rowIndex][columnIndex];
            if (element == 0) {
                lastOne = 0;
            } else {
                lastOne += 1;
            }
            topToBottom[rowIndex][columnIndex] = lastOne;
        }
    }

    for (let columnIndex = 0; columnIndex < mat[0].length; columnIndex++) {
        let lastOne = Infinity;
        for (let rowIndex = mat.length - 1; rowIndex >= 0; rowIndex--) {
            if (bottomToTop[rowIndex] == undefined) {
                bottomToTop[rowIndex] = [];
            }
            const element = mat[rowIndex][columnIndex];
            if (element == 0) {
                lastOne = 0;
            } else {
                lastOne += 1;
            }
            bottomToTop[rowIndex][columnIndex] = lastOne;
        }
    }
    for (let rowIndex = 0; rowIndex < mat.length; rowIndex++) {
        output[rowIndex] = [];
        for (let columnIndex = 0; columnIndex < mat[rowIndex].length; columnIndex++) {
            const element = mat[rowIndex][columnIndex];
            if (element) {
                const leftToRightMin = Math.min(
                    (leftToRight[rowIndex + 1] && leftToRight[rowIndex + 1][columnIndex]) ||
                        Infinity,
                    (leftToRight[rowIndex - 1] && leftToRight[rowIndex - 1][columnIndex]) ||
                        Infinity,
                    leftToRight[rowIndex][columnIndex - 1] || Infinity,
                    leftToRight[rowIndex][columnIndex + 1] || Infinity,
                );
                const rightToLeftMin = Math.min(
                    (rightToLeft[rowIndex + 1] && rightToLeft[rowIndex + 1][columnIndex]) ||
                        Infinity,
                    (rightToLeft[rowIndex - 1] && rightToLeft[rowIndex - 1][columnIndex]) ||
                        Infinity,
                    rightToLeft[rowIndex][columnIndex - 1] || Infinity,
                    rightToLeft[rowIndex][columnIndex + 1] || Infinity,
                );
                const topToBottomMin = Math.min(
                    (topToBottom[rowIndex + 1] && topToBottom[rowIndex + 1][columnIndex]) ||
                        Infinity,
                    (topToBottom[rowIndex - 1] && topToBottom[rowIndex - 1][columnIndex]) ||
                        Infinity,
                    topToBottom[rowIndex][columnIndex - 1] || Infinity,
                    topToBottom[rowIndex][columnIndex + 1] || Infinity,
                );
                const bottomToTopMin = Math.min(
                    (bottomToTop[rowIndex + 1] && bottomToTop[rowIndex + 1][columnIndex]) ||
                        Infinity,
                    (bottomToTop[rowIndex - 1] && bottomToTop[rowIndex - 1][columnIndex]) ||
                        Infinity,
                    bottomToTop[rowIndex][columnIndex - 1] || Infinity,
                    bottomToTop[rowIndex][columnIndex + 1] || Infinity,
                );
                output[rowIndex][columnIndex] = Math.min(
                    Math.min(leftToRight[rowIndex][columnIndex], leftToRightMin + 1),
                    Math.min(rightToLeft[rowIndex][columnIndex], rightToLeftMin + 1),
                    Math.min(topToBottom[rowIndex][columnIndex], topToBottomMin + 1),
                    Math.min(bottomToTop[rowIndex][columnIndex], bottomToTopMin + 1),
                );
            } else {
                output[rowIndex][columnIndex] = 0;
            }
        }
    }
    return output;
};

console.log(
    updateMatrix(
        (mat = [
            [0, 0, 1, 0, 1, 1, 1, 0, 1, 1],
            [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
            [0, 0, 1, 1, 1, 0, 1, 1, 1, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
        ]),
    ),
);
/**
[
    [0, 0, 1, 0, 1, 2, 1, 0, 1, 2],
    [1, 1, 2, 1, 0, 1, 1, 1, 2, 3],
    [2, 1, 2, 1, 1, 0, 0, 0, 1, 2],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 2],
    [0, 0, 1, 1, 1, 0, 1, 1, 2, 3],
    [1, 0, 1, 2, 1, 1, 1, 2, 1, 2],
    [1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 2],
    [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 2, 1, 0],
];
 */
console.log(
    updateMatrix(
        (mat = [
            [0, 0, 0],
            [0, 1, 0],
            [1, 1, 1],
        ]),
    ),
);

console.log(
    updateMatrix(
        (mat = [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0],
        ]),
    ),
);
