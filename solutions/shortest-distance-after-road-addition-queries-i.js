var shortestDistanceAfterQueries = function (n, queries) {
    const arr = [];
    const shortcuts = {};
    const memoization = {};
    let avoidMemoizationShortcutsPostPoint = null;
    function start(nextIndex) {
        if (n - 1 <= nextIndex) {
            return 0;
        }
        let nextStep = [nextIndex + 1];
        if (shortcuts[nextIndex] != undefined) {
            nextStep = [...nextStep, ...shortcuts[nextIndex]];
        }
        let min = Infinity;
        for (const element of nextStep) {
            const aasa = start(element);
            min = 1 + Math.min(min, start(element));
            console.log(`from ${nextIndex} to ${element}:${min}`);
            if (memoization[nextIndex] == undefined) {
                memoization[nextIndex] = {};
            }
            memoization[nextIndex][element] = Math.min(
                (memoization[nextIndex] && memoization[nextIndex][element]) || Infinity,
                min,
            );
            console.log({ min });
        }
        return min;
    }

    for (let index = 0; index < queries.length; index++) {
        const [from, to] = queries[index];
        if (shortcuts[from] === undefined) {
            shortcuts[from] = [];
        }
        shortcuts[from].push(to);
        arr.push(start(0));
    }
    return arr;
};

console.log(
    shortestDistanceAfterQueries(5, [
        [2, 4],
        [1, 4],
    ]),
);
console.log(
    shortestDistanceAfterQueries(
        (n = 5),
        (queries = [
            [2, 4],
            [0, 2],
            [0, 4],
        ]),
    ),
);
console.log(
    shortestDistanceAfterQueries(
        (n = 4),
        (queries = [
            [0, 3],
            [0, 2],
        ]),
    ),
);
