var maximumWealth = function (accounts) {
  let max = -Infinity;
  for (let index = 0; index < accounts.length; index++) {
    let tempSum = 0;
    for (let childIndex = 0; childIndex < accounts[index].length; childIndex++) {
      tempSum += accounts[index][childIndex];
    }
    if (max < tempSum) {
      max = tempSum;
    }
  }
  return max;
};

console.log(
  maximumWealth(
    (accounts = [
      [1, 2, 3],
      [3, 2, 1]
    ])
  )
);
console.log(
  maximumWealth(
    (accounts = [
      [1, 5],
      [7, 3],
      [3, 5]
    ])
  )
);
console.log(
  maximumWealth(
    (accounts = [
      [2, 8, 7],
      [7, 1, 3],
      [1, 9, 5]
    ])
  )
);
