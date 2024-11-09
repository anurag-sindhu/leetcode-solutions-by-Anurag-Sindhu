var findMissingAndRepeatedValues = function (array) {
    let duplicate = null;
    let config = {};
    for (let rowIndex = 0; rowIndex < array.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < array.length; columnIndex++) {
            const element = array[rowIndex][columnIndex];
            if (config[element]) {
                duplicate = element;
            }
            config[element] = true;
        }
    }
    let missing = null;
    for (let index = 1; index <= array.length * array.length; index++) {
        if (!config[index]) {
            missing = index;
            break;
        }
    }
    return [duplicate, missing];
};

console.log(
    findMissingAndRepeatedValues(
        (grid = [
            [1, 3],
            [2, 2],
        ]),
    ),
);
console.log(
    findMissingAndRepeatedValues(
        (grid = [
            [9, 1, 7],
            [8, 9, 2],
            [3, 4, 6],
        ]),
    ),
);
