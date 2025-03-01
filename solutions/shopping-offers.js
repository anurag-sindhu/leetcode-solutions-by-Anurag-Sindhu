var shoppingOffers = function (price, special, needs) {
    let totalCost = needs.reduce((acc, curr, index) => acc + price[index] * curr, 0);
    const removeSameOfferButKeepCheapest = (() => {
        const uniqueOffers = new Map();
        for (const offer of special) {
            const offerKey = offer.slice(0, -1).join(',');
            if (!uniqueOffers.has(offerKey)) {
                uniqueOffers.set(offerKey, offer);
            }
        }
        return Array.from(uniqueOffers.values());
    })();
    console.log({ removeSameOfferButKeepCheapest });
    function shoppingOffersHelper(price, special, needs, tempCost = 0) {
        const possibleOffers = [];
        let hasBroke = false;
        let hasNeedCompleted = false;
        for (const element of needs) {
            if (element > 0) {
                hasNeedCompleted = true;
                break;
            }
        }
        if (!hasNeedCompleted) {
            totalCost = Math.min(
                totalCost,
                tempCost + needs.reduce((acc, curr, index) => acc + price[index] * curr, 0),
            );
            return tempCost;
        }
        for (const offer of special) {
            hasBroke = false;
            for (let index = 0; index < offer.length; index++) {
                if (needs[index] < offer[index]) {
                    hasBroke = true;
                    break;
                }
            }
            if (!hasBroke) {
                possibleOffers.push(offer);
            }
        }
        if (!possibleOffers.length) {
            totalCost = Math.min(
                totalCost,
                tempCost + needs.reduce((acc, curr, index) => acc + price[index] * curr, 0),
            );
            return tempCost;
        }
        for (let index = 0; index < possibleOffers.length; index++) {
            const straightForwardPrice = needs.reduce(
                (acc, curr, index) => acc + price[index] * curr,
                0,
            );
            if (straightForwardPrice < possibleOffers[index][possibleOffers[index].length - 1]) {
                totalCost = Math.min(totalCost, tempCost + straightForwardPrice);
            } else {
                for (
                    let childIndex = 0;
                    childIndex < possibleOffers[index].length - 1;
                    childIndex++
                ) {
                    needs[childIndex] -= possibleOffers[index][childIndex];
                }
                const resp = shoppingOffersHelper(
                    price,
                    possibleOffers,
                    needs,
                    tempCost + possibleOffers[index][possibleOffers[index].length - 1],
                );
                console.log({ resp });
                for (
                    let childIndex = 0;
                    childIndex < possibleOffers[index].length - 1;
                    childIndex++
                ) {
                    needs[childIndex] += possibleOffers[index][childIndex];
                }
            }
        }
    }
    shoppingOffersHelper(price, removeSameOfferButKeepCheapest, needs);
    return totalCost;
};

console.log(
    shoppingOffers(
        (price = [2, 2]),
        (special = [
            [1, 1, 1],
            [1, 1, 2],
            [1, 1, 3],
            [1, 1, 4],
            [1, 1, 5],
            [1, 1, 6],
            [1, 1, 7],
            [1, 1, 8],
            [1, 1, 9],
            [1, 1, 10],
            [1, 1, 11],
            [1, 1, 12],
            [1, 1, 13],
            [1, 1, 14],
            [1, 1, 15],
        ]),
        (needs = [10, 10]),
    ) == 10,
);

console.log(
    shoppingOffers(
        (price = [9]),
        (special = [
            [1, 10],
            [2, 2],
        ]),
        (needs = [3]),
    ) == 11,
);

console.log(
    shoppingOffers(
        (price = [6, 3, 6, 9, 4, 7]),
        (special = [
            [1, 2, 5, 3, 0, 4, 29],
            [3, 1, 3, 0, 2, 2, 19],
        ]),
        (needs = [4, 1, 5, 2, 2, 4]),
    ) == 69,
);

console.log(
    shoppingOffers(
        (price = [1, 1, 1]),
        (special = [
            [1, 1, 0, 0],
            [2, 2, 1, 9],
        ]),
        (needs = [1, 1, 0]),
    ) == 0,
);

console.log(
    shoppingOffers(
        (price = [2, 3, 4]),
        (special = [
            [1, 1, 0, 4],
            [2, 2, 1, 9],
        ]),
        (needs = [1, 2, 1]),
    ) == 11,
);

console.log(
    shoppingOffers(
        (price = [2, 5]),
        (special = [
            [3, 0, 5],
            [1, 2, 10],
        ]),
        (needs = [3, 2]),
    ) == 14,
);
