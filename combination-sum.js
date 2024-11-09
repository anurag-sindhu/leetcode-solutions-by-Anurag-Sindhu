var startCombinationSum = function (candidates, target, sumArr = [], output = []) {
  const arraySum = sumArr.reduce((accumulator, candidate) => accumulator + candidate, 0);
  if (target === arraySum) {
    output.push(sumArr);
  }
  if (target < arraySum) {
    return;
  }
  for (const iterator of candidates) {
    startCombinationSum(candidates, target, [...sumArr, iterator], output);
  }
  return output;
};

function combinationSum(candidates, target) {
  const arr = startCombinationSum(candidates, target);
  const obj = {};
  for (const iterator of arr) {
    const key = (function () {
      const sortedIterator = iterator.sort((a, b) => a - b);
      let str = ``;
      for (const iterator of sortedIterator) {
        str += `${iterator}_`;
      }
      return str;
    })();
    obj[key] = iterator;
  }
  return Object.values(obj);
}

let res;
res = combinationSum([100, 200, 4, 12], 400);
console.log(res);
res = combinationSum((candidates = [2, 3, 6, 7]), (target = 7));
console.log(res);
res = combinationSum((candidates = [2, 3, 5]), (target = 8));
console.log(res);
res = combinationSum((candidates = [2]), (target = 1));
console.log(res);
