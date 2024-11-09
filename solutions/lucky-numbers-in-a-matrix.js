var luckyNumbers = function (matrix) {
  const rowMin = [];
  const columnMax = [];
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    let min = Infinity;
    for (let columnIndex = 0; columnIndex < matrix[rowIndex].length; columnIndex++) {
      const tempNum = matrix[rowIndex][columnIndex];
      if (min > tempNum) {
        min = tempNum;
      }
    }
    rowMin.push(min);
  }
  for (let columnIndex = 0; columnIndex < matrix[0].length; columnIndex++) {
    let max = -Infinity;
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
      const tempNum = matrix[rowIndex][columnIndex];
      if (max < tempNum) {
        max = tempNum;
      }
    }
    columnMax.push(max);
  }

  const obj = (function () {
    const respObj = {};
    for (const iterator of columnMax) {
      respObj[iterator] = true;
    }
    return respObj;
  })();
  for (const iterator of rowMin) {
    if (obj[iterator]) {
      return iterator;
    }
  }
  return [[]];
};

console.log(
  luckyNumbers(
    (matrix = [
      [3, 7, 8],
      [9, 11, 13],
      [15, 16, 17]
    ])
  )
);
console.log(
  luckyNumbers(
    (matrix = [
      [1, 10, 4, 2],
      [9, 3, 8, 7],
      [15, 16, 17, 12]
    ])
  )
);
console.log(
  luckyNumbers(
    (matrix = [
      [7, 8],
      [1, 2]
    ])
  )
);
