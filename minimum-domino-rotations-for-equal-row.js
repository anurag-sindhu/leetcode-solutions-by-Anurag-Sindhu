function getElementsFrequencyConfig(arr) {
	const config = {};
	for (const iterator of arr) {
		if (!config[iterator]) {
			config[iterator] = 0;
		}
		config[iterator] += 1;
	}
	return config;
}

var minDominoRotations = function(tops, bottoms) {
	let getElementsFrequencyConfigTops = getElementsFrequencyConfig(tops);
	let getElementsFrequencyConfigBottoms = getElementsFrequencyConfig(bottoms);
	if (
		Object.keys(getElementsFrequencyConfigTops).length === 1 &&
		Object.keys(getElementsFrequencyConfigBottoms).length === 1
	) {
		return 0;
	}

	let min = Infinity;
	let tempMin = -1;
	let hasExplored = {};
	for (let index = 0; index < tops.length; index++) {
		const whatToKeep = tops[index];
		if (hasExplored[whatToKeep]) {
			continue;
		}
		hasExplored[whatToKeep] = true;
		tempMin = -1;
		for (let childIndex = 0; childIndex < tops.length; childIndex++) {
			if (childIndex !== index) {
				if (tops[childIndex] === whatToKeep) {
					continue;
				}
				if (bottoms[childIndex] !== whatToKeep) {
					tempMin = -1;
					break;
				} else {
					if (tempMin === -1) {
						tempMin = 0;
					}
					tempMin += 1;
				}
			}
		}
		if (tempMin !== -1) {
			min = Math.min(tempMin, min);
		}
	}

	hasExplored = {};
	for (let index = 0; index < bottoms.length; index++) {
		const whatToKeep = bottoms[index];
		if (hasExplored[whatToKeep]) {
			continue;
		}
		hasExplored[whatToKeep] = true;
		tempMin = -1;
		for (let childIndex = 0; childIndex < bottoms.length; childIndex++) {
			if (childIndex !== index) {
				if (bottoms[childIndex] === whatToKeep) {
					continue;
				}
				if (tops[childIndex] !== whatToKeep) {
					tempMin = -1;
					break;
				} else {
					if (tempMin === -1) {
						tempMin = 0;
					}
					tempMin += 1;
				}
			}
		}
		if (tempMin !== -1) {
			min = Math.min(tempMin, min);
		}
	}
	if (min === Infinity) {
		return -1;
	}
	return min;
};

console.log(
	minDominoRotations((tops = [ 1, 2, 1, 1, 1, 2, 2, 2 ]), (bot = [ 2, 1, 2, 2, 2, 2, 2, 2 ])) ===
		1
);

console.log(
	minDominoRotations((tops = [ 1, 2, 1, 3, 1, 1, 3, 4 ]), (bot = [ 3, 2, 2, 1, 4, 1, 4, 2 ])) ===
		-1
);
console.log(
	minDominoRotations(
		(tops = [ 1, 1, 1, 1, 1, 1, 1, 1 ]),
		(bottoms = [ 1, 1, 1, 1, 1, 1, 1, 1 ])
	) === 0
);
console.log(minDominoRotations((tops = [ 3, 5, 1, 2, 3 ]), (bottoms = [ 3, 6, 3, 3, 4 ])) === -1);
console.log(
	minDominoRotations((tops = [ 2, 1, 2, 4, 2, 2 ]), (bottoms = [ 5, 2, 6, 2, 3, 2 ])) === 2
);
