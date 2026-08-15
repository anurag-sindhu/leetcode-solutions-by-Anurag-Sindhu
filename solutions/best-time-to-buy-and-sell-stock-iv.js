var maxProfit = function (k, prices) {
    //https://chatgpt.com/c/6a78b903-e75c-83e8-a4fa-29c8c2f196f7
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
                //Suppose today's price is: $3 If we buy: profit = -3
                helper('sell', transaction, priceIndex + 1, prices) - prices[priceIndex],
                //We simply move to the next day. Our state remains: buy because we still don't own anything.
                helper('buy', transaction, priceIndex + 1, prices),
            );
        } else {
            resp = Math.max(
                //If today's price is: $6 and we sell: profit = +6
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
