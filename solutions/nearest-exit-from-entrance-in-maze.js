function isExit(maze, rowIndex, columnIndex, entranceRowIndex, entranceColumnIndex) {
    if (`${rowIndex}_${columnIndex}` === `${entranceRowIndex}_${entranceColumnIndex}`) {
        return false;
    }
    const totalRowLength = maze.length;
    const totalColumnLength = maze[0].length;
    if (rowIndex === 0 || rowIndex === totalRowLength - 1) {
        return true;
    }

    if (columnIndex === 0 || columnIndex === totalColumnLength - 1) {
        return true;
    }
    return false;
}

function getNeighbors(array, rowIndex, columnIndex) {
    const neighbors = [];
    if (array[rowIndex] && array[rowIndex][columnIndex - 1] == '.') {
        neighbors.push({
            rowIndex: rowIndex,
            columnIndex: columnIndex - 1,
        });
    }
    if (array[rowIndex] && array[rowIndex][columnIndex + 1] == '.') {
        neighbors.push({
            rowIndex: rowIndex,
            columnIndex: columnIndex + 1,
        });
    }
    if (array[rowIndex - 1] && array[rowIndex - 1][columnIndex] == '.') {
        neighbors.push({
            rowIndex: rowIndex - 1,
            columnIndex: columnIndex,
        });
    }
    if (array[rowIndex + 1] && array[rowIndex + 1][columnIndex] == '.') {
        neighbors.push({
            rowIndex: rowIndex + 1,
            columnIndex: columnIndex,
        });
    }
    return neighbors;
}

function exploreNeighbors(
    maze,
    rowIndex,
    columnIndex,
    entranceRowIndex,
    entranceColumnIndex,
    step = 0,
    entertained = {},
) {
    if (entertained[`${rowIndex}_${columnIndex}`]) {
        // return;
    }
    entertained[`${rowIndex}_${columnIndex}`] = true;
    if (`${rowIndex}_${columnIndex}` !== `${entranceRowIndex}_${entranceColumnIndex}`) {
        if (maze[rowIndex][columnIndex] !== '.') {
            if (step > maze[rowIndex][columnIndex]) {
                return;
            }
            maze[rowIndex][columnIndex] = Math.min(step, maze[rowIndex][columnIndex]);
        } else {
            maze[rowIndex][columnIndex] = Math.min(step);
        }
    }
    const neighbors = getNeighbors(maze, rowIndex, columnIndex);
    for (const { rowIndex: row, columnIndex: column } of neighbors) {
        if (
            maze[row][column] !== '+' &&
            `${row}_${column}` !== `${entranceRowIndex}_${entranceColumnIndex}`
        ) {
            if (`${rowIndex}_${columnIndex}` == `5_7`) {
                console.log('object');
            }
            exploreNeighbors(
                maze,
                row,
                column,
                entranceRowIndex,
                entranceColumnIndex,
                step + 1,
                entertained,
            );
            console.log('object');
        }
    }
    return null;
}

var nearestExit = function (maze, entrance) {
    let output = Infinity;
    maze[entrance[0]][entrance[1]] = Infinity;
    exploreNeighbors(maze, entrance[0], entrance[1], entrance[0], entrance[1]);
    let rowIndex = 0;
    let columnIndex = 0;
    for (; columnIndex < maze[rowIndex].length; columnIndex++) {
        if (maze[rowIndex][columnIndex] !== '+' && maze[rowIndex][columnIndex] !== '.') {
            output = Math.min(maze[rowIndex][columnIndex], output);
        }
    }
    rowIndex = 0;
    columnIndex = 0;
    for (; rowIndex < maze.length; rowIndex++) {
        if (maze[rowIndex][columnIndex] !== '+' && maze[rowIndex][columnIndex] !== '.') {
            output = Math.min(maze[rowIndex][columnIndex], output);
        }
    }
    rowIndex = maze.length - 1;
    columnIndex = 0;
    for (; columnIndex < maze[rowIndex].length; columnIndex++) {
        if (maze[rowIndex][columnIndex] !== '+' && maze[rowIndex][columnIndex] !== '.') {
            output = Math.min(maze[rowIndex][columnIndex], output);
        }
    }
    rowIndex = 0;
    columnIndex = maze[rowIndex].length - 1;
    for (; rowIndex < maze.length; rowIndex++) {
        if (maze[rowIndex][columnIndex] !== '+' && maze[rowIndex][columnIndex] !== '.') {
            output = Math.min(maze[rowIndex][columnIndex], output);
        }
    }
    if (output === Infinity) {
        return -1;
    }
    return output;
};

console.log(
    nearestExit(
        [
            ['.', '+', '+', '+', '.', '.', '.', '+', '+'],
            ['.', '.', '+', '.', '+', '.', '+', '+', '.'],
            ['.', '.', '+', '.', '.', '.', '.', '.', '.'],
            ['.', '+', '.', '.', '+', '+', '.', '+', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '+', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '+', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.', '+'],
            ['+', '.', '.', '.', '+', '.', '.', '.', '.'],
        ],
        [5, 6],
    ),
);

console.log(
    nearestExit(
        [
            ['+', '.', '+', '+', '+', '+', '+'],
            ['+', '.', '+', '.', '.', '.', '+'],
            ['+', '.', '+', '.', '+', '.', '+'],
            ['+', '.', '.', '.', '+', '.', '+'],
            ['+', '+', '+', '+', '+', '.', '+'],
        ],
        [0, 1],
    ) == 12,
);

console.log(
    nearestExit(
        (maze = [
            ['+', '+', '.', '+'],
            ['.', '.', '.', '+'],
            ['+', '+', '+', '.'],
        ]),
        (entrance = [1, 2]),
    ) === 1,
);
console.log(
    nearestExit(
        (maze = [
            ['+', '+', '+'],
            ['.', '.', '.'],
            ['+', '+', '+'],
        ]),
        (entrance = [1, 0]),
    ) === 2,
);
console.log(nearestExit((maze = [['.', '+']]), (entrance = [0, 0])) == -1);
