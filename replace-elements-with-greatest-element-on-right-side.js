var replaceElements = function (arr) {
  let tempMax = arr[arr.length - 1];
  const output = [-1];
  for (let index = arr.length - 1 - 1; index >= 0; index--) {
    output.push(tempMax);
    if (arr[index] > tempMax) {
      tempMax = arr[index];
    }
  }
  return output.reverse();
};

console.log(replaceElements((arr = [17, 18, 5, 4, 6, 1])));
console.log(replaceElements((arr = [400])));
