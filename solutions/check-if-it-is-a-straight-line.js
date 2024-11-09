var checkStraightLine = function (coordinates) {
  let slope = null;
  const findSlope = function (coordinate1, coordinate2) {
    if (coordinate1[0] === coordinate2[0]) {
      return 15000;
    }
    const slope = (coordinate1[1] - coordinate2[1]) / (coordinate1[0] - coordinate2[0]);
    return slope;
  };
  for (let index = 1; index < coordinates.length; index++) {
    const getSlope = findSlope(coordinates[index], coordinates[0]);
    if (slope) {
      if (getSlope !== slope) {
        return false;
      }
    } else {
      slope = getSlope;
    }
  }
  return true;
};
console.log(
  checkStraightLine([
    [0, 0],
    [0, 1],
    [0, -1]
  ])
);
console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [2, 0]
  ])
);
console.log(
  checkStraightLine([
    [1, -8],
    [2, -3],
    [1, 2]
  ])
);

console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7]
  ])
);
console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7]
  ])
);
