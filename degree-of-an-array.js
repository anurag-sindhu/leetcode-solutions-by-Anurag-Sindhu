var findShortestSubArray = function(array) {
	const elementMapping = {};
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		if (!elementMapping[element]) {
			elementMapping[element] = { frequency: 1, startIndex: index, endIndex: index };
		} else {
			elementMapping[element].frequency += 1;
			elementMapping[element].endIndex = index;
		}
	}
	let highestFrequency = -Infinity;
	let frequencyMapping = {};

	for (const element in elementMapping) {
		const { frequency, startIndex, endIndex } = elementMapping[element];
		if (frequency > highestFrequency) {
			highestFrequency = frequency;
		}
		if (!frequencyMapping[frequency]) {
			frequencyMapping[frequency] = [];
		}
		frequencyMapping[frequency].push(element);
	}
	let minLength = Infinity;
	for (const iterator of frequencyMapping[highestFrequency]) {
		const startIndex = elementMapping[iterator].startIndex;
		const endIndex = elementMapping[iterator].endIndex;
		const effectiveLength = endIndex - startIndex + 1;
		if (minLength > effectiveLength) {
			minLength = effectiveLength;
		}
	}

	return minLength;
};
console.log(findShortestSubArray([ 1, 2, 2, 3, 1 ]));
console.log(findShortestSubArray([ 1, 2, 2, 3, 1, 4, 2 ]));
