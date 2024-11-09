var loudAndRich = function (richer, quiet) {
    const config = (function () {
        const obj = {};
        for (const [a, b] of richer) {
            if (!obj[b]) {
                obj[b] = {};
            }
            obj[b][a] = quiet[b];
        }
        return obj;
    })();
    const output = [];
    for (let index = 0; index < quiet.length; index++) {
        let minIndex = index;
        function explore(fromIndex) {
            if (!config[fromIndex]) {
                return;
            }
            for (const key in config[fromIndex]) {
                if (quiet[minIndex] > quiet[key]) {
                    minIndex = key;
                }
                explore(key);
            }
        }
        explore(index);
        output.push(minIndex);
    }
    return output;
};

console.log(
    loudAndRich(
        (richer = [
            [1, 0],
            [2, 1],
            [3, 1],
            [3, 7],
            [4, 3],
            [5, 3],
            [6, 3]
        ]),
        (quiet = [3, 2, 5, 4, 6, 1, 7, 0]) //[5,5,2,5,4,5,6,7]
    )
);
