var topKFrequent = function (nums, k) {
  const obj = {};
  for (const iterator of nums) {
    if (obj[iterator]) {
      obj[iterator].count += 1;
    } else {
      obj[iterator] = { count: 1, index: iterator };
    }
  }
  const sortedObject = Object.values(obj).sort(
    ({ count: countA }, { count: countB }) => countB - countA
  );
  const output = [];
  for (let index = 0; index < k; index++) {
    output.push(sortedObject[index].index);
  }
  return output;
};

console.log(topKFrequent([1], (k = 1)));
console.log(topKFrequent([1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3], (k = 2)));
