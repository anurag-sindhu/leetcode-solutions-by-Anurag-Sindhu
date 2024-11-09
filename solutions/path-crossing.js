var isPathCrossing = function (path) {
  function getCoordinates(existX, existY, moveSide) {
    if (moveSide === 'N') {
      existY += 1;
    } else if (moveSide === 'E') {
      existX += 1;
    } else if (moveSide === 'W') {
      existX -= 1;
    } else {
      existY -= 1;
    }
    return { newX: existX, newY: existY };
  }
  let x = 0;
  let y = 0;
  function getKey(x, y) {
    return `${x}_${y}`;
  }
  const encounteredPoints = { [getKey(x, y)]: true };
  for (let index = 0; index < path.length; index++) {
    const element = path[index];
    const { newX, newY } = getCoordinates(x, y, element);
    const key = getKey(newX, newY);
    if (encounteredPoints[key]) {
      return true;
    } else {
      encounteredPoints[key] = true;
    }
    x = newX;
    y = newY;
  }
  return false;
};

console.log(isPathCrossing((path = 'NESW')));
console.log(isPathCrossing((path = 'NES')));
console.log(isPathCrossing((path = 'NESWW')));
