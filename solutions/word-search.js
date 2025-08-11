function getNeighbors(array, rowIndex, columnIndex) {
    const neighbors = [];
    if (array[rowIndex] && array[rowIndex][columnIndex - 1] !== undefined) {
        neighbors.push({
            rowIndex: rowIndex,
            columnIndex: columnIndex - 1,
        });
    }
    if (array[rowIndex] && array[rowIndex][columnIndex + 1] !== undefined) {
        neighbors.push({
            rowIndex: rowIndex,
            columnIndex: columnIndex + 1,
        });
    }
    if (array[rowIndex - 1] && array[rowIndex - 1][columnIndex] !== undefined) {
        neighbors.push({
            rowIndex: rowIndex - 1,
            columnIndex: columnIndex,
        });
    }
    if (array[rowIndex + 1] && array[rowIndex + 1][columnIndex] !== undefined) {
        neighbors.push({
            rowIndex: rowIndex + 1,
            columnIndex: columnIndex,
        });
    }
    return neighbors;
}

var exist = function (board, word) {
    let finalResult = false;
    function existHelper(
        board,
        word,
        wordIndex = 0,
        addressed = {},
        rowIndex = 0,
        columnIndex = 0,
    ) {
        const key = `${rowIndex}_${columnIndex}`;
        if (addressed[key]) {
            return;
        }
        if (board[rowIndex][columnIndex] === word[wordIndex]) {
            if (wordIndex + 1 >= word.length) {
                finalResult = true;
                return;
            }
            const neighbors = getNeighbors(board, rowIndex, columnIndex);
            addressed[key] = true;
            for (const element of neighbors) {
                if (!finalResult) {
                    existHelper(
                        board,
                        word,
                        wordIndex + 1,
                        addressed,
                        element.rowIndex,
                        element.columnIndex,
                    );
                }
            }
            addressed[key] = false;
        }
        return;
    }

    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < board[rowIndex].length; columnIndex++) {
            existHelper(board, word, 0, {}, rowIndex, columnIndex);
        }
    }

    return finalResult;
};
console.log(exist((board = [['a']]), (word = 'a')) == true);
console.log(
    exist(
        (board = [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
        ]),
        (word = 'ABCCED'),
    ),
);

console.log(
    exist(
        [
            ['C', 'A', 'A'],
            ['A', 'A', 'A'],
            ['B', 'C', 'D'],
        ],
        'AAB',
    ),
);
console.log(
    exist(
        [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
        ],
        (word = 'ABCB'),
    ),
);

console.log(
    exist(
        (board = [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
        ]),
        (word = 'SEE'),
    ),
);
