var constructProductMatrix = function (grid) {
    let prod = 1;
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
            if ((prod * grid[rowIndex][columnIndex]) % 12345 === 0) {
                prod = prod * grid[rowIndex][columnIndex];
            } else {
                prod = (prod * grid[rowIndex][columnIndex]) % 12345;
            }
        }
    }
    const outputMatrix = [];
    let tempMatrix = [];
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        tempMatrix = [];
        for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
            tempMatrix.push((prod / grid[rowIndex][columnIndex]) % 12345);
        }
        outputMatrix.push(tempMatrix);
    }
    return outputMatrix;
};

console.log(
    constructProductMatrix(
        (grid = [
            [3, 2, 5],
            [6, 4, 3],
            [6, 3, 1],
        ]),
    ),
);
/**
 * [[615,7095,7776],[6480,9720,615],[6480,615,1845]]
 */
console.log(constructProductMatrix((grid = [[12345], [2], [1]])));
