var maxProfit1 = function (prices) {
    const obj = {};
    let sum = 0;
    let temp = 0;
    for (let index = 0; index < prices.length; index++) {
        if (prices[index] != undefined && prices[index] > prices[index - 1]) {
            obj[index] = prices[index] - prices[temp];
        } else {
            obj[index] = 0;
            temp = index;
        }
    }
    for (let index = 1; index < prices.length; index++) {
        if (index === prices.length - 1) {
            sum += obj[index];
        } else {
            if (obj[index] > 0 && obj[index + 1] == 0) {
                sum += obj[index];
            }
        }
    }
    return sum;
};

var maxProfit = function (prices) {
    let sum = 0;
    let buyPrice = null;
    let tempSum = 0;
    let lastPrice = null;
    for (let index = 0; index < prices.length; index++) {
        if (buyPrice == null) {
            buyPrice = prices[index];
        } else if (lastPrice > prices[index]) {
            sum += tempSum;
            tempSum = 0;
            buyPrice = prices[index];
        } else if (lastPrice <= prices[index]) {
            tempSum = prices[index] - buyPrice;
        }
        lastPrice = prices[index];
    }
    sum += tempSum;
    return sum;
};
console.log(7 == maxProfit([7, 1, 5, 3, 6, 4]));
console.log(8 == maxProfit([7, 1, 5, 6, 3, 6, 4]));
console.log(maxProfit([2, 1, 2, 0, 1]) === 2);
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
