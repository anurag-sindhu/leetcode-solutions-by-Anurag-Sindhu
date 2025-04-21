var minimumMoney = function (transactions) {
    let minMoney = 0;
    let leftMoneyFromLastTransaction = 0;

    for (let index = 0; index < transactions.length; index++) {
        const element = transactions[index];
        minMoney = Math.max(minMoney, leftMoneyFromLastTransaction * -1 + element[0]);
        leftMoneyFromLastTransaction = leftMoneyFromLastTransaction - element[0] + element[1];
    }
    return minMoney;
};

console.log(
    minimumMoney(
        (transactions = [
            [7, 2],
            [0, 10],
            [5, 0],
            [4, 1],
            [5, 8],
            [5, 9],
        ]),
    ),
);

console.log(
    minimumMoney(
        (transactions = [
            [2, 1],
            [5, 0],
            [4, 2],
        ]),
    ),
);
console.log(
    minimumMoney(
        (transactions = [
            [3, 0],
            [0, 3],
        ]),
    ),
);
