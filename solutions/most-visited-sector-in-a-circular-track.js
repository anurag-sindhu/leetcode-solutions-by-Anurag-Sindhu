function increase(n, sectorsVisited, startingSector, endingSector) {
  if (!endingSector || startingSector === endingSector) {
    if (!sectorsVisited[startingSector]) {
      sectorsVisited[startingSector] = 0;
    }
    sectorsVisited[startingSector] += 1;
    return;
  }

  while (true) {
    if (!sectorsVisited[startingSector]) {
      sectorsVisited[startingSector] = 0;
    }
    sectorsVisited[startingSector] += 1;
    if (startingSector === endingSector) {
      break;
    }
    startingSector++;
    if (startingSector > n) {
      startingSector -= n;
    }
  }
  return sectorsVisited;
}
var mostVisited = function (n, rounds) {
  const sectorsVisited = {};
  for (let index = 0; index < rounds.length - 1; index++) {
    let startingSector = rounds[index];
    const endingSector = rounds[index + 1];
    if (index) {
      startingSector += 1;
      if (startingSector > n) {
        startingSector -= n;
      }
    }
    increase(n, sectorsVisited, startingSector, endingSector);
  }
  const config = {};
  for (const key in sectorsVisited) {
    if (!config[sectorsVisited[key]]) {
      config[sectorsVisited[key]] = [];
    }
    config[sectorsVisited[key]].push(key);
  }
  let highest = -Infinity;
  for (const key in config) {
    if (key > highest) {
      highest = key;
    }
  }
  return config[highest];
};

console.log(mostVisited(22, [21, 1, 12, 13, 10, 5, 12, 4, 10, 4, 21, 20, 16, 3, 2, 20, 9]));
console.log(mostVisited((n = 4), (rounds = [1, 3, 1, 2])));
console.log(mostVisited((n = 7), (rounds = [1, 3, 5, 7])));
console.log(mostVisited((n = 2), (rounds = [2, 1, 2, 1, 2, 1, 2, 1, 2])));
