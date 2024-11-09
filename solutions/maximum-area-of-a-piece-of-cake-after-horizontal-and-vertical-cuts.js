function findBiggestDifference(array) {
  let difference = 0;
  for (let index = 1; index < array.length; index++) {
    const resp = array[index] - array[index - 1];
    if (resp > difference) {
      difference = resp;
    }
  }
  return difference;
}
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.push(0, h);
  verticalCuts.push(0, w);
  let updatedHorizontalCuts = horizontalCuts.sort((a, b) => a - b);
  let updatedVerticalCuts = verticalCuts.sort((a, b) => a - b);

  return parseInt(
    (BigInt(findBiggestDifference(updatedHorizontalCuts)) *
      BigInt(findBiggestDifference(updatedVerticalCuts))) %
      BigInt(10 ** 9 + 7)
  );
};

var maxArea1 = function (h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.push(0, h);
  verticalCuts.push(0, w);
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);

  let hMax = 0;
  let vMax = 0;

  for (let i = 1; i < verticalCuts.length; i++) {
    hMax = Math.max(hMax, verticalCuts[i] - verticalCuts[i - 1]);
  }

  for (let i = 1; i < horizontalCuts.length; i++) {
    vMax = Math.max(vMax, horizontalCuts[i] - horizontalCuts[i - 1]);
  }

  return parseInt((BigInt(hMax) * BigInt(vMax)) % BigInt(Math.pow(10, 9) + 7));
};

console.log(maxArea(1000000000, 1000000000, [2], [2]));
console.log(maxArea((h = 5), (w = 4), (horizontalCuts = [1, 2, 4]), (verticalCuts = [1, 3])));
console.log(maxArea((h = 5), (w = 4), (horizontalCuts = [3, 1]), (verticalCuts = [1])));
console.log(maxArea((h = 5), (w = 4), (horizontalCuts = [3]), (verticalCuts = [3])));
