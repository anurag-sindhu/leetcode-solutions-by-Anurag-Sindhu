var equalPairs = function(array) {
	const rowKeys = {};
	let tempKeys = '';
	for (let rowIndex = 0; rowIndex < array.length; rowIndex++) {
		tempKeys = '';
		for (let columnIndex = 0; columnIndex < array[rowIndex].length; columnIndex++) {
			tempKeys += `_${array[rowIndex][columnIndex]}`;
		}
		if (!rowKeys[tempKeys]) {
			rowKeys[tempKeys] = 0;
		}
		rowKeys[tempKeys] += 1;
	}
	const columnKeys = {};
	for (let columnIndex = 0; columnIndex < array.length; columnIndex++) {
		tempKeys = '';
		for (let rowIndex = 0; rowIndex < array[columnIndex].length; rowIndex++) {
			tempKeys += `_${array[rowIndex][columnIndex]}`;
		}
		if (!columnKeys[tempKeys]) {
			columnKeys[tempKeys] = 0;
		}
		columnKeys[tempKeys] += 1;
	}
	let output = 0;
	for (const key in columnKeys) {
		if (rowKeys[key]) {
			output += rowKeys[key] * columnKeys[key];
		}
	}
	return output;
};

console.log(equalPairs((grid = [ [ 3, 2, 1 ], [ 1, 7, 6 ], [ 2, 7, 7 ] ])));
console.log(
	equalPairs((grid = [ [ 3, 1, 2, 2 ], [ 1, 4, 4, 5 ], [ 2, 4, 2, 2 ], [ 2, 4, 2, 2 ] ]))
);
