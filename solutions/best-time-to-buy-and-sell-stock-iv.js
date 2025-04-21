var maxProfit = function (prices) {
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

console.log(13 == maxProfit((prices = [1, 2, 4, 2, 5, 7, 2, 4, 9, 0])));
console.log(6 == maxProfit((prices = [3, 5, 0, 0, 3, 1, 4])));
console.log(6 == maxProfit((prices = [3, 3, 5, 0, 0, 3, 1, 4])));
console.log(0 == maxProfit((prices = [7, 6, 4, 3, 1])));
console.log(4 == maxProfit((prices = [1, 2, 3, 4, 5])));
