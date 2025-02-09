var shoppingOffers = function (price, special, needs) {
    let totalCost = needs.reduce((acc, curr, index) => acc + price[index] * curr, 0);
    function start(cost = 0) {
        
    }
    return totalCost;
};

console.log(
    shoppingOffers(
        (price = [2, 5]),
        (special = [
            [3, 0, 5],
            [1, 2, 10],
        ]),
        (needs = [3, 2]),
    ),
);
console.log(
    (price = [2, 3, 4]),
    (special = [
        [1, 1, 0, 4],
        [2, 2, 1, 9],
    ]),
    (needs = [1, 2, 1]),
);
