var rotateTheBox = function (box) {
    let countStones = 0;
    for (let rowIndex = 0; rowIndex < box.length; rowIndex++) {
        countStones = 0;
        for (let columnIndex = 0; columnIndex < box[rowIndex].length; columnIndex++) {
            if (box[rowIndex][columnIndex] === '#') {
                box[rowIndex][columnIndex] = '.';
                countStones += 1;
            }
            if (box[rowIndex][columnIndex] === '*' && countStones > 0) {
                let tempColumnIndex = columnIndex - 1;
                while (countStones > 0) {
                    box[rowIndex][tempColumnIndex--] = '#';
                    countStones--;
                }
                countStones = 0;
            }
            if (columnIndex === box[rowIndex].length - 1 && countStones > 0) {
                let tempColumnIndex = columnIndex;
                while (countStones > 0) {
                    box[rowIndex][tempColumnIndex--] = '#';
                    countStones--;
                }
                countStones = 0;
            }
        }
    }
    const output = [];
    for (let columnIndex = 0; columnIndex < box[0].length; columnIndex++) {
        output[columnIndex] = [];
        for (let rowIndex = box.length - 1; rowIndex >= 0; rowIndex--) {
            output[columnIndex].push(box[rowIndex][columnIndex]);
        }
    }
    return output;
};

console.log(rotateTheBox((box = [['#', '.', '#']])));
console.log(
    rotateTheBox(
        (box = [
            ['#', '.', '*', '.'],
            ['#', '#', '*', '.'],
        ]),
    ),
);
console.log(
    rotateTheBox(
        (box = [
            ['#', '#', '*', '.', '*', '.'],
            ['#', '#', '#', '*', '.', '.'],
            ['#', '#', '#', '.', '#', '.'],
        ]),
    ),
);
