var findMinHeightTrees = function (n, edges) {
    const config = {};
    for (const [from, to] of edges) {
        if (!config[from]) {
            config[from] = {};
        }
        config[from][to] = true;
        if (!config[to]) {
            config[to] = {};
        }
        config[to][from] = true;
    }
    const hasExplored = {};
    const distanceRecord = {};
    function explore(fromNode, distance = 0) {
        if (hasExplored[fromNode]) {
            return;
        }
        hasExplored[fromNode] = true;
        for (const key in config[fromNode]) {
            if (!hasExplored[key]) {
                explore(key, distance + 1);
            } else {
                console.log('object');
            }
        }
        hasExplored[fromNode] = false;
    }

    explore(0);
    return;
};

console.log(
    findMinHeightTrees(
        (n = 6),
        (edges = [
            [3, 0],
            [3, 1],
            [3, 2],
            [3, 4],
            [5, 4],
        ]),
    ),
);
console.log(
    findMinHeightTrees(
        (n = 4),
        (edges = [
            [1, 0],
            [1, 2],
            [1, 3],
        ]),
    ),
);
