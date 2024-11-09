var arrayRankTransform = function (arr) {
  const originalArray = [...arr];
  const sortedArray = arr.sort((a, b) => a - b);
  const output = [];
  let lastRank = 1;
  for (let index = 0; index < sortedArray.length; index++) {
    if (index) {
      if (sortedArray[index] !== sortedArray[index - 1]) {
        lastRank += 1;
      }
    }
    output.push(lastRank);
  }
  const numberAndRankMapping = {};
  for (let index = 0; index < sortedArray.length; index++) {
    numberAndRankMapping[sortedArray[index]] = output[index];
  }
  const finalOutput = [];

  for (let index = 0; index < originalArray.length; index++) {
    finalOutput.push(numberAndRankMapping[originalArray[index]]);
  }

  return finalOutput;
};

console.log(arrayRankTransform((arr = [40, 10, 20, 30])));
console.log(arrayRankTransform((arr = [100, 100, 100])));
console.log(arrayRankTransform((arr = [37, 12, 28, 9, 100, 56, 80, 5, 12])));
