function checkWordPresence(board, word, rowIndex, columnIndex, wordIndex, engagedIndexes = {}) {
  if (word[wordIndex]) {
    if (
      board[rowIndex + 1] &&
      board[rowIndex + 1][columnIndex] &&
      word[wordIndex] === board[rowIndex + 1][columnIndex] &&
      !engagedIndexes[`${rowIndex + 1}_${columnIndex}`]
    ) {
      engagedIndexes[`${rowIndex + 1}_${columnIndex}`] = true;
      return checkWordPresence(board, word, rowIndex + 1, columnIndex, ++wordIndex, engagedIndexes);
    } else if (
      board[rowIndex - 1] &&
      board[rowIndex - 1][columnIndex] &&
      word[wordIndex] === board[rowIndex - 1][columnIndex] &&
      !engagedIndexes[`${rowIndex - 1}_${columnIndex}`]
    ) {
      engagedIndexes[`${rowIndex - 1}_${columnIndex}`] = true;
      return checkWordPresence(board, word, rowIndex - 1, columnIndex, ++wordIndex, engagedIndexes);
    } else if (
      board[rowIndex] &&
      board[rowIndex][columnIndex + 1] &&
      word[wordIndex] === board[rowIndex][columnIndex + 1] &&
      !engagedIndexes[`${rowIndex}_${columnIndex + 1}`]
    ) {
      engagedIndexes[`${rowIndex}_${columnIndex + 1}`] = true;
      return checkWordPresence(board, word, rowIndex, columnIndex + 1, ++wordIndex, engagedIndexes);
    } else if (
      board[rowIndex] &&
      board[rowIndex][columnIndex - 1] &&
      word[wordIndex] === board[rowIndex][columnIndex - 1] &&
      !engagedIndexes[`${rowIndex}_${columnIndex - 1}`]
    ) {
      engagedIndexes[`${rowIndex}_${columnIndex - 1}`] = true;
      return checkWordPresence(board, word, rowIndex, columnIndex - 1, ++wordIndex, engagedIndexes);
    } else {
      return false;
    }
  } else {
    return true;
  }
}

var exist = function (board, word) {
  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < board[rowIndex].length; columnIndex++) {
      if (word[0] === board[rowIndex][columnIndex]) {
        if (
          checkWordPresence(board, word, rowIndex, columnIndex, 1, {
            [`${rowIndex}_${columnIndex}`]: true
          })
        ) {
          return true;
        }
      }
    }
  }
  return false;
};

console.log(
  exist(
    [
      ['C', 'A', 'A'],
      ['A', 'A', 'A'],
      ['B', 'C', 'D']
    ],
    'AAB'
  )
);
console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']
    ],
    (word = 'ABCB')
  )
);

console.log(
  exist(
    (board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']
    ]),
    (word = 'SEE')
  )
);

console.log(
  exist(
    (board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']
    ]),
    (word = 'ABCCED')
  )
);
