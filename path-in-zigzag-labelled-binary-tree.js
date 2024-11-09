var pathInZigZagTree = function(label) {
	let array = [];
	let currentLevel = 0;
	let currentElement = 1;
	let totalElementsBuild = 0;
	while (totalElementsBuild < label) {
		let elementInCurrentLevel = Math.pow(2, currentLevel);
		totalElementsBuild += elementInCurrentLevel;
		const arr = [];
		while (elementInCurrentLevel--) {
			arr.push(currentElement++);
		}
		if (currentLevel % 2 !== 0) {
			arr.reverse();
		}
		array.push(arr);
		currentLevel++;
	}
	let indexOfLabelElement = array[array.length - 1].indexOf(label);
	const output = [ label ];
	for (let index = array.length - 2; index >= 0; index--) {
		indexOfLabelElement = Math.floor(indexOfLabelElement / 2);
		output.push(array[index][indexOfLabelElement]);
	}
	return output.reverse();
};

console.log(pathInZigZagTree((label = 3)));
console.log(pathInZigZagTree((label = 14)));
console.log(pathInZigZagTree((label = 26)));
