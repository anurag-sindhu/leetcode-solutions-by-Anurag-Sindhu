function countSTep(n, config) {
    let min = Infinity;
    function countSTepHelper(n, config, step = 0, currStep = 0) {
        if (step >= min) {
            return min;
        }
        if (currStep >= n - 1) {
            min = Math.min(step, min);
            return min;
        }
        let partA = Infinity;
        if (config[currStep] != undefined) {
            for (const element of config[currStep]) {
                partA = Math.min(partA, countSTepHelper(n, config, step + 1, element));
            }
        }
        const partB = countSTepHelper(n, config, step + 1, currStep + 1);
        min = Math.min(partB, partA);
        return min;
    }
    countSTepHelper(n, config);
    return min;
}

var shortestDistanceAfterQueries = function (n, queries) {
    const out = [];
    const arr = [];
    const config = {};
    for (let index = 0; index < n; index++) {
        arr.push(n);
    }
    for (const [start, till] of queries) {
        if (!config[start]) {
            config[start] = [];
        }
        config[start].push(till);
        const step = countSTep(n, config);
        out.push(step);
    }
    return out;
};

console.log(
    shortestDistanceAfterQueries(8, [
        [0, 4],
        [3, 6],
        [2, 5],
        [0, 3],
    ]),
); //[4,4,4,3]
console.log(
    shortestDistanceAfterQueries(5, [
        [2, 4],
        [1, 4],
    ]),
); //[3,2]

console.log(
    shortestDistanceAfterQueries(
        (n = 5),
        (queries = [
            [2, 4],
            [0, 2],
            [0, 4],
        ]),
    ),
); //[3,2,1]

console.log(
    shortestDistanceAfterQueries(
        (n = 4),
        (queries = [
            [0, 3],
            [0, 2],
        ]),
    ),
); //[1,1]
