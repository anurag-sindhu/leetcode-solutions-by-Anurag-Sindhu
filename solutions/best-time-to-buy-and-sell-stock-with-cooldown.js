var maxProfit = function (
    prices,
    index = 0,
    buyPriceIndex = undefined,
    prevSoldIndex = undefined,
    profit = 0,
) {
    for (; index < prices.length; index++) {
        const element = prices[index];
        if (element < prices[index + 1]) {
            if (buyPriceIndex === undefined) {
                buyPriceIndex = index;
            }
        } else if (buyPriceIndex !== undefined) {
            if (buyPriceIndex - prevSoldIndex === 1) {
                if (prices[prevSoldIndex - 1] > prices[buyPriceIndex]) {
                    profit +=
                        element -
                        prices[buyPriceIndex] -
                        (prices[prevSoldIndex] - (prices[prevSoldIndex - 1] || 0));
                } else {
                    profit += element - prices[prevSoldIndex];
                }
            } else {
                profit += Math.max(
                    maxProfit(prices, index + 1, buyPriceIndex, prevSoldIndex, profit),
                    maxProfit(
                        prices,
                        index + 1,
                        undefined,
                        index,
                        profit + element - prices[buyPriceIndex],
                    ),
                );
            }
        }
    }
    return profit;
};
const aa = maxProfit((prices = [1, 2, 4, 2, 5, 7, 2, 4, 9, 0]));
console.log(aa === 13);
console.log(maxProfit((prices = [6, 1, 3, 2, 4, 7])) === 6);
console.log(maxProfit((prices = [3, 5, 7, 10, 8, 11, 15])) === 12);
console.log(maxProfit((prices = [3, 5, 6, 10, 8, 11, 15])) === 12);
console.log(maxProfit((prices = [3, 5, 9, 10, 8, 11, 15])) === 13);
console.log(maxProfit((prices = [3, 2, 6, 5, 0, 3])) === 7);
console.log(maxProfit((prices = [1, 4, 2])) === 3);
console.log(maxProfit((prices = [1, 2, 3, 0, 2])) === 3);
console.log(maxProfit((prices = [1])) === 0);
