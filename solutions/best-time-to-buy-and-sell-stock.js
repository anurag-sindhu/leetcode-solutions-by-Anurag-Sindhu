var maxProfit1 = function (prices) {
    const maxi = [prices[prices.length - 1]];
    const mini = [];
    for (let index = prices.length - 1 - 1; index >= 0; index--) {
        maxi.push(Math.max(maxi[maxi.length - 1], prices[index]));
    }
    maxi.reverse();
    for (let index = 0; index < prices.length; index++) {
        mini.push(Math.min(mini[mini.length - 1] || Infinity, prices[index]));
    }
    let diff = 0;
    for (let index = 0; index < maxi.length; index++) {
        diff = Math.max(maxi[index] - mini[index], diff);
    }
    return diff;
};

var maxProfit = function (prices) {
    let minPrice = Infinity;
    let diff = -Infinity;
    for (const element of prices) {
        minPrice = Math.min(minPrice, element);
        diff = Math.max(element - minPrice, diff);
    }
    return diff;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
