var countMatches = function (items, ruleKey, ruleValue) {
    const categoryIndex = {
        type: 0,
        color: 1,
        name: 2,
    };
    let count = 0;
    for (let index = 0; index < items.length; index++) {
        if (items[index][categoryIndex[ruleKey]] === ruleValue) {
            count++;
        }
    }
    return count;
};

console.log(
    countMatches(
        (items = [
            ['phone', 'blue', 'pixel'],
            ['computer', 'silver', 'phone'],
            ['phone', 'gold', 'iphone'],
        ]),
        (ruleKey = 'type'),
        (ruleValue = 'phone'),
    ),
);

console.log(
    countMatches(
        (items = [
            ['phone', 'blue', 'pixel'],
            ['computer', 'silver', 'lenovo'],
            ['phone', 'gold', 'iphone'],
        ]),
        (ruleKey = 'color'),
        (ruleValue = 'silver'),
    ),
);
