var buyChoco = function(prices, money) {
    let minNumber = Infinity;
    let minNumberSecond = Infinity;
    let minIndex = null;
    for (let index = 0; index < prices.length; index++) {
        if (minNumber > prices[index]) {
            minNumber = prices[index];
            minIndex = index;
        }
    }
    for (let index = 0; index < prices.length; index++) {
        if (minNumberSecond > prices[index] && index !== minIndex) {
            minNumberSecond = prices[index];
        }
    }
    if (money - minNumber - minNumberSecond >= 0) {
        return money - minNumber - minNumberSecond;
    }
    return money;
};

console.log(buyChoco((prices = [1, 4, 3]), (money = 3)));
console.log(buyChoco((prices = [1, 2, 2]), (money = 3)));
console.log(buyChoco((prices = [3, 2, 3]), (money = 3)));
