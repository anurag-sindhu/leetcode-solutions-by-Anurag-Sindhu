var minimumCost = function (cost) {
  if (!cost.length) {
    return 0;
  }
  if (cost.length <= 2) {
    return cost[0] + cost[1];
  }
  cost.sort((a, b) => a - b);
  let index = cost.length - 1;
  let totalCost = 0;
  for (; index >= 0; index--) {
    totalCost += cost[index--] + cost[index--];
    if (!(index >= 3)) {
      break;
    }
  }

  if (index + 1 !== cost.length) {
    while (--index >= 0) {
      totalCost += cost[index];
    }
  }

  return totalCost;
};

console.log(minimumCost((cost = [2, 2, 5, 6, 7])));
console.log(minimumCost((cost = [2, 2, 5, 6, 7, 9])));
console.log(minimumCost((cost = [6, 5, 7, 9, 2, 2])));
console.log(minimumCost((cost = [1, 2, 3])));
console.log(minimumCost((cost = [5, 5])));
