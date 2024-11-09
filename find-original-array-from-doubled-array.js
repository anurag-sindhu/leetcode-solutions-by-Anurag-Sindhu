var findOriginalArray = function (changed) {
    const obj = (function () {
        const config = {};
        for (const element of changed) {
            if (config[element] === undefined) {
                config[element] = 0;
            }
            config[element] += 1;
        }
        return config;
    })();
    const out = [];
    changed.sort((a, b) => a - b);
    if (obj[0]) {
        if (obj[0] % 2) {
            return [];
        }
    }
    for (let index = 0; index < changed.length; index++) {
        const element = changed[index];
        if (obj[element] === undefined || obj[element] === 0) {
            continue;
        }
        if (obj[element * 2] === undefined || obj[element * 2] === 0) {
            return [];
        }
        obj[element] -= 1;
        obj[element * 2] -= 1;
        out.push(element);
    }
    return out;
};

console.log(findOriginalArray((changed = [0])));
console.log(findOriginalArray((changed = [0, 0, 0, 0])));
console.log(findOriginalArray((changed = [4, 9, 8, 18])));
console.log(findOriginalArray((changed = [1, 3, 4, 2, 6, 8])));
console.log(findOriginalArray((changed = [6, 3, 0, 1])));
console.log(findOriginalArray((changed = [1])));
