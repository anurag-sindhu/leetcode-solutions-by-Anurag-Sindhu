var exclusiveTime = function (n, logs) {
    let functionSequence = [];
    let record = {};
    let lastTimestamp = null;
    const output = [];
    for (const iterator of logs) {
        const [functionName, state, timestamp] = iterator.split(':');
        if (state === 'start') {
            if (record[functionName] === undefined) {
                record[functionName] = [];
            }
            if (lastTimestamp) {
                const lastFunctionName = functionSequence[functionName.length - 1];
                const lastStartedTimestamp =
                        design-circular-dequerecord[lastFunctionName][record[lastFunctionName].length - 1];
                output[Number(functionName)] =
                    (output[Number(functionName)] || 0) +
                    Number(timestamp) -
                    Number(lastStartedTimestamp);
            }
            functionSequence.push(functionName);
            record[functionName].push(timestamp);
        } else {
            const lastStartedTimestamp = record[functionName].pop();
            output[Number(functionName)] =
                (output[Number(functionName)] || 0) +
                Number(timestamp) -
                Number(lastStartedTimestamp);
        }
        lastTimestamp = timestamp;
    }
    return;
};

console.log(
    exclusiveTime(
        (n = 1),
        (logs = ['0:start:0', '0:start:2', '0:end:5', '0:start:6', '0:end:6', '0:end:7']),
    ),
);
//8

console.log(exclusiveTime((n = 2), (logs = ['0:start:0', '1:start:2', '1:end:5', '0:end:6'])));

console.log(
    exclusiveTime(
        (n = 2),
        (logs = ['0:start:0', '0:start:2', '0:end:5', '1:start:6', '1:end:6', '0:end:7']),
    ),
);
