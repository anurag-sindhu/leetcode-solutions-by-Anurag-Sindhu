var minWindow = function (str, target) {
  const possibilities = [];
  const destinationConfig = (function () {
    const config = {};
    for (let index = 0; index < target.length; index++) {
      if (!config[target[index]]) {
        config[target[index]] = 0;
      }
      config[target[index]] += 1;
    }
    return config;
  })();
  function isFrequencyMatching(source) {
    for (const iterator in destinationConfig) {
      if (!source[iterator] || source[iterator] < destinationConfig[iterator]) {
        return false;
      }
    }
    return true;
  }

  if (!str || !target) {
    return null;
  }
  const priorityArray = [];
  let priorityArrayIndex = 1;
  let sourceConfig = {};
  let tempStr = '';
  for (let index = 0; index < str.length; index++) {
    if (!sourceConfig[str[index]]) {
      sourceConfig[str[index]] = 0;
    }
    sourceConfig[str[index]] += 1;
    if (destinationConfig[str[index]]) {
      priorityArray.push(index);
    }
    tempStr += str[index];
    if (isFrequencyMatching(sourceConfig)) {
      possibilities.push(tempStr);
      tempStr = str.slice(priorityArray[priorityArrayIndex], index + 1);
      const newSourceConfig = (function () {
        const config = {};
        for (let index = 0; index < tempStr.length; index++) {
          if (!config[tempStr[index]]) {
            config[tempStr[index]] = 0;
          }
          config[tempStr[index]] += 1;
        }
        return config;
      })();
      sourceConfig = { ...newSourceConfig };
      priorityArrayIndex++;
    }
  }
  if (!possibilities.length) {
    return ``;
  }
  possibilities.sort((a, b) => a.length - b.length);
  let output = possibilities[0];

  function trimLeft() {
    let index = 0;
    for (; index < output.length; index++) {
      if (destinationConfig[output[index]]) {
        break;
      }
    }
    output = output.slice(index);
  }
  trimLeft();
  return output;
};
console.log(minWindow((s = 'ab'), (t = 'b')));

console.log(minWindow((s = 'ADOBECODEBANC'), (t = 'ABC')));
console.log(minWindow((s = 'a'), (t = 'a')));
console.log(minWindow((s = 'a'), (t = 'aa')));
