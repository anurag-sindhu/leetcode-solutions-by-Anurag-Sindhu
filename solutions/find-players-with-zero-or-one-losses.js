var findWinners = function (matches) {
    const uniquePlayer = {};
    const losersCount = {};
    for (const [winner, losers] of matches) {
        uniquePlayer[winner] = true;
        uniquePlayer[losers] = true;
        if (!losersCount[losers]) {
            losersCount[losers] = 0;
        }
        losersCount[losers] += 1;
    }
    const whoNeverLost = [];
    const whoLostOnce = [];
    for (const key in uniquePlayer) {
        if (!losersCount[key]) {
            whoNeverLost.push(Number(key));
        }
    }
    for (const key in losersCount) {
        if (losersCount[key] == 1) {
            whoLostOnce.push(Number(key));
        }
    }
    return [whoNeverLost, whoLostOnce];
};

console.log(
    findWinners(
        (matches = [
            [1, 3],
            [2, 3],
            [3, 6],
            [5, 6],
            [5, 7],
            [4, 5],
            [4, 8],
            [4, 9],
            [10, 4],
            [10, 9],
        ]),
    ),
);
console.log(
    findWinners(
        (matches = [
            [2, 3],
            [1, 3],
            [5, 4],
            [6, 4],
        ]),
    ),
);
