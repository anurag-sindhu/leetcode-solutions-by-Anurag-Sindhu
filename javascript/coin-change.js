var coinChange = function (coins, amount) {
    if (!amount) {
        return 0;
    }
    let totalCoins = 0;
    const sortedCoins = coins.sort((a, b) => a - b);
    for (let index = sortedCoins.length - 1; index >= 0; index--) {
        const coinsConsumed = parseInt(BigInt(amount) / BigInt(sortedCoins[index]));
        if (coinsConsumed) {
            totalCoins += coinsConsumed;
            amount -= sortedCoins[index] * coinsConsumed;
        }
    }
    if (amount) {
        return -1;
    }
    return totalCoins;
};

console.log(coinChange([186, 419, 83, 408], 6249) === 20);
console.log(coinChange([1, 2147483647], 2) === 2);
console.log(coinChange((coins = [1, 2, 5]), (amount = 11)) === 3);
console.log(coinChange((coins = [2]), (amount = 3)) === -1);
console.log(coinChange((coins = [1]), (amount = 0)) === 0);
