var countGoodTriplets = function (array, a, b, c) {
  let output = 0;
  for (let aIndex = 0; aIndex < array.length - 2; aIndex++) {
    for (let bIndex = aIndex + 1; bIndex < array.length - 1; bIndex++) {
      if (!(Math.abs(array[aIndex] - array[bIndex]) <= a)) {
        continue;
      }
      for (let cIndex = bIndex + 1; cIndex < array.length; cIndex++) {
        if (
          Math.abs(array[bIndex] - array[cIndex]) <= b &&
          Math.abs(array[cIndex] - array[aIndex]) <= c
        ) {
          output += 1;
        }
      }
    }
  }
  return output;
};

console.log(countGoodTriplets((arr = [3, 0, 1, 1, 9, 7]), (a = 7), (b = 2), (c = 3)));
console.log(countGoodTriplets((arr = [1, 1, 2, 2, 3]), (a = 0), (b = 0), (c = 1)));
