var merge = function (intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  const isOverLapped = (firstInterval, lastInterval) => {
    if (lastInterval[0] <= firstInterval[1]) {
      let firstMoment = firstInterval[0];
      let lastMoment = lastInterval[1] > firstInterval[1] ? lastInterval[1] : firstInterval[1];
      return [firstMoment, lastMoment];
    }
    return false;
  };
  const getLastIntervalIndex = (fromIndex) => {
    for (let index = fromIndex - 1; index >= 0; index--) {
      if (intervals[index]) {
        return index;
      }
    }
    return null;
  };
  let getLastIntervalIndexTemp = null;
  let isOverLappedTemp = null;
  for (let index = 0; index < intervals.length; index++) {
    getLastIntervalIndexTemp = getLastIntervalIndex(index);
    if (getLastIntervalIndexTemp !== null) {
      isOverLappedTemp = isOverLapped(intervals[getLastIntervalIndexTemp], intervals[index]);
      if (isOverLappedTemp) {
        intervals[getLastIntervalIndexTemp] = isOverLappedTemp;
        intervals[index] = undefined;
      }
    }
  }
  return intervals.filter((value) => !!value);
};
console.log(
  merge([
    [1, 4],
    [2, 3]
  ])
);
console.log(
  merge([
    [1, 3],
    [5, 6]
  ])
);
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [9, 12],
    [11, 14],
    [15, 18]
  ])
);
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
  ])
);
console.log(
  merge([
    [1, 4],
    [4, 5]
  ])
);
console.log(
  merge([
    [1, 4],
    [4, 5]
  ])
);
