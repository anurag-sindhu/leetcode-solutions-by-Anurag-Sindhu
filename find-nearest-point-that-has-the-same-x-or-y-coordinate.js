var nearestValidPoint = function (x, y, points) {
  let minDistance = Infinity;
  let minIndex = 0;
  for (let index = 0; index < points.length; index++) {
    const [xPoint, yPoint] = points[index];
    if (xPoint === x || yPoint === y) {
      const distance = Math.abs(x - xPoint) + Math.abs(y - yPoint);
      if (minDistance > distance) {
        minDistance = distance;
        minIndex = index;
      }
    }
  }
  if (minDistance === Infinity) {
    return -1;
  }
  return minIndex;
};

console.log(nearestValidPoint((x = 3), (y = 4), (points = [[2, 3]])));
console.log(nearestValidPoint((x = 3), (y = 4), (points = [[3, 4]])));

console.log(
  nearestValidPoint(
    (x = 3),
    (y = 4),
    (points = [
      [1, 2],
      [3, 1],
      [2, 4],
      [2, 3],
      [4, 4]
    ])
  )
);
