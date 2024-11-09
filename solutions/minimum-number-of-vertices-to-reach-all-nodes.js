var findSmallestSetOfVertices = function (n, edges) {
    const config = {};
    for (const [from, to] of edges) {
        if (!config[to]) {
            config[to] = [];
        }
        config[to].push(from);
    }
    const output = [];
    for (let index = 0; index < n; index++) {
        if (!config[index]) {
            output.push(index);
        }
    }
    return output;
};

console.log(
    findSmallestSetOfVertices(
        (n = 6),
        (edges = [
            [0, 1],
            [0, 2],
            [2, 5],
            [3, 4],
            [4, 2]
        ])
    )
);
console.log(
    findSmallestSetOfVertices(
        (n = 5),
        (edges = [
            [0, 1],
            [2, 1],
            [3, 1],
            [1, 4],
            [2, 4]
        ])
    )
);
