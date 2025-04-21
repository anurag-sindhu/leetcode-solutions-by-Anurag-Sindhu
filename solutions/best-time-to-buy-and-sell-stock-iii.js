var maxProfit1 = function (prices) {
    let least = Number.MAX_SAFE_INTEGER;
    let difference = 0;
    let profit = 0;
    const arrLeftToRight = [];
    const arrRightToLeft = [];
    for (let index = 0; index < prices.length - 1; index++) {
        if (prices[index] < least) {
            least = prices[index];
        }

        difference = prices[index] - least;
        profit = Math.max(profit, difference);
        arrLeftToRight.push(profit);
    }
    let lastPrice = prices[prices.length - 1];
    difference = 0;
    profit = 0;
    for (let index = prices.length - 1 - 1; index >= 0; index--) {
        difference = lastPrice - prices[index];
        profit = Math.max(profit, difference);
        arrRightToLeft.push(profit);
        if (prices[index] > lastPrice) {
            lastPrice = prices[index];
        }
    }
    arrRightToLeft.reverse();
    let maxProfit = 0;
    for (let index = 0; index < arrLeftToRight.length; index++) {
        maxProfit = Math.max(maxProfit, arrLeftToRight[index] + arrRightToLeft[index]);
    }
    return maxProfit;
};

var maxProfitFromLeft = function (prices) {
    let buyPrice = null;
    let tempSum = 0;
    let arr = [];
    for (let index = 0; index < prices.length; index++) {
        if (buyPrice == null) {
            buyPrice = prices[index];
        } else if (buyPrice > prices[index]) {
            tempSum = 0;
            buyPrice = prices[index];
        } else if (buyPrice <= prices[index]) {
            tempSum = prices[index] - buyPrice;
        }
        arr.push(
            Math.max(arr[arr.length - 1] == undefined ? -Infinity : arr[arr.length - 1], tempSum),
        );
    }
    return arr;
};

var maxProfitFromRight = function (prices) {
    let sellPrice = null;
    let tempSum = 0;
    let arr = [];
    for (let index = prices.length - 1; index >= 0; index--) {
        if (sellPrice == null) {
            sellPrice = prices[index];
        } else if (sellPrice < prices[index]) {
            tempSum = 0;
            sellPrice = prices[index];
        } else if (sellPrice > prices[index]) {
            tempSum = sellPrice - prices[index];
        }
        arr.push(
            Math.max(arr[arr.length - 1] == undefined ? -Infinity : arr[arr.length - 1], tempSum),
        );
    }
    return arr.reverse();
};

var maxProfit = function (prices) {
    const rees = maxProfitFromLeft(prices);
    const revs = maxProfitFromRight(prices);
    let diff = 0;
    for (let index = 0; index < revs.length; index++) {
        diff = Math.max(revs[index] + rees[index], diff);
    }
    return diff;
};

console.log(13 == maxProfit((prices = [1, 2, 4, 2, 5, 7, 2, 4, 9, 0])));
console.log(6 == maxProfit((prices = [3, 3, 5, 0, 0, 3, 1, 4])));
console.log(6 == maxProfit((prices = [3, 5, 0, 0, 3, 1, 4])));
console.log(0 == maxProfit((prices = [7, 6, 4, 3, 1])));
console.log(4 == maxProfit((prices = [1, 2, 3, 4, 5])));
