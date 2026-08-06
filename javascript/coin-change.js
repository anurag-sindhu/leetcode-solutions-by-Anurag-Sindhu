// var coinChange = function (coins, amount) {
//     function start(coins, pendingAmount, index = 0) {
//         if (index >= coins.length) {
//             return Infinity;
//         }
//         if (pendingAmount < 0) {
//             return Infinity;
//         }
//         if (pendingAmount == 0) {
//             return 0;
//         }
//         if (coins[index] > amount) {
//             const withoutChose = start(coins, pendingAmount, index + 1);
//             return withoutChose;
//         }
//         const withChose = 1 + start(coins, pendingAmount - coins[index], index);
//         const withoutChose = start(coins, pendingAmount, index + 1);
//         return Math.min(withChose, withoutChose);
//     }
//     const resp = start(coins, amount, 0);
//     return resp === Infinity ? -1 : resp;
// };

function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(amount + 1);

    dp[0] = 0;

    for (let amt = 1; amt <= amount; amt++) {
        for (let coinIndex = 0; coinIndex < coins.length; coinIndex++) {
            if (amt - coins[coinIndex] >= 0) {
                dp[amt] = Math.min(dp[amt], dp[amt - coins[coinIndex]] + 1);
            }
        }
    }

    return dp[amount] === amount + 1 ? -1 : dp[amount];
}

console.log(coinChange((coins = [1, 2, 5]), (amount = 11)) === 3);
console.log(coinChange((coins = [2, 5]), (amount = 9)) === 3);
console.log(coinChange((coins = [3, 5]), (amount = 16)) === 3);
console.log(coinChange((coins = [2]), (amount = 3)) === -1);
console.log(coinChange([186, 419, 83, 408], 6249) === 20);
console.log(coinChange([1, 2147483647], 2) === 2);
console.log(coinChange((coins = [1]), (amount = 0)) === 0);
