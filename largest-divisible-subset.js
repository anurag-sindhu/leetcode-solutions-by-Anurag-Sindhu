var largestDivisibleSubset = function (nums) {
  const output = [];
  const obj = {};
  function isDivisible(array, startIndex, endIndex) {
    let isDivisibleResp = false;
    if (array.length === 2) {
      isDivisibleResp = array[0] % array[1] === 0 || array[1] % array[0] === 0;
    } else {  
      if (obj[startIndex][endIndex - 1]) {
        for (let index = startIndex; index < endIndex; index++) {
          if (!(array[index] % array[endIndex] === 0 || array[endIndex] % array[index] === 0)) {
            isDivisibleResp = false;
            break;
          } else {
            isDivisibleResp = true;
          }
        }
      }
    }
    if (!obj[startIndex]) {
      obj[startIndex] = {};
    }
    obj[startIndex][endIndex] = isDivisibleResp;
    return isDivisibleResp;
  }

  for (let length = 2; length <= nums.length; length++) {
    for (let index = 0; index <= nums.length - length; index++) {
      let startIndex = index;
      let endIndex = index + length - 1;
      const element = nums.slice(startIndex, endIndex + 1);
      if (isDivisible(element, startIndex, endIndex)) {
        output.push(element);
      }
    }
  }
  return output;
};

console.log(largestDivisibleSubset((nums = [2, 4, 5, 6, 8, 16, 20])));
console.log(largestDivisibleSubset((nums = [2, 4, 5, 6, 8, 16])));
console.log(largestDivisibleSubset((nums = [1, 2, 3])));
console.log(largestDivisibleSubset((nums = [1, 2, 4, 8])));
