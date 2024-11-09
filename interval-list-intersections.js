var intervalIntersection = function (firstList, secondList) {
  const arr = [];
  for (let firstIndex = 0; firstIndex < firstList.length; firstIndex++) {
    for (let secondIndex = 0; secondIndex < secondList.length; secondIndex++) {
      if (
        firstList[firstIndex][1] > secondList[secondIndex][0] &&
        firstList[firstIndex][0] < secondList[secondIndex][1]
      ) {
        arr.push([secondList[secondIndex][0], firstList[firstIndex][1]]);
      }
    }
  }
  return arr;
};
console.log(
  intervalIntersection(
    (firstList = [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25]
    ]),
    (secondList = [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26]
    ])
  )
);
console.log(
  intervalIntersection(
    [[14, 16]],
    [
      [7, 13],
      [16, 20]
    ]
  )
);
console.log(
  intervalIntersection(
    (firstList = [
      [1, 1],
      [2, 2]
    ]),
    (secondList = [
      [1, 1],
      [2, 2]
    ])
  )
);
console.log(intervalIntersection((firstList = [[0, 2]]), (secondList = [[9, 5]])));

console.log(
  intervalIntersection(
    (firstList = [
      [1, 3],
      [5, 9]
    ]),
    (secondList = [])
  )
);
