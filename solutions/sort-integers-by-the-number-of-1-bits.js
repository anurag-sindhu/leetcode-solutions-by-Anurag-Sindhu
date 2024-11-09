var sortByBits = function (arr) {
  function countOne(num) {
    const bin = (num >>> 0).toString(2);
    const string = bin.toString();
    let count = 0;
    for (let index = 0; index < string.length; index++) {
      if (string[index] === `1`) {
        count++;
      }
    }
    return count;
  }
  const obj = {};
  for (const iterator of arr) {
    const temp = countOne(iterator);
    if (!obj[temp]) {
      obj[temp] = [];
    }
    obj[temp].push(iterator);
  }
  const bitNumberSort = Object.keys(obj).sort((a, b) => a - b);
  const output = [];
  for (const iterator of bitNumberSort) {
    output.push(...obj[iterator].sort((a, b) => a - b));
  }
  return output;
};

console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]));
console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
console.log(sortByBits(4));
console.log(sortByBits(10));
