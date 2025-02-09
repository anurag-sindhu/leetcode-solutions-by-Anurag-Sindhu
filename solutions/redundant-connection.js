const { areTwoArrayEqual } = require('../javascript/compare-two-array.js');

var findRedundantConnection = function (edges) {
    const output = [];
    const config = {};
    function isConnected(from, to, isExploring = {}) {
        for (const key in config[from]) {
            if (Number(key) === Number(to)) {
                return true;
            }
            if (isExploring[key]) {
                continue;
            }
            isExploring[key] = true;
            const res = isConnected(key, to, isExploring);
            if (res) {
                return true;
            }
        }
        return false;
    }
    for (const [from, to] of edges) {
        const connected = isConnected(from, to);
        if (!connected) {
            if (!config[from]) {
                config[from] = {};
            }
            config[from][to] = true;
            if (!config[to]) {
                config[to] = {};
            }
            config[to][from] = true;
        } else {
            output.push([from, to]);
        }
    }
    return output[output.length - 1];
};

let res;
res = findRedundantConnection(
    (edges = [
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 4],
        [1, 5],
    ]),
);
console.log(areTwoArrayEqual(res, [1, 4]));

console.log(
    areTwoArrayEqual(
        findRedundantConnection(
            (edges = [
                [1, 4],
                [3, 4],
                [1, 3],
                [1, 2],
                [4, 5],
            ]),
        ),
        [1, 3],
    ),
);

console.log(
    areTwoArrayEqual(
        findRedundantConnection(
            (edges = [
                [9, 10],
                [5, 8],
                [2, 6],
                [1, 5],
                [3, 8],
                [4, 9],
                [8, 10],
                [4, 10],
                [6, 8],
                [7, 9],
            ]),
        ),
        [4, 10],
    ),
);

console.log(
    areTwoArrayEqual(
        findRedundantConnection([
            [1, 2],
            [1, 3],
            [2, 3],
        ]),
        [2, 3],
    ),
); //[2,3]

/**
 *    
 *     const output = [];
    const explored = {};
    for (const [from, to] of edges) {
        if (explored[from] && explored[to]) {
            output.push([from, to]);
        }
        explored[from] = {};
        explored[to] = {};
    }
    return output[output.length - 1];
 */

/**
 *     const config = {};
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
    const config1 = {};
    for (const [from, to] of edges) {
        if (!config1[from]) {
            config1[from] = {};
        }
        config1[from][to] = true;
    }
    return config;
 */
