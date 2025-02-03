var exclusiveTime = function (n, logs) {
    let record = {};
    let functionSequence = [];
    let lastExecutedTime = 0;
    const output = [];
    for (const iterator of logs) {
        const [functionName, state, timestamp] = iterator.split(':');
        if (!functionSequence.length) {
            functionSequence.push(iterator);
        } else {
            const [lastFunctionName, lastState, lastTimestamp] =
                functionSequence[functionSequence.length - 1].split(':');
            if (!record[lastFunctionName]) {
                record[lastFunctionName] = 0;
            }
            if (state === 'start') {
                functionSequence.push(iterator);
                const res = Number(timestamp) - lastExecutedTime;
                record[lastFunctionName] += res;
                lastExecutedTime = Number(timestamp);
            } else {
                const res = Number(timestamp) - lastExecutedTime + 1;
                record[lastFunctionName] += res;
                functionSequence.pop();
                lastExecutedTime = Number(timestamp) + 1;
            }
        }
    }
    return Object.values(record);
};

console.log(
    exclusiveTime(
        (n = 2),
        (logs = ['0:start:0', '0:start:2', '0:end:5', '1:start:6', '1:end:6', '0:end:7']),
    ),
);

console.log(
    exclusiveTime(
        (n = 1),
        (logs = ['0:start:0', '0:start:2', '0:end:5', '0:start:6', '0:end:6', '0:end:7']),
    ),
);
//8

console.log(exclusiveTime((n = 2), (logs = ['0:start:0', '1:start:2', '1:end:5', '0:end:6'])));
