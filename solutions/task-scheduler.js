var leastInterval = function (tasks, n) {
    const config = {};
    for (const iterator of tasks) {
        if (!config[iterator]) {
            config[iterator] = {
                nextTime: 0,
                count: 0,
            };
        }
        config[iterator].count += 1;
    }
    let currentTime = 0;
    const sortedKeys = Object.keys(config).sort((a, b) => a - b);
    let sortedKeysIndex = 0 % 25;
    let hasIterationCompleted = false;
    while (true) {
        while (config[sortedKeys[sortedKeysIndex % sortedKeys.length]].count) {
            const key = sortedKeys[sortedKeysIndex % sortedKeys.length];
            if (config[key].nextTime <= currentTime) {
                config[key].count -= 1;
                config[key].nextTime = currentTime + n + 1;
                currentTime += 1;
                sortedKeysIndex += 1;
            }
        }
        let totalCheck = 0;
        while (config[sortedKeys[sortedKeysIndex % sortedKeys.length]].count === 0) {
            totalCheck += 1;
            sortedKeysIndex += 1;
            if (totalCheck >= sortedKeys.length) {
                hasIterationCompleted = true;
                break;
            }
        }
        if (hasIterationCompleted) {
            break;
        }
    }
    return currentTime;
};

console.log(
    leastInterval(
        (tasks = ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G']),
        (n = 2),
    ) === 16,
);
console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'E'], 2) === 12);
console.log(leastInterval((tasks = ['A', 'A', 'A', 'B', 'B', 'B']), (n = 0)) === 6);
