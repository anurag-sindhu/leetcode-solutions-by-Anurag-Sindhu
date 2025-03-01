var placeWordInCrossword = function (board, word) {
    function helperHorizontal(board, word) {
        let possible = 0;
        //check left to right
        for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
            possible = 0;
            for (let columnIndex = 0; columnIndex < board[rowIndex].length; columnIndex++) {
                const element = board[rowIndex][columnIndex];
                if (columnIndex == 0) {
                    if (element === ' ' || word[0] == board[rowIndex][columnIndex]) {
                        possible += 1;
                    }
                } else {
                    if (
                        element === ' ' &&
                        (board[rowIndex][columnIndex - 1] == '#' ||
                            board[rowIndex][columnIndex - 1] == ' ' ||
                            board[rowIndex][columnIndex - 1] == word[possible - 1])
                    ) {
                        possible += 1;
                    } else if (
                        word[possible] == board[rowIndex][columnIndex] &&
                        (board[rowIndex][columnIndex - 1] == '#' ||
                            board[rowIndex][columnIndex - 1] == ' ' ||
                            board[rowIndex][columnIndex - 1] == word[possible - 1])
                    ) {
                        possible += 1;
                    } else {
                        possible = 0;
                    }
                }
                if (
                    possible === word.length &&
                    (board[rowIndex][columnIndex + 1] == undefined ||
                        board[rowIndex][columnIndex + 1] == '#')
                ) {
                    return true;
                }
            }
        }
        return false;
    }
    function helperVertical(board, word) {
        let possible = 0;
        //check left to right
        for (let columnIndex = 0; columnIndex < board[0].length; columnIndex++) {
            possible = 0;
            for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
                const element = board[rowIndex][columnIndex];
                if (rowIndex == 0) {
                    if (element === ' ' || word[0] == board[rowIndex][columnIndex]) {
                        possible += 1;
                    }
                } else {
                    if (
                        element === ' ' &&
                        (board[rowIndex - 1][columnIndex] == '#' ||
                            board[rowIndex - 1][columnIndex] == ' ' ||
                            board[rowIndex - 1][columnIndex] == word[possible - 1])
                    ) {
                        possible += 1;
                    } else if (
                        word[possible] == board[rowIndex][columnIndex] &&
                        (board[rowIndex - 1][columnIndex] == '#' ||
                            board[rowIndex - 1][columnIndex] == ' ' ||
                            board[rowIndex - 1][columnIndex] == word[possible - 1])
                    ) {
                        possible += 1;
                    } else {
                        possible = 0;
                    }
                }
                if (
                    possible === word.length &&
                    (board[rowIndex + 1] == undefined || board[rowIndex + 1][columnIndex] == '#')
                ) {
                    return true;
                }
            }
        }
        return false;
    }
    const ac = helperVertical(board, word);
    const ad = helperVertical(board, word.split('').reverse().join(''));
    const aa = helperHorizontal(board, word);
    const ab = helperHorizontal(board, word.split('').reverse().join(''));
    return aa || ab || ac || ad;
};

console.log(
    placeWordInCrossword(
        (board = [[' '], ['#'], ['o'], [' '], ['t'], ['m'], ['o'], [' '], ['#'], [' ']]),
        (word = 'octmor'),
    ) === true,
);

console.log(
    placeWordInCrossword(
        (board = [
            [' ', '#', 'a'],
            [' ', '#', 'c'],
            [' ', '#', 'a'],
        ]),
        (word = 'ac'),
    ) === false,
);

console.log(
    placeWordInCrossword(
        (board = [
            [' ', '#', 'a'],
            [' ', '#', 'c'],
            [' ', '#', 'a'],
        ]),
        (word = 'ac'),
    ) === false,
);

console.log(
    placeWordInCrossword(
        (board = [
            ['d', ' ', 'a'],
            [' ', ' ', '#'],
            ['#', ' ', 'c'],
        ]),
        (word = 'abc'),
    ) === true,
);

console.log(
    placeWordInCrossword(
        (board = [
            ['c', ' ', 'a'],
            [' ', ' ', '#'],
            ['#', ' ', 'c'],
        ]),
        (word = 'abc'),
    ) === true,
);
console.log(
    placeWordInCrossword(
        (board = [
            ['#', ' ', '#'],
            [' ', ' ', '#'],
            ['#', ' ', 'c'],
        ]),
        (word = 'ca'),
    ) === true,
);

console.log(
    placeWordInCrossword(
        (board = [
            [' ', 'b', ' '],
            [' ', '# ', '#'],
            ['#', 'c', ' '],
        ]),
        (word = 'abc'),
    ) === true,
);

console.log(
    placeWordInCrossword(
        (board = [
            [' ', ' ', 'c'],
            [' ', '# ', '#'],
            ['#', 'c', ' '],
        ]),
        (word = 'abc'),
    ) === true,
);
