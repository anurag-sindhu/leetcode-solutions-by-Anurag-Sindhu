var findCenter = function (edges) {
    const config = {};
    for (const [from, to] of edges) {
        if (!config[from]) {
            config[from] = [];
        }
        config[from].push(to);
        if (!config[to]) {
            config[to] = [];
        }
        config[to].push(from);
    }
    const totalNodes = Object.keys(config).length;
    for (const key in config) {
        if (config[key].length === totalNodes - 1) {
            return key;
        }
    }
};

console.log(
    findCenter(
        (edges = [
            [1, 2],
            [2, 3],
            [4, 2]
        ])
    )
);
console.log(
    findCenter(
        (edges = [
            [1, 2],
            [5, 1],
            [1, 3],
            [1, 4]
        ])
    )
);
