var minimumCardPickup = function (cards) {
    let minLen = Infinity;
    const indexHistory = {};
    for (let index = 0; index < cards.length; index++) {
        const element = cards[index];
        if (indexHistory[element] != undefined) {
            minLen = Math.min(minLen, index - indexHistory[element]);
        }
        indexHistory[element] = index;
    }
    if (minLen === Infinity) {
        return -1;
    }
    return minLen + 1;
};

console.log(minimumCardPickup((cards = [3, 4, 2, 3, 4, 7])));
console.log(minimumCardPickup((cards = [1, 0, 5, 3])));
