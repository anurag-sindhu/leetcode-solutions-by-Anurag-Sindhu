var checkXMatrix = function(array) {
	const diagonal = {};
	let rowIndex = 0;
	let columnIndex = 0;
	while (rowIndex < array.length && columnIndex < array.length) {
		const key = `${rowIndex}_${columnIndex}`;
		diagonal[key] = true;
		if (!array[rowIndex][columnIndex]) {
			return false;
		}
		rowIndex++;
		columnIndex++;
	}
	rowIndex = rowIndex - 1;
	columnIndex = 0;
	while (rowIndex >= 0 && columnIndex < array.length) {
		const key = `${rowIndex}_${columnIndex}`;
		diagonal[key] = true;
		if (!array[rowIndex][columnIndex]) {
			return false;
		}
		rowIndex--;
		columnIndex++;
	}
	for (let rowIndex = 0; rowIndex < array.length; rowIndex++) {
		for (let columnIndex = 0; columnIndex < array.length; columnIndex++) {
			const key = `${rowIndex}_${columnIndex}`;
			if (!diagonal[key]) {
				if (array[rowIndex][columnIndex]) {
					return false;
				}
			}
		}
	}
	return true;
};

console.log(
	checkXMatrix((grid = [ [ 2, 0, 0, 1 ], [ 0, 3, 1, 0 ], [ 0, 5, 2, 0 ], [ 4, 0, 0, 2 ] ]))
);
console.log(checkXMatrix((grid = [ [ 5, 7, 0 ], [ 0, 3, 1 ], [ 0, 5, 0 ] ])));
