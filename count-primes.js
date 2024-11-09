function pushOddNums(till) {
  let obj = {};
  for (let index = 3; index < till; index += 2) {
    obj[index] = true;
  }
  return obj;
}

var countPrimes = function (till) {
  if (till <= 2) {
    return 0;
  }
  if (till === 3) {
    return 1;
  }
  const getOddNums = pushOddNums(till);
  for (const parentKey in getOddNums) {
    for (const childKey in getOddNums) {
      if (parentKey !== childKey) {
        if (parentKey % childKey === 0) {
          delete getOddNums[parentKey];
        }
      }
    }
  }
  return Object.keys(getOddNums).length + 1;
};
console.log(countPrimes(499979));
console.log(countPrimes(40));
console.log(countPrimes(4));
