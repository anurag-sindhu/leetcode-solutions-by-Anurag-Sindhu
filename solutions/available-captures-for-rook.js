function getRookIndexes(board) {
  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < board[rowIndex].length; columnIndex++) {
      if (board[rowIndex][columnIndex] === 'R') {
        return { rookRowIndex: rowIndex, rookColumnIndex: columnIndex };
      }
    }
  }
}

function getCountFromTop(board, rookRowIndex, rookColumnIndex) {
  for (let rowIndex = rookRowIndex; rowIndex < board.length; rowIndex++) {
    if (board[rowIndex][rookColumnIndex] === 'p') {
      return 1;
    } else if (board[rowIndex][rookColumnIndex] === `B`) {
      return 0;
    }
  }
  return 0;
}

function getCountFromBottom(board, rookRowIndex, rookColumnIndex) {
  for (let rowIndex = rookRowIndex - 1; rowIndex >= 0; rowIndex--) {
    if (board[rowIndex][rookColumnIndex] === 'p') {
      return 1;
    } else if (board[rowIndex][rookColumnIndex] === `B`) {
      return 0;
    }
  }
  return 0;
}

function getCountFromLeft(board, rookRowIndex, rookColumnIndex) {
  for (let columnIndex = rookColumnIndex - 1; columnIndex >= 0; columnIndex--) {
    if (board[rookRowIndex][columnIndex] === 'p') {
      return 1;
    } else if (board[rookRowIndex][columnIndex] === `B`) {
      return 0;
    }
  }
  return 0;
}

function getCountFromRight(board, rookRowIndex, rookColumnIndex) {
  for (let columnIndex = rookColumnIndex; columnIndex < board[rookRowIndex].length; columnIndex++) {
    if (board[rookRowIndex][columnIndex] === 'p') {
      return 1;
    } else if (board[rookRowIndex][columnIndex] === `B`) {
      return 0;
    }
  }
  return 0;
}

var numRookCaptures = function (board) {
  const { rookRowIndex, rookColumnIndex } = getRookIndexes(board);
  return (
    getCountFromRight(board, rookRowIndex, rookColumnIndex) +
    getCountFromLeft(board, rookRowIndex, rookColumnIndex) +
    getCountFromBottom(board, rookRowIndex, rookColumnIndex) +
    getCountFromTop(board, rookRowIndex, rookColumnIndex)
  );
};

console.log(
  numRookCaptures([
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['p', 'p', '.', 'R', '.', 'p', 'B', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'B', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.']
  ])
);

console.log(
  numRookCaptures([
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
    ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
    ['.', 'p', 'B', 'R', 'B', 'p', '.', '.'],
    ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
    ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.']
  ])
);

console.log(
  numRookCaptures([
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['.', '.', '.', 'R', '.', '.', '.', 'p'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.']
  ])
);
