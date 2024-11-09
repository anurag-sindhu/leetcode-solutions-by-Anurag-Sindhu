var isValidSudoku = function (array) {
  const obj = {};
  for (let rowIndex = 0; rowIndex < array.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < array.length; columnIndex++) {
      const value = array[rowIndex][columnIndex];
      if (value !== '.') {
        const rowStatement = `${value} row Number ${rowIndex}`;
        const columnStatement = `${value} column Number ${columnIndex}`;
        const boxStatement = `${value} box Number ${parseInt(rowIndex / 3)}-${parseInt(
          columnIndex / 3
        )}`;
        if (obj[rowStatement] || obj[columnStatement] || obj[boxStatement]) {
          return false;
        } else {
          obj[rowStatement] = {};
          obj[columnStatement] = {};
          obj[boxStatement] = {};
        }
      }
    }
  }
  return true;
};

console.log(
  isValidSudoku(
    (board = [
      ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
      ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
      ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
      ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
      ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
      ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
      ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
      ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
      ['.', '.', '.', '.', '8', '.', '.', '7', '9']
    ])
  )
);

console.log(
  isValidSudoku(
    (board = [
      ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
      ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
      ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
      ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
      ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
      ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
      ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
      ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
      ['.', '.', '.', '.', '8', '.', '.', '7', '9']
    ])
  )
);
