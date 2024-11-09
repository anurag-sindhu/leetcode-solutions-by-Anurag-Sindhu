var findingUsersActiveMinutes = function (logs, k) {
    const config = {};
    const configDup = {};
    for (const [user, timeMin] of logs) {
        if (!config[user]) {
            config[user] = {};
        }
        config[user][timeMin] = true;
    }
    for (const key in config) {
        const ss = Object.keys(config[key]).length;
        if (!configDup[ss]) {
            configDup[ss] = 0;
        }
        configDup[ss] += 1;
    }
    const output = [];
    for (let index = 0; index < k; index++) {
        output[index] = configDup[index + 1] || 0;
    }
    return output;
};

console.log(
    findingUsersActiveMinutes(
        (logs = [
            [0, 5],
            [1, 2],
            [0, 2],
            [0, 5],
            [1, 3],
        ]),
        (k = 5),
    ),
);
console.log(
    findingUsersActiveMinutes(
        (logs = [
            [1, 1],
            [2, 2],
            [2, 3],
        ]),
        (k = 4),
    ),
);
