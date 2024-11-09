var matrixScore = function (grid) {
    for (let index = 0; index < grid.length; index++) {
        const element = grid[index][0];
        if (element !== 1) {
            for (let columnIndex = 0; columnIndex < grid[index].length; columnIndex++) {
                if (grid[index][columnIndex] == 0) {
                    grid[index][columnIndex] = 1;
                } else {
                    grid[index][columnIndex] = 0;
                }
            }
        }
    }

    for (let columnIndex = 0; columnIndex < grid[0].length; columnIndex++) {
        let countOne = 0;
        for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
            if (grid[rowIndex][columnIndex] == 1) {
                countOne += 1;
            }
        }
        let countZero = grid.length - countOne;
        if (countZero > countOne) {
            for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
                if (grid[rowIndex][columnIndex] == 0) {
                    grid[rowIndex][columnIndex] = 1;
                } else {
                    grid[rowIndex][columnIndex] = 0;
                }
            }
        }
    }
    let sum = 0;
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        let resp = ``;
        for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
            resp += grid[rowIndex][columnIndex];
        }
        sum += parseInt(resp, 2);
    }
    return sum;
};

console.log(
    matrixScore(
        (grid = [
            [0, 0, 1, 1],
            [1, 0, 1, 0],
            [1, 1, 0, 0],
        ]),
    ),
);
console.log(matrixScore((grid = [[0]])));
