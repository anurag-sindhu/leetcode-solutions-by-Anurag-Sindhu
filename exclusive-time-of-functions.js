var exclusiveTime = function(n, logs) {
	let lastTimestamp = null;
	let lastState = null;
	let lastFunction = null;
	const functionMapping = {};
	for (const iterator of logs) {
		const [ functionName, state, timestamp ] = iterator.split(':');
		if (lastState !== null) {
		}
		if (functionMapping[functionName] === undefined) {
			functionMapping[functionName] = {
				moments: [],
				timeTaken: 0
			};
		}
		if (state === 'start') {
			functionMapping[functionName].moments.push(timestamp);
		} else {
			functionMapping[functionName].moments.pop();
		}
		if (lastTimestamp !== null) {
			const temp = Number(timestamp) - Number(lastTimestamp);
			if (state === 'start') {
				if (lastFunction !== functionName) {
					functionMapping[lastFunction].timeTaken += temp;
				} else {
					functionMapping[functionName].timeTaken += temp;
				}
			} else {
				if (lastState === 'start' && lastFunction === functionName) {
					functionMapping[functionName].timeTaken += temp;
				} else if (lastState === 'end' && lastFunction === functionName) {
					functionMapping[functionName].timeTaken += temp;
				} else {
					functionMapping[functionName].timeTaken += temp + 1;
				}
			}
		}
		lastState = state;
		lastFunction = functionName;
		lastTimestamp = timestamp;
	}
	return;
};

console.log(
	exclusiveTime(
		(n = 1),
		(logs = [ '0:start:0', '0:start:2', '0:end:5', '0:start:6', '0:end:6', '0:end:7' ])
	)
);
//8

console.log(exclusiveTime((n = 2), (logs = [ '0:start:0', '1:start:2', '1:end:5', '0:end:6' ])));

console.log(
	exclusiveTime(
		(n = 2),
		(logs = [ '0:start:0', '0:start:2', '0:end:5', '1:start:6', '1:end:6', '0:end:7' ])
	)
);
