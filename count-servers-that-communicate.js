var countServers = function (grid) {
  const rowConfig = [];
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    let sum = 0;
    for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
      if (grid[rowIndex][columnIndex] === 1) {
        sum++;
      }
    }
    if (sum > 1) {
      rowConfig.push(sum);
    } else {
      rowConfig.push(0);
    }
  }
  const columnConfig = [];
  for (let columnIndex = 0; columnIndex < grid[0].length; columnIndex++) {
    let sumPlus = 0;
    let sumMinus = 0;
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
      if (grid[rowIndex][columnIndex] === 1) {
        if (rowConfig[rowIndex]) {
          sumMinus++;
        }
        sumPlus++;
      }
    }

    if (sumPlus > 1) {
      columnConfig.push(sumPlus - sumMinus);
    } else {
      columnConfig.push(0);
    }
  }
  let res =
    rowConfig.reduce((acc, value) => acc + value) +
    columnConfig.reduce((acc, value) => acc + value);
  return res;
};

console.log(
  countServers([
    [1, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 1]
  ])
);

console.log(
  countServers([
    [1, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 1]
  ])
);
