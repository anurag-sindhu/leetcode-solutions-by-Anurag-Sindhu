var maxNumberOfAlloys = function (n, k, budget, composition, stock, cost) {
    let maxUnit = 30;
    let maxUnitIndex = null;

    let prevMaxUnit = maxUnit;
    let newMaxUnit = maxUnit;
    function start(maxUnit) {
        if (maxUnit === null) {
            return;
        }
        newMaxUnit = maxUnit;
        let totalCostOfMaxUnit = 0;
        for (const compositionElement of composition) {
            for (let index = 0; index < compositionElement.length; index++) {
                if (maxUnit - stock[index] > 0) {
                    totalCostOfMaxUnit +=
                        cost[index] * compositionElement[index] * (maxUnit - stock[index]);
                }
            }
        }
        if (totalCostOfMaxUnit > budget) {
            prevMaxUnit = maxUnit;
            return start(parseInt(maxUnit / 2));
        } else {
            return start(null);
            // return start(parseInt((maxUnit + prevMaxUnit) / 2));
        }
    }
    start(maxUnit);
    maxUnitIndex = newMaxUnit;
    let totalCostOfMaxUnit = 0;
    let prevTotalCostOfMaxUnit = null;
    for (; maxUnitIndex <= prevMaxUnit; maxUnitIndex++) {
        for (const compositionElement of composition) {
            for (let index = 0; index < compositionElement.length; index++) {
                if (maxUnitIndex - stock[index] > 0) {
                    totalCostOfMaxUnit +=
                        cost[index] * compositionElement[index] * (maxUnitIndex - stock[index]);
                }
            }
            if (prevTotalCostOfMaxUnit !== null && budget <= totalCostOfMaxUnit) {
                prevMaxUnit = -Infinity;
                break;
            }
            prevTotalCostOfMaxUnit = totalCostOfMaxUnit;
        }
    }
    return maxUnit;
};

console.log(
    maxNumberOfAlloys(
        (n = 3),
        (k = 2),
        (budget = 15),
        (composition = [
            [1, 1, 1],
            [1, 1, 10],
        ]),
        (stock = [0, 0, 100]),
        (cost = [1, 2, 3]),
    ) === 5,
);

console.log(
    maxNumberOfAlloys(
        (n = 3),
        (k = 2),
        (budget = 15),
        (composition = [
            [1, 1, 1],
            [1, 1, 10],
        ]),
        (stock = [0, 0, 0]),
        (cost = [1, 2, 3]),
    ) === 2,
);

console.log(
    maxNumberOfAlloys(
        (n = 2),
        (k = 3),
        (budget = 10),
        (composition = [
            [2, 1],
            [1, 2],
            [1, 1],
        ]),
        (stock = [1, 1]),
        (cost = [5, 5]),
    ) === 2,
);
