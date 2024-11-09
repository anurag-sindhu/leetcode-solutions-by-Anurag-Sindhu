var minCostClimbingStairs = function (n) {
  for (let index = 2; index < n.length; index++) {
    n[index] = Math.min(n[index - 1], n[index - 2]) + n[index];
  }
  return Math.min(n[n.length - 1], n[n.length - 2]);
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
console.log(minCostClimbingStairs([10, 15, 20]));
