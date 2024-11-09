var maximumUnits = function (boxTypes, truckSize) {
  const sortedBoxTypes = boxTypes.sort(function ([aa, a], [bb, b]) {
    return b - a;
  });
  let totalUnits = 0;

  for (const [boxes, unitsInBoxes] of sortedBoxTypes) {
    if (truckSize > 0) {
      if (truckSize - boxes >= 0) {
        totalUnits += unitsInBoxes * boxes;
        truckSize -= boxes;
      } else {
        totalUnits += unitsInBoxes * truckSize;
        break;
      }
    } else {
      break;
    }
  }
  return totalUnits;
};

console.log(
  maximumUnits(
    (boxTypes = [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9]
    ]),
    (truckSize = 10)
  )
);
console.log(
  maximumUnits(
    (boxTypes = [
      [1, 3],
      [2, 2],
      [3, 1]
    ]),
    (truckSize = 4)
  )
);
