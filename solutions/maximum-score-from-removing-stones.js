var maximumScore = function (a, b, c) {
  const sortedArray = [a, b, c].sort((a, b) => a - b);
  const answer = Math.min(sortedArray[0] + sortedArray[1], sortedArray[2]);
  return answer + parseInt(Math.max(0, (sortedArray[0] + sortedArray[1] - sortedArray[2]) / 2));
};

console.log(maximumScore((a = 2), (b = 4), (c = 6)));
console.log(maximumScore((a = 4), (b = 4), (c = 6)));
console.log(maximumScore((a = 1), (b = 8), (c = 8)));
