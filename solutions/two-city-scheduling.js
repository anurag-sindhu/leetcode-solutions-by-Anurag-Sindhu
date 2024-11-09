var twoCitySchedCost = function (costs) {
  const savingObject = {};
  for (let index = 0; index < costs.length; index++) {
    const [costA, costB] = costs[index];
    if (!savingObject[costB - costA]) {
      savingObject[costB - costA] = [];
    }
    savingObject[costB - costA].push([costA, costB]);
  }
  const sortedSaveObject = Object.keys(savingObject)
    .sort((a, b) => a - b)
    
  let totalCost = 0;
  let count = 0;
  for (const iterator of sortedSaveObject) {
    for (const [costA, costB] of savingObject[iterator]) {
      if (count < costs.length / 2) {
        totalCost += costA;
        count += 1;
      } else {
        totalCost += costB;
      }
    }
  }
  return totalCost;
};

console.log(
  twoCitySchedCost(
    (costs = [
      [20, 60],
      [10, 50],
      [40, 200],
      [30, 300]
    ])
  )
);
console.log(
  twoCitySchedCost(
    (costs = [
      [10, 20],
      [30, 200],
      [400, 50],
      [30, 20]
    ])
  )
);
console.log(
  twoCitySchedCost(
    (costs = [
      [259, 770],
      [448, 54],
      [926, 667],
      [184, 139],
      [840, 118],
      [577, 469]
    ])
  )
);

console.log(
  twoCitySchedCost(
    (costs = [
      [515, 563],
      [451, 713],
      [537, 709],
      [343, 819],
      [855, 779],
      [457, 60],
      [650, 359],
      [631, 42]
    ])
  )
);
