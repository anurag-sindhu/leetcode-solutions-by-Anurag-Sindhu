var maxScore = function (cardPoints, k) {
  const totalLength = cardPoints.length;
  //get sum of last k elements
  let initialSum = (function () {
    let startIndex = totalLength - k;
    let sum = 0;
    while (startIndex < totalLength) {
      sum += cardPoints[startIndex];
      startIndex++;
    }
    return sum;
  })();

  let startIndex = totalLength - k;
  let max = initialSum;
  //sliding rotating window
  for (let index = 0; index < k; index++) {
    initialSum = initialSum - cardPoints[startIndex] + cardPoints[startIndex + k - totalLength];
    startIndex++;
    if (initialSum > max) {
      max = initialSum;
    }
  }
  return max;
};

console.log(maxScore((cardPoints = [9, 7, 7, 9, 7, 7, 9]), (k = 7)));
console.log(maxScore((cardPoints = [2, 2, 2]), (k = 2)));
console.log(maxScore((cardPoints = [1, 2, 3, 4, 5, 6, 1]), (k = 3)));
console.log(maxScore((cardPoints = [5, 3, 0, 2, 9]), (k = 3)));
console.log(maxScore((cardPoints = [5, 3, 1, 2, 9]), (k = 3)));
