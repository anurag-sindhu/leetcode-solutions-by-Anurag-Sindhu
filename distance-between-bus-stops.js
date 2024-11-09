var distanceBetweenBusStopsConfig = function(distance) {
	const config = {};
	for (let index = 0; index < distance.length; index++) {
		const from = index;
		const to = (index + 1) % distance.length;
		if (!config[from]) {
			config[from] = {};
		}
		config[from][to] = distance[index];
	}
	return config;
};

var distanceBetweenBusStops = function(distance, start, destination) {
	const config = distanceBetweenBusStopsConfig(distance);
	const exploredConfig = {};
	let minCost = Infinity;
	let tempCost = 0;
	let canStart = false;

	for (let index = start; index <= destination; index++) {
		tempCost += distance[index];
		const to = (index + 1) % distance.length;
		if (to === destination) {
			break;
		}
	}
	if (minCost > tempCost) {
		minCost = tempCost;
	}
	tempCost = 0;
	canStart = false;
	for (let index = start; index < distance.length; index--) {
		const to = (index + 1) % distance.length;
		tempCost += distance[index];
		if (to === destination) {
			break;
		}
	}
	if (minCost > tempCost) {
		minCost = tempCost;
	}
	return minCost;
};

console.log(distanceBetweenBusStops((distance = [ 1, 2, 3, 4 ]), (start = 0), (destination = 3)));
console.log(distanceBetweenBusStops((distance = [ 1, 2, 3, 4 ]), (start = 0), (destination = 1)));
console.log(distanceBetweenBusStops((distance = [ 1, 2, 3, 4 ]), (start = 1), (destination = 2)));
console.log(distanceBetweenBusStops((distance = [ 1, 2, 3, 4 ]), (start = 0), (destination = 2)));
console.log(distanceBetweenBusStops((distance = [ 1, 2, 3, 4 ]), (start = 0), (destination = 2)));
