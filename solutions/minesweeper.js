const neighbors = [
    [1, 1],
    [1, 0],
    [0, 1],
    [-1, -1],
    [-1, 0],
    [0, -1],
    [-1, 1],
    [1, -1],
];
var updateBoard = function (board, click) {
    function helper(rowIndex, columnIndex) {
        let count = 0;
        for (const [rowInd, colInd] of neighbors) {
            if (
                board[rowIndex + rowInd] &&
                board[rowIndex + rowInd][columnIndex + colInd] !== undefined
            ) {
                //If an empty square 'E' with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.
                if (board[rowIndex + rowInd][columnIndex + colInd] === 'M') {
                    count += 1;
                }
            }
        }
        //If an empty square 'E' with no adjacent mines is revealed, then change it to a revealed blank 'B'
        board[rowIndex][columnIndex] = (count && `${count}`) || 'B';
        if (count) {
            return;
        }
        //unrevealed squares should be revealed recursively
        for (const [rowInd, colInd] of neighbors) {
            if (
                board[rowIndex + rowInd] &&
                board[rowIndex + rowInd][columnIndex + colInd] === 'E'
            ) {
                helper(rowIndex + rowInd, columnIndex + colInd);
            }
        }
        return;
    }
    //If a mine 'M' is revealed, then the game is over. You should change it to 'X'.
    if (board[click[0]][click[1]] === 'M') {
        board[click[0]][click[1]] = 'X';
        return board;
    }
    helper(click[0], click[1]);
    return board;
};

console.log(
    updateBoard(
        (board = [
            ['E', 'E', 'E', 'E', 'E'],
            ['E', 'E', 'M', 'E', 'E'],
            ['E', 'E', 'E', 'E', 'E'],
            ['E', 'E', 'E', 'E', 'E'],
        ]),
        (click = [3, 0]),
    ),
);
/**
 * [
    ['B', '1', 'E', '1', 'B'],
    ['B', '1', 'M', '1', 'B'],
    ['B', '1', '1', '1', 'B'],
    ['B', 'B', 'B', 'B', 'B'],
];
 */
console.log(
    updateBoard(
        (board = [
            ['B', '1', 'E', '1', 'B'],
            ['B', '1', 'M', '1', 'B'],
            ['B', '1', '1', '1', 'B'],
            ['B', 'B', 'B', 'B', 'B'],
        ]),
        (click = [1, 2]),
    ),
);

/**
 * [
    ['B', '1', 'E', '1', 'B'],
    ['B', '1', 'X', '1', 'B'],
    ['B', '1', '1', '1', 'B'],
    ['B', 'B', 'B', 'B', 'B'],
];
 */
