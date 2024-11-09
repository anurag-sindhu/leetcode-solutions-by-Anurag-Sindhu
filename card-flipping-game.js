const countFrequency = function (fronts) {
  const obj = {};
  for (const iterator of fronts) {
    if (!obj[iterator]) {
      obj[iterator] = 0;
    }
    obj[iterator] += 1;
  }
  return obj;
};

var flipgame = function (fronts, backs) {
  let min = Infinity;
  const frequency = countFrequency(fronts);
  for (let index = 0; index < fronts.length; index++) {
    if (fronts[index] !== backs[index] && !frequency[backs[index]]) {
      if (min > fronts[index]) {
        min = fronts[index];
      }
    }
  }
  return min === Infinity ? 0 : min;
};

console.log(flipgame([1, 1], [1, 2]));
console.log(flipgame((fronts = [1]), (backs = [1])));
console.log(flipgame((fronts = [1, 2, 4, 4, 7]), (backs = [1, 3, 4, 1, 3])));
