var minimumCoins = function (prices) {
    let cost = 0;
    let freeEligibilityCount = 0;
    let minCost = Infinity;
    let minCostIndex = 0;
    for (let index = 0; index < prices.length; index++) {
        const element = prices[index];
        if (freeEligibilityCount) {
            if (minCost >= element) {
                minCost = element;
                minCostIndex = index;
            }
            freeEligibilityCount--;
            continue;
        }
        if (minCost <= element) {
            cost += minCost;
            freeEligibilityCount = minCostIndex + 1;
            minCost = Infinity;
            index = minCostIndex;
        } else {
            cost += element;
            freeEligibilityCount = index + 1;
        }
    }
    return cost;
};

console.log(
    minimumCoins(
        (prices = [38, 23, 27, 32, 47, 45, 48, 24, 39, 26, 37, 42, 24, 45, 27, 26, 15, 16, 26, 6]),
    ) === 132,
);
console.log(minimumCoins((prices = [3, 1, 2])) === 4);
console.log(minimumCoins((prices = [1, 10, 1, 1])) === 4);
console.log(minimumCoins((prices = [26, 18, 6, 12, 49, 7, 45, 45])) === 39);
