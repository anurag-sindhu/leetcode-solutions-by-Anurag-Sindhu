var validPath = function (n, flights, src, dst) {
    const graph = (function () {
        const config = {};
        for (const [from, to] of flights) {
            if (!config[from]) {
                config[from] = {};
            }
            if (!config[to]) {
                config[to] = {};
            }
            config[from][to] = true;
            config[to][from] = true;
        }
        return config;
    })();
    let encounteredPaths = { [src]: true };
    function findCost(node) {
        for (const key in graph[node]) {
            if (encounteredPaths[key]) {
                continue;
            }
            encounteredPaths[key] = true;
            if (key === dst) {
                throw `Found`;
            }
            findCost(key);
        }
    }
    try {
        findCost(src);
    } catch (e) {
        return true;
    }
    return encounteredPaths[dst] || false;
};

console.log(
    validPath(
        10,
        [
            [0, 7],
            [0, 8],
            [6, 1],
            [2, 0],
            [0, 4],
            [5, 8],
            [4, 7],
            [1, 3],
            [3, 5],
            [6, 5]
        ],
        7,
        5
    ) === true
);

console.log(
    validPath(
        10,
        [
            [4, 3],
            [1, 4],
            [4, 8],
            [1, 7],
            [6, 4],
            [4, 2],
            [7, 4],
            [4, 0],
            [0, 9],
            [5, 4]
        ],
        5,
        9
    ) === true
);
console.log(
    validPath((n = 1), (edges = []), (source = 0), (destination = 0)) === true
);

console.log(
    validPath(
        (n = 6),
        (edges = [
            [0, 1],
            [0, 2],
            [3, 5],
            [5, 4],
            [4, 3]
        ]),
        (source = 0),
        (destination = 1)
    ) === true
);
console.log(
    validPath(
        (n = 6),
        (edges = [
            [0, 1],
            [0, 2],
            [3, 5],
            [5, 4],
            [4, 3]
        ]),
        (source = 3),
        (destination = 4)
    ) === true
);

console.log(
    validPath(
        (n = 6),
        (edges = [
            [0, 1],
            [0, 2],
            [3, 5],
            [5, 4],
            [4, 3]
        ]),
        (source = 3),
        (destination = 5)
    ) === true
);

console.log(
    validPath(
        (n = 6),
        (edges = [
            [0, 1],
            [0, 2],
            [3, 5],
            [5, 4],
            [4, 3]
        ]),
        (source = 0),
        (destination = 5)
    ) === false
);
