var tupleSameProduct = function (array) {
  const mapping = {};
  for (let parentIndex = 0; parentIndex < array.length - 1; parentIndex++) {
    for (let childIndex = parentIndex + 1; childIndex < array.length; childIndex++) {
      const tempSum = array[parentIndex] * array[childIndex];
      if (!mapping[tempSum]) {
        mapping[tempSum] = 0;
      }
      mapping[tempSum] += 1;
    }
  }
  let count = 0;
  for (const key in mapping) {
    if (mapping[key] > 1) {
      let tempProd;
      let tempFreq = mapping[key];
      tempProd = (tempFreq - 1) * tempFreq;
      count += tempProd * 4;
    }
  }
  return count;
};
console.log(tupleSameProduct((nums = [1, 12, 2, 3, 4, 6])));

console.log(tupleSameProduct((nums = [1, 2, 4, 5, 10])));

console.log(tupleSameProduct([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192]));
console.log(tupleSameProduct((nums = [1, 2, 4, 5, 10])));
