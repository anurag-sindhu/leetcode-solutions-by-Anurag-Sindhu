var restoreArray = function (adjacentPairs) {
  const finalPresenceConfig = {};
  const output = [];
  const configObject = {};
  for (const [firstElement, secondElement] of adjacentPairs) {
    if (!configObject[firstElement]) {
      configObject[firstElement] = [];
    }
    configObject[firstElement].push(secondElement);
    if (!configObject[secondElement]) {
      configObject[secondElement] = [];
    }
    configObject[secondElement].push(firstElement);
  }

  const startingElement = (function () {
    for (const key in configObject) {
      if (configObject[key].length === 1) {
        if (!finalPresenceConfig[key]) {
          finalPresenceConfig[key] = true;
          output.push(key);
        }
        return key;
      }
    }
  })();

  function add(addKey) {
    for (const iterator of configObject[addKey]) {
      if (!finalPresenceConfig[iterator]) {
        finalPresenceConfig[iterator] = true;
        output.push(iterator);
        add(iterator);
      }
    }
  }

  add(startingElement);
  return output;
};

console.log(
  restoreArray(
    (adjacentPairs = adjacentPairs =
      [
        [4, -2],
        [1, 4],
        [-3, 1]
      ])
  )
);

console.log(
  restoreArray(
    (adjacentPairs = [
      [2, 1],
      [3, 4],
      [3, 2]
    ])
  )
);

console.log(restoreArray((adjacentPairs = [[100000, -100000]])));
