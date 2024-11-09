var reachableNodes = function (n, edges, restricted) {
    const restrictedConfig = (function () {
        const config = {};
        for (const iterator of restricted) {
            config[iterator] = true;
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
    const visited = {};
    function visit(from) {
        if (restrictedConfig[from]) {
            return;
        }
        if (visited[from]) {
            return;
        }
        visited[from] = true;
        for (const key in config[from]) {
            visit(key);
        }
    }
    visit((from = 0));

    return Object.keys(visited).length;
};

console.log(
    reachableNodes(
        (n = 7),
        (edges = [
            [0, 1],
            [1, 2],
            [3, 1],
            [4, 0],
            [0, 5],
            [5, 6]
        ]),
        (restricted = [4, 5])
    )
);
console.log(
    reachableNodes(
        (n = 7),
        (edges = [
            [0, 1],
            [0, 2],
            [0, 5],
            [0, 4],
            [3, 2],
            [6, 5]
        ]),
        (restricted = [4, 2, 1])
    )
);
