var leastInterval = function(tasks, n) {
	const config = {};
	for (const iterator of tasks) {
		if (!config[iterator]) {
			config[iterator] = {
				nextTime: 0,
				count: 0
			};
		}
		config[iterator].count += 1;
	}
	let totalIteration = 0;
	let currentTime = 0;
	let anyThingLeft = false;
	while (true) {
		anyThingLeft = false;
		currentTime++;
		for (const key in config) {
			if (config[key].count) {
				anyThingLeft = true;
				if (config[key].nextTime < currentTime) {
					config[key].count -= 1;
					config[key].nextTime = currentTime + n;
					console.log('object');
					break;
				}
			}
		}
		if (!anyThingLeft) {
			break;
		} else {
			totalIteration++;
		}
	}

	return totalIteration;
};

console.log(
	leastInterval([ 'A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'E' ], 2) === 12
);
console.log(leastInterval((tasks = [ 'A', 'A', 'A', 'B', 'B', 'B' ]), (n = 2)) === 8);
console.log(leastInterval((tasks = [ 'A', 'A', 'A', 'B', 'B', 'B' ]), (n = 0)) === 6);
console.log(
	leastInterval(
		(tasks = [ 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]),
		(n = 2) === 16
	)
);
