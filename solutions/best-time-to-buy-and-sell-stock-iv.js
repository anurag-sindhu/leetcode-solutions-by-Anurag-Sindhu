var maxProfit = function (k, prices) {
    const memo = {};

    function helper(state, transaction, priceIndex, prices) {
        if (memo[`${state}_${transaction}_${priceIndex}`] != undefined) {
            return memo[`${state}_${transaction}_${priceIndex}`];
        }
        if (transaction == 0 || priceIndex == prices.length) {
            return 0;
        }
        let resp;
        if (state === 'buy') {
            resp = Math.max(
                helper('sell', transaction, priceIndex + 1, prices) - prices[priceIndex],
                helper('buy', transaction, priceIndex + 1, prices),
            );
        } else {
            resp = Math.max(
                helper('buy', transaction - 1, priceIndex + 1, prices) + prices[priceIndex],
                helper('sell', transaction, priceIndex + 1, prices),
            );
        }
        memo[`${state}_${transaction}_${priceIndex}`] = resp;
        return resp;
    }

    const resp = helper('buy', k, 0, prices);
    return resp;
};

console.log(2 == maxProfit(2, (prices = [2, 4, 1])));
console.log(7 == maxProfit(2, (prices = [3, 2, 6, 5, 0, 3])));
console.log(13 == maxProfit(1, (prices = [1, 2, 4, 2, 5, 7, 2, 4, 9, 0])));
console.log(6 == maxProfit(1, (prices = [3, 3, 5, 0, 0, 3, 1, 4])));
console.log(0 == maxProfit(1, (prices = [7, 6, 4, 3, 1])));
console.log(4 == maxProfit(1, (prices = [1, 2, 3, 4, 5])));
