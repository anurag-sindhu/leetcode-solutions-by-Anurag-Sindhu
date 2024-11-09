var maximumBeauty = function (items, queries) {
  const orgQueries = [...queries];
  const itemsSortedArr = items.sort(([a], [b]) => a - b);
  const queriesSortedArr = queries.sort((a, b) => a - b);
  const filteredItemSortedArr = [];
  for (let index = 0; index < itemsSortedArr.length; index++) {
    if (!index) {
      filteredItemSortedArr.push(itemsSortedArr[index]);
    } else {
      const [price, beauty] = filteredItemSortedArr[filteredItemSortedArr.length - 1];
      if (itemsSortedArr[index][0] === price) {
        filteredItemSortedArr[filteredItemSortedArr.length - 1] = [price, itemsSortedArr[index][1]];
      } else {
        filteredItemSortedArr.push(itemsSortedArr[index]);
      }
    }
  }
  const lowPrice = itemsSortedArr[0][0];
  const lowBeauty = 0;
  const highPrice = itemsSortedArr[itemsSortedArr.length - 1][0];
  const highBeauty = itemsSortedArr[itemsSortedArr.length - 1][1];
  let filteredSortedArrIndex = 0;
  let output = [];
  for (const iterator of queriesSortedArr) {
    if (iterator < lowPrice) {
      output.push(lowBeauty);
    } else if (highPrice < iterator) {
      output.push(highBeauty);
    } else {
      while (true && filteredItemSortedArr[filteredSortedArrIndex] !== undefined) {
        const currentPrice = filteredItemSortedArr[filteredSortedArrIndex][0];
        if (currentPrice === iterator) {
          output.push(filteredItemSortedArr[filteredSortedArrIndex][1]);
          break;
        } else {
          if (currentPrice < iterator) {
            filteredSortedArrIndex++;
          } else {
            output.push(filteredItemSortedArr[filteredSortedArrIndex - 1][1]);
            break;
          }
        }
      }
    }
  }
  return output;
};

console.log(
  maximumBeauty(
    [
      [193, 732],
      [781, 962],
      [864, 954],
      [749, 627],
      [136, 746],
      [478, 548],
      [640, 908],
      [210, 799],
      [567, 715],
      [914, 388],
      [487, 853],
      [533, 554],
      [247, 919],
      [958, 150],
      [193, 523],
      [176, 656],
      [395, 469],
      [763, 821],
      [542, 946],
      [701, 676]
    ],
    [
      885, 1445, 1580, 1309, 205, 1788, 1214, 1404, 572, 1170, 989, 265, 153, 151, 1479, 1180, 875,
      276, 1584
    ]
  )
);
console.log(
  maximumBeauty(
    (items = [
      [1, 2],
      [3, 2],
      [2, 4],
      [5, 6],
      [3, 5]
    ]),
    (queries = [1, 2, 3, 4, 5, 6])
  )
);

console.log(
  maximumBeauty(
    (items = [
      [1, 2],
      [1, 2],
      [1, 3],
      [1, 4]
    ]),
    (queries = [1])
  )
);
console.log(maximumBeauty((items = [[10, 1000]]), (queries = [5])));
