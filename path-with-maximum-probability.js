var maxProbability = function (n, edges, succProb, start, end) {
    const successProbConfig = (function () {
        const config = {};
        for (let index = 0; index < edges.length; index++) {
            const [from, to] = edges[index];
            config[`${from}_${to}`] = succProb[index];
        }
        return config;
    })();
    const config = {};
    for (const [from, to] of edges) {
        if (!config[from]) {
            config[from] = {};
        }
        if (!config[to]) {
            config[to] = {};
        }
        config[from][to] = true;
        config[to][from] = true;
    }
    let maxProb = 0.0;
    function explore(from, probability, explored) {
        from = Number(from);
        if (from === end) {
            if (probability > maxProb) {
                maxProb = probability;
            }
            return probability;
        }
        if (explored[from]) {
            return;
        }
        explored[from] = true;
        for (const key in config[from]) {
            if (!explored[key]) {
                explore(
                    key,
                    probability * successProbConfig[`${from}_${key}`],
                    explored
                );
            }
        }
    }

    for (const key in config[start]) {
        explore(
            key,
            successProbConfig[`${start}_${key}`] ||
                successProbConfig[`${key}_${start}`],
            { [start]: true }
        );
    }

    return maxProb;
};

console.log(
    maxProbability(
        (n = 3),
        (edges = [
            [0, 1],
            [1, 2],
            [0, 2]
        ]),
        (succProb = [0.5, 0.5, 0.2]),
        (start = 0),
        (end = 2)
    ) === 0.25
);

console.log(
    maxProbability(
        5,
        [
            [1, 4],
            [2, 4],
            [0, 4],
            [0, 3],
            [0, 2],
            [2, 3]
        ],
        [0.37, 0.17, 0.93, 0.23, 0.39, 0.04],
        3,
        4
    ) === 0.2139
);

console.log(
    maxProbability(
        5,
        [
            [2, 3],
            [1, 2],
            [3, 4],
            [1, 3],
            [1, 4],
            [0, 1],
            [2, 4],
            [0, 4],
            [0, 2]
        ],
        [0.06, 0.26, 0.49, 0.25, 0.2, 0.64, 0.23, 0.21, 0.77],
        0,
        3
    ) === 0.16
);

console.log(
    maxProbability(
        (n = 3),
        (edges = [
            [0, 1],
            [1, 2],
            [0, 2]
        ]),
        (succProb = [0.5, 0.5, 0.3]),
        (start = 0),
        (end = 2)
    ) === 0.3
);

console.log(
    maxProbability(
        (n = 3),
        (edges = [[0, 1]]),
        (succProb = [0.5]),
        (start = 0),
        (end = 2)
    ) === 0.0
);
