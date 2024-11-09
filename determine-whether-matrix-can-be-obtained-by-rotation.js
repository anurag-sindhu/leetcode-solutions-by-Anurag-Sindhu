var findRotation = function (matrix, target) {
    const outputNinetyDegree = [];
    const outputOneEightyDegree = [];
    const outputTwoSeventyDegree = [];
    const outputThreeSixtyDegree = [];
    let outputNinetyDegreeResult = true;
    let outputOneEightyDegreeResult = true;
    let outputTwoSeventyDegreeResult = true;
    let outputThreeSixtyDegreeResult = true;
    for (let columnIndex = 0; columnIndex < matrix[0].length; columnIndex++) {
        outputNinetyDegree[columnIndex] = [];
        for (let rowIndex = matrix.length - 1; rowIndex >= 0; rowIndex--) {
            outputNinetyDegree[columnIndex].push(matrix[rowIndex][columnIndex]);
        }
    }
    for (let columnIndex = 0; columnIndex < outputNinetyDegree[0].length; columnIndex++) {
        outputOneEightyDegree[columnIndex] = [];
        for (let rowIndex = outputNinetyDegree.length - 1; rowIndex >= 0; rowIndex--) {
            outputOneEightyDegree[columnIndex].push(outputNinetyDegree[rowIndex][columnIndex]);
        }
    }
    for (let columnIndex = 0; columnIndex < outputOneEightyDegree[0].length; columnIndex++) {
        outputTwoSeventyDegree[columnIndex] = [];
        for (let rowIndex = outputOneEightyDegree.length - 1; rowIndex >= 0; rowIndex--) {
            outputTwoSeventyDegree[columnIndex].push(outputOneEightyDegree[rowIndex][columnIndex]);
        }
    }
    for (let columnIndex = 0; columnIndex < outputTwoSeventyDegree[0].length; columnIndex++) {
        outputThreeSixtyDegree[columnIndex] = [];
        for (let rowIndex = outputTwoSeventyDegree.length - 1; rowIndex >= 0; rowIndex--) {
            outputThreeSixtyDegree[columnIndex].push(outputTwoSeventyDegree[rowIndex][columnIndex]);
        }
    }
    let isBroke = false;
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < matrix[rowIndex].length; columnIndex++) {
            if (outputNinetyDegree[rowIndex][columnIndex] !== target[rowIndex][columnIndex]) {
                outputNinetyDegreeResult = false;
                isBroke = true;
                break;
            }
        }
        if (isBroke) {
            break;
        }
    }
    isBroke = false;
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < matrix[rowIndex].length; columnIndex++) {
            if (outputOneEightyDegree[rowIndex][columnIndex] !== target[rowIndex][columnIndex]) {
                outputOneEightyDegreeResult = false;
                isBroke = true;
                break;
            }
        }
        if (isBroke) {
            break;
        }
    }
    isBroke = false;
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < matrix[rowIndex].length; columnIndex++) {
            if (outputTwoSeventyDegree[rowIndex][columnIndex] !== target[rowIndex][columnIndex]) {
                outputTwoSeventyDegreeResult = false;
                isBroke = true;
                break;
            }
        }
        if (isBroke) {
            break;
        }
    }
    isBroke = false;
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < matrix[rowIndex].length; columnIndex++) {
            if (outputThreeSixtyDegree[rowIndex][columnIndex] !== target[rowIndex][columnIndex]) {
                outputThreeSixtyDegreeResult = false;
                isBroke = true;
                break;
            }
        }
        if (isBroke) {
            break;
        }
    }
    return (
        outputNinetyDegreeResult ||
        outputOneEightyDegreeResult ||
        outputTwoSeventyDegreeResult ||
        outputThreeSixtyDegreeResult
    );
};

console.log(
    findRotation(
        [
            [0, 0, 0],
            [0, 0, 1],
            [0, 0, 1],
        ],
        [
            [0, 0, 0],
            [0, 0, 1],
            [0, 0, 1],
        ],
    ),
);
console.log(
    findRotation(
        (mat = [
            [0, 0, 0],
            [0, 1, 0],
            [1, 1, 1],
        ]),
        (target = [
            [1, 1, 1],
            [0, 1, 0],
            [0, 0, 0],
        ]),
    ),
);
console.log(
    findRotation(
        (mat = [
            [0, 1],
            [1, 0],
        ]),
        (target = [
            [1, 0],
            [0, 1],
        ]),
    ),
);
console.log(
    findRotation(
        (mat = [
            [0, 1],
            [1, 1],
        ]),
        (target = [
            [1, 0],
            [0, 1],
        ]),
    ),
);
