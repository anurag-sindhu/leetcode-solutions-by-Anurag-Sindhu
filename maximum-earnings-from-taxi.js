var maxTaxiEarnings1 = function (n, rides) {
  let max = -Infinity;
  function maxTaxiEarningsHelper(rides, index = 0, fromEnd = null, cost = 0) {
    for (; index < rides.length; index++) {
      const [start, end, tip] = rides[index];
      if (fromEnd === null) {
        const updatedCost = cost + end - start + tip;
        if (max < updatedCost) {
          max = updatedCost;
        }
        maxTaxiEarningsHelper(rides, index + 1, end, updatedCost);
      } else {
        if (start >= fromEnd) {
          const updatedCost = cost + end - start + tip;
          if (max < updatedCost) {
            max = updatedCost;
          }
          maxTaxiEarningsHelper(rides, index + 1, end, updatedCost);
        }
      }
    }
    return;
  }
  maxTaxiEarningsHelper(rides.sort(([startA], [startB]) => startA - startB));
  return max;
};

var maxTaxiEarnings2 = function (n, rides) {
  const arr = [];
  for (let index = 0; index < n; index++) {
    for (const iterator of rides) {
      const [start, end, tip] = iterator;
      if (index === end - 1) {
        const updatedCost = end - start + tip;
        const tempRes = Math.max(arr[index - 1], updatedCost + arr[start - 1]);
        arr[index] = Math.max(arr[index] || 0, tempRes);
      } else {
        if (!arr[index]) {
          arr[index] = arr[index - 1] || 0;
        }
      }
    }
  }
  return arr[arr.length - 1];
};

var maxTaxiEarnings = function (n, rides) {
  const arr = [];
  const objTripEnd = (function () {
    let obj = {};
    for (const iterator of rides) {
      const [start, end, tip] = iterator;
      if (!obj[end - 1]) {
        obj[end - 1] = [];
      }
      obj[end - 1].push(iterator);
    }
    return obj;
  })();

  for (let index = 0; index < n; index++) {
    if (!arr[index]) {
      arr[index] = arr[index - 1] || 0;
    }
    if (objTripEnd[index]) {
      for (const iterator of objTripEnd[index]) {
        const [start, end, tip] = iterator;
        const updatedCost = end - start + tip;
        const tempRes = Math.max(arr[index - 1], updatedCost + arr[start - 1]);
        arr[index] = Math.max(arr[index] || 0, tempRes);
      }
    }
  }
  return arr[n - 1];
};
let res = null;
res = maxTaxiEarnings(
  (n = 20),
  (rides = [
    [1, 6, 1],
    [3, 10, 2],
    [10, 12, 3],
    [11, 12, 2],
    [12, 15, 2],
    [13, 18, 1]
  ])
);
console.log(res);

res = maxTaxiEarnings(
  (n = 5),
  (rides = [
    [2, 5, 4],
    [1, 5, 1]
  ])
);
console.log(res);
