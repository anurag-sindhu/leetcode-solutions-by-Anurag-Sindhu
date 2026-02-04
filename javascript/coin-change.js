var coinChange = function (coins, amount) {
    function start(coins, pendingAmount, index = 0) {
        if (index >= coins.length) {
            return Infinity;
        }
        if (pendingAmount < 0) {
            return Infinity;
        }
        if (pendingAmount == 0) {
            return 0;
        }
        if (coins[index] > amount) {
            const withoutChose = start(coins, pendingAmount, index + 1);
            return withoutChose;
        }
        const withChose = 1 + start(coins, pendingAmount - coins[index], index);
        const withoutChose = start(coins, pendingAmount, index + 1);
        return Math.min(withChose, withoutChose);
    }
    const resp = start(coins, amount, 0);
    return resp === Infinity ? -1 : resp;
};

console.log(coinChange((coins = [1, 2, 5]), (amount = 11)) === 3);
console.log(coinChange((coins = [2]), (amount = 3)) === -1);
console.log(coinChange([186, 419, 83, 408], 6249) === 20);
console.log(coinChange([1, 2147483647], 2) === 2);
console.log(coinChange((coins = [1]), (amount = 0)) === 0);
