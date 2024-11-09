var eraseOverlapIntervals = function (intervals) {
  let count = 0;
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  function isOverlapping([startInterval1, endInterval1], [startInterval2, endInterval2]) {
    if (startInterval1 === startInterval2) {
      return true;
    }
    if (endInterval1 > startInterval2) {
      return true;
    }
    return false;
  }

  function isFirstPointerBigLength([startInterval1, endInterval1], [startInterval2, endInterval2]) {
    if (startInterval1 < startInterval2) {
      return false;
    }
    const sizeA = endInterval1 - startInterval1;
    const sizeB = endInterval2 - startInterval2;
    if (sizeA > sizeB) {
      return true;
    }
    return false;
  }

  let pointer1Index = 0;
  let pointer2Index = 1;
  let pointer1 = null;
  let pointer2 = null;
  while (sortedIntervals[pointer2Index] !== undefined) {
    pointer1 = sortedIntervals[pointer1Index];
    pointer2 = sortedIntervals[pointer2Index];
    if (isOverlapping(pointer1, pointer2)) {
      if (isFirstPointerBigLength(pointer1, pointer2)) {
        pointer1Index++;
        pointer2Index++;
      } else {
        pointer2Index++;
      }
      count++;
    } else {
      const higher = Math.max(pointer1Index, pointer2Index);
      pointer1Index = higher;
      pointer2Index = higher;
      pointer2Index++;
    }
  }
  return count;
};

console.log(
  eraseOverlapIntervals(
    (intervals = [
      [-52, 31],
      [-73, -26],
      [82, 97],
      [-65, -11],
      [-62, -49],
      [95, 99],
      [58, 95],
      [-31, 49],
      [66, 98],
      [-63, 2],
      [30, 47],
      [-40, -26]
    ])
  )
);
console.log(
  eraseOverlapIntervals(
    (intervals = [
      [1, 2],
      [2, 3],
      [3, 4],
      [1, 3]
    ])
  )
);

console.log(
  eraseOverlapIntervals(
    (intervals = [
      [1, 2],
      [1, 2],
      [1, 2]
    ])
  )
);

console.log(
  eraseOverlapIntervals(
    (intervals = [
      [1, 2],
      [2, 3]
    ])
  )
);
