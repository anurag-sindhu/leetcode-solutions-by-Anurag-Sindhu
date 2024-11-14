var countConsistentStrings = function (allowed, words) {
    const allowedConfig = (function () {
        const config = {};
        for (let index = 0; index < allowed.length; index++) {
            config[allowed[index]] = true;
        }
        return config;
    })();
    const output = [];
    let found = true;
    for (const iterator of words) {
        found = true;
        for (let index = 0; index < iterator.length; index++) {
            if (!allowedConfig[iterator[index]]) {
                found = false;
                break;
            }
        }
        if (found) {
            output.push(iterator);
        }
    }
    return output.length;
};

console.log(
    countConsistentStrings(
        (allowed = 'ab'),
        (words = ['ad', 'bd', 'aaab', 'baa', 'badab'])
    )
);

console.log(
    countConsistentStrings(
        (allowed = 'abc'),
        (words = ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'])
    )
);

console.log(
    countConsistentStrings(
        (allowed = 'cad'),
        (words = ['cc', 'acd', 'b', 'ba', 'bac', 'bad', 'ac', 'd'])
    )
);
