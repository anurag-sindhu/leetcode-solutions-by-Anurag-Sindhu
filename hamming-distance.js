var hammingDistance = function (x, y) {
  const convert = (dec) => (dec >>> 0).toString(2);
  let convertedX = convert(x);
  let convertedY = convert(y);
  const convertedXLength = convertedX.length;
  const convertedYLength = convertedY.length;
  if (convertedXLength !== convertedYLength) {
    if (convertedXLength > convertedYLength) {
      for (let index = 1; index <= convertedXLength - convertedYLength; index++) {
        convertedY = `0` + convertedY;
      }
    } else {
      for (let index = 1; index <= convertedYLength - convertedXLength; index++) {
        convertedX = `0` + convertedX;
      }
    }
  }
  let count = 0;
  for (let index = 0; index < convertedY.length; index++) {
    if (convertedY[index] !== convertedX[index]) {
      count++;
    }
  }
  return count;
};
console.log(hammingDistance((x = 1), (y = 4)));
console.log(hammingDistance((x = 3), (y = 1)));
