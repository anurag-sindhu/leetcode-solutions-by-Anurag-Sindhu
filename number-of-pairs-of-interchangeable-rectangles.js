let countConfig = {};
function getCountFor(num) {
  const orgNum = num;
  if (countConfig[num] || countConfig[num] === 0) {
    return countConfig[num];
  }
  let total = 0;
  while (--num) {
    total += num;
  }
  countConfig[orgNum] = total;
  return total;
}

var interchangeableRectangles = function (rectangles) {
  let count = 0;
  const obj = {};
  for (const iterator of rectangles) {
    if (!obj[iterator[0] / iterator[1]]) {
      obj[iterator[0] / iterator[1]] = 0;
    }
    obj[iterator[0] / iterator[1]] += 1;
  }
  for (const key in obj) {
    count += getCountFor(obj[key]);
  }

  return count;
};

console.log(
  interchangeableRectangles(
    (rectangles = [
      [4, 8],
      [3, 6],
      [3, 6],
      [10, 20]
    ])
  )
);
console.log(
  interchangeableRectangles(
    (rectangles = [
      [4, 5],
      [7, 8]
    ])
  )
);
