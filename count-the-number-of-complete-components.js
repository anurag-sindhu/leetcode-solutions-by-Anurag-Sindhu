var countCompleteComponents = function (n, edges) {
    const createLinks = (function () {
        const config = {}
        for (const [from, to] of edges) {
            if (!config[from]) {
                config[from] = []
            }
            config[from].push(to)
            if (!config[to]) {
                config[to] = []
            }
            config[to].push(from)
        }
        return config
    })()
    console.log(createLinks);
};

console.log(countCompleteComponents(n = 6, edges = [[0, 1], [0, 2], [1, 2], [3, 4], [3, 5]]));

console.log(countCompleteComponents(n = 6, edges = [[0, 1], [0, 2], [1, 2], [3, 4]]));