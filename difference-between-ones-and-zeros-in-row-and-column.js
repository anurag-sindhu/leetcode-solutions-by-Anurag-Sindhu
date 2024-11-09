var onesMinusZerosFirst = function (grid) {
  const newGridForColumn = []
  const newGridForRow = []
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    if (!newGridForRow[rowIndex]) {
      newGridForRow[rowIndex] = []
    }
    if (!newGridForColumn[rowIndex]) {
      newGridForColumn[rowIndex] = []
    }
    for (
      let columnIndex = 0;
      columnIndex < grid[rowIndex].length;
      columnIndex++
    ) {
      if (grid[rowIndex][columnIndex]) {
        newGridForRow[rowIndex][columnIndex] = {
          0: 0,
          1: 1,
        }
        newGridForColumn[rowIndex][columnIndex] = {
          0: 0,
          1: 1,
        }
      } else {
        newGridForRow[rowIndex][columnIndex] = {
          0: 1,
          1: 0,
        }
        newGridForColumn[rowIndex][columnIndex] = {
          0: 1,
          1: 0,
        }
      }
    }
  }

  for (let rowIndex = 0; rowIndex < newGridForRow.length; rowIndex++) {
    for (
      let columnIndex = 0;
      columnIndex < newGridForRow[rowIndex].length;
      columnIndex++
    ) {
      if (newGridForRow[rowIndex][columnIndex - 1] !== undefined) {
        newGridForRow[rowIndex][columnIndex] = {
          0:
            newGridForRow[rowIndex][columnIndex]['0'] +
            newGridForRow[rowIndex][columnIndex - 1]['0'],
          1:
            newGridForRow[rowIndex][columnIndex]['1'] +
            newGridForRow[rowIndex][columnIndex - 1]['1'],
        }
      }
    }
  }

  for (let rowIndex = 0; rowIndex < newGridForColumn.length; rowIndex++) {
    for (
      let columnIndex = 0;
      columnIndex < newGridForColumn[rowIndex].length;
      columnIndex++
    ) {
      if (
        newGridForColumn[rowIndex - 1] &&
        newGridForColumn[rowIndex - 1][columnIndex] !== undefined
      ) {
        newGridForColumn[rowIndex][columnIndex] = {
          0:
            newGridForColumn[rowIndex][columnIndex]['0'] +
            newGridForColumn[rowIndex - 1][columnIndex]['0'],
          1:
            newGridForColumn[rowIndex][columnIndex]['1'] +
            newGridForColumn[rowIndex - 1][columnIndex]['1'],
        }
      }
    }
  }

  const output = []
  const totalRows = grid.length
  const totalColumns = grid[0].length
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    if (!output[rowIndex]) {
      output[rowIndex] = []
    }
    for (
      let columnIndex = 0;
      columnIndex < grid[rowIndex].length;
      columnIndex++
    ) {
      output[rowIndex][columnIndex] =
        newGridForRow[rowIndex][totalColumns - 1]['1'] -
        newGridForRow[rowIndex][totalColumns - 1]['0'] +
        newGridForColumn[totalRows - 1][columnIndex]['1'] -
        newGridForColumn[totalRows - 1][columnIndex]['0']
    }
  }

  return output
}

var onesMinusZeros = function (grid) {
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (
      let columnIndex = 0;
      columnIndex < grid[rowIndex].length;
      columnIndex++
    ) {
      if (grid[rowIndex][columnIndex]) {
        grid[rowIndex][columnIndex] = {
          rowSum: {
            0: 0,
            1: 1,
          },
          columnSum: {
            0: 0,
            1: 1,
          },
        }
      } else {
        grid[rowIndex][columnIndex] = {
          rowSum: {
            0: 1,
            1: 0,
          },
          columnSum: {
            0: 1,
            1: 0,
          },
        }
      }
    }
  }

  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (
      let columnIndex = 0;
      columnIndex < grid[rowIndex].length;
      columnIndex++
    ) {
      if (grid[rowIndex - 1] && grid[rowIndex - 1][columnIndex]) {
        grid[rowIndex][columnIndex].rowSum['0'] +=
          grid[rowIndex - 1][columnIndex].rowSum['0']
        grid[rowIndex][columnIndex].rowSum['1'] +=
          grid[rowIndex - 1][columnIndex].rowSum['1']
      }
      if (grid[rowIndex][columnIndex - 1]) {
        grid[rowIndex][columnIndex].columnSum['0'] +=
          grid[rowIndex][columnIndex - 1].columnSum['0']
        grid[rowIndex][columnIndex].columnSum['1'] +=
          grid[rowIndex][columnIndex - 1].columnSum['1']
      }
    }
  }

  const lastRowIndex = grid.length - 1
  const lastColumnIndex = grid[0].length - 1
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (
      let columnIndex = 0;
      columnIndex < grid[rowIndex].length;
      columnIndex++
    ) {
      grid[rowIndex][columnIndex].output =
        grid[rowIndex][lastColumnIndex].columnSum['1'] -
        grid[rowIndex][lastColumnIndex].columnSum['0'] +
        grid[lastRowIndex][columnIndex].rowSum['1'] -
        grid[lastRowIndex][columnIndex].rowSum['0']
    }
  }

  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (
      let columnIndex = 0;
      columnIndex < grid[rowIndex].length;
      columnIndex++
    ) {
      grid[rowIndex][columnIndex] = grid[rowIndex][columnIndex].output
    }
  }

  return grid
}

console.log(
  onesMinusZeros(
    (grid = [
      [0, 1, 1],
      [1, 0, 1],
      [0, 0, 1],
    ]),
  ),
)

console.log(
  onesMinusZeros(
    (grid = [
      [1, 1, 1],
      [1, 1, 1],
    ]),
  ),
)
