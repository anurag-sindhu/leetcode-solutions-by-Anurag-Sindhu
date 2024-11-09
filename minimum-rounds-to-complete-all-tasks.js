var minimumRounds = function (tasks) {
  const config = {};
  for (const iterator of tasks) {
    if (!config[iterator]) {
      config[iterator] = 0;
    }
    config[iterator] += 1;
  }
  let round = 0;
  while (Object.keys(config).length) {
    for (const key in config) {
      if (config[key] === 1) {
        return -1;
      } else if (config[key] === 2) {
        config[key] -= 2;
        round++;
      } else if (config[key] === 4) {
        config[key] -= 2;
        round++;
      } else if (config[key] === 0) {
        delete config[key];
      } else {
        config[key] -= 3;
        round++;
      }
    }
  }

  return round;
};

console.log(minimumRounds((tasks = [2, 3, 3])));
console.log(minimumRounds((tasks = [2, 2, 3, 3, 2, 4, 4, 4, 4, 4])));
