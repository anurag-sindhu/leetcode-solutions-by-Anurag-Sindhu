var stoneGame = function (piles) {
    const dp = [];
    function stoneGameHelper(piles, startIndex, endIndex, isAlxTurn) {
        if (startIndex >= endIndex) {
            return 0;
        }
        if (dp[startIndex] && dp[startIndex][endIndex] != undefined) {
            return dp[startIndex][endIndex];
        }
        if (isAlxTurn) {
            const ss = piles[startIndex] + stoneGameHelper(piles, startIndex + 1, endIndex, false);
            const ss1 = piles[endIndex] + stoneGameHelper(piles, startIndex, endIndex - 1, false);
            if (dp[startIndex] == undefined) {
                dp[startIndex] = [];
            }
            dp[startIndex][endIndex] = Math.max(ss, ss1);
            return dp[startIndex][endIndex];
        } else {
            const ss = piles[startIndex] + stoneGameHelper(piles, startIndex + 1, endIndex, true);
            const ss1 = piles[endIndex] + stoneGameHelper(piles, startIndex, endIndex - 1, true);
            if (dp[startIndex] == undefined) {
                dp[startIndex] = [];
            }
            dp[startIndex][endIndex] = Math.max(ss, ss1);
            return dp[startIndex][endIndex];
        }
    }
    const ss = stoneGameHelper(piles, 0, piles.length - 1, true);
    return;
};

console.log(stoneGame((piles = [5, 3, 4, 5])));
console.log(stoneGame((piles = [3, 7, 2, 3])));
