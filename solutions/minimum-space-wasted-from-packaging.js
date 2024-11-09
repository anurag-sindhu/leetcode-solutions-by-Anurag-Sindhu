function calculateWaste(package, boxes) {
  let sum = 0;
  let startPackageIndex = 0;
  let startBoxIndex = 0;
  while (startPackageIndex < package.length) {
    while (boxes[startBoxIndex] < package[startPackageIndex]) {
      startBoxIndex++;
    }
    if (boxes[startBoxIndex] >= package[startPackageIndex]) {
      sum += boxes[startBoxIndex] - package[startPackageIndex];
    }
    startPackageIndex++;
  }
  return sum;
}

var minWastedSpace = function (packages, boxes) {
  const sortedBoxes = boxes.map((data) => data.sort((a, b) => a - b)).sort(([a], [b]) => a - b);
  const sortedPackages = packages.sort((a, b) => a - b);
  const max = sortedPackages[sortedPackages.length - 1];
  const filterBoxes = sortedBoxes.filter((boxes) => max <= boxes[boxes.length - 1]);
  let minimumWaste = Infinity;
  if (!filterBoxes.length) {
    return -1;
  }
  for (const boxes of filterBoxes) {    
    const tempMinWaste = calculateWaste(sortedPackages, boxes);
    if (minimumWaste > tempMinWaste) {
      minimumWaste = tempMinWaste;
    }
  }
  return minimumWaste;
};

console.log(minWastedSpace([1, 8, 9, 2, 7], [[9], [10, 6], [2]]) === 15);
console.log(minWastedSpace([7, 6, 5, 3, 4], [[2, 7], [6], [10, 5]]) === 10);
console.log(
  minWastedSpace((packages = [3, 5, 8, 10, 11, 12]), (boxes = [[12], [11, 9], [10, 5, 14]])) === 9
);

console.log(
  minWastedSpace(
    (packages = [2, 3, 5]),
    (boxes = [
      [1, 4],
      [2, 3],
      [3, 4]
    ])
  ) === -1
);
console.log(
  minWastedSpace(
    (packages = [2, 3, 5]),
    (boxes = [
      [4, 8],
      [2, 8]
    ])
  ) === 6
);
