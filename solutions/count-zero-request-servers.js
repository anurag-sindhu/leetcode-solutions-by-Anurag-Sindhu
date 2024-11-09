var countServers = function (n, logs, x, queries) {
    queries.sort((a, b) => a - b);
    let queryIndex = 0;
    let startWindowTime = queries[queryIndex] - x;
    let endWindowTime = queries[queryIndex];
    const arr = new Array(100000).fill(0);
    for (let index = 0; index < logs.length; index++) {
        const element = array[index];
    }
    for (let index = 1; index <= 100000; index++) {
        const element = array[index];
    }
    for (const iterator of queries) {
        arr[iterator] = true;
    }
    let foundIndex = null;
    let tillIndex = null;
    for (let index = arr.length - 1; index >= 0; index--) {
        if (arr[index]) {
            foundIndex = index;
            tillIndex = index - x;
        } else if (!arr[index] && tillIndex > index) {
            foundIndex = null;
            tillIndex = null;
        } else {
            arr[index] = true;
        }
    }
    return serverIdTimeConfig;
};

console.log(
    countServers(
        (n = 3),
        (logs = [
            [2, 4],
            [2, 1],
            [1, 2],
            [3, 1],
        ]),
        (x = 2),
        (queries = [3, 4]),
    ),
);

console.log(
    countServers(
        (n = 3),
        (logs = [
            [1, 3],
            [2, 6],
            [1, 5],
        ]),
        (x = 5),
        (queries = [10, 11]),
    ),
); // 5, 10

console.log(
    countServers(
        (n = 3),
        (logs = [
            [2, 4],
            [2, 1],
            [1, 2],
            [3, 1],
        ]),
        (x = 2),
        (queries = [3, 4]),
    ),
);
