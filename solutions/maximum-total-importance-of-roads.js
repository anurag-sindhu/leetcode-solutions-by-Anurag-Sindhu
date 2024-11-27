var maximumImportance = function (n, roads) {
    const configFrom = {};
    const configTo = {};
    for (const [from, to] of roads) {
        if (configFrom[from] == undefined) {
            configFrom[from] = [];
        }
        configFrom[from].push(to);
        if (configTo[to] == undefined) {
            configTo[to] = [];
        }
        configTo[to].push(from);
    }
    const arr = [];
    for (let index = 0; index < n; index++) {
        const temp =
            ((configFrom[index] && configFrom[index].length) || 0) +
            ((configTo[index] && configTo[index].length) || 0);
        if (temp) arr.push(temp);
    }
    arr.sort((a, b) => b - a);
    let resp = 0;
    for (let index = 0; index < arr.length; index++) {
        resp += arr[index] * (n - index);
    }
    return resp;
};

console.log(
    maximumImportance(
        (n = 5),
        (roads = [
            [0, 1],
            [1, 2],
            [2, 3],
            [0, 2],
            [1, 3],
            [2, 4],
        ]),
    ),
);

console.log(
    maximumImportance(
        (n = 5),
        (roads = [
            [0, 3],
            [2, 4],
            [1, 3],
        ]),
    ),
);
