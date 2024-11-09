var distributeCandies = function (candyType) {
  const totalDifferentTypes = (function () {
    const typeObject = {};
    for (const iterator of candyType) {
      typeObject[iterator] = true;
    }
    return Object.keys(typeObject).length;
  })();
  const halfLength = candyType.length / 2;
  if (halfLength <= totalDifferentTypes) {
    return halfLength;
  } else {
    return totalDifferentTypes;
  }
};

console.log(distributeCandies((candyType = [1, 1, 2, 2, 3, 3])));
console.log(distributeCandies((candyType = [1, 1, 2, 3])));
console.log(distributeCandies((candyType = [6, 6, 6, 6])));
