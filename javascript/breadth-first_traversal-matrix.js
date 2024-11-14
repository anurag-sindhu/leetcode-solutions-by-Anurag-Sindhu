const { areTwoArrayEqual } = require('./compare-two-array');

function getNeighbors(array, rowIndex, columnIndex) {
	const neighbors = [];
	if (array[rowIndex] && array[rowIndex][columnIndex - 1] !== undefined) {
		neighbors.push({
			rowIndex: rowIndex,
			columnIndex: columnIndex - 1
		});
	}
	if (array[rowIndex] && array[rowIndex][columnIndex + 1] !== undefined) {
		neighbors.push({
			rowIndex: rowIndex,
			columnIndex: columnIndex + 1
		});
	}
	if (array[rowIndex - 1] && array[rowIndex - 1][columnIndex] !== undefined) {
		neighbors.push({
			rowIndex: rowIndex - 1,
			columnIndex: columnIndex
		});
	}
	if (array[rowIndex + 1] && array[rowIndex + 1][columnIndex] !== undefined) {
		neighbors.push({
			rowIndex: rowIndex + 1,
			columnIndex: columnIndex
		});
	}
	return neighbors;
}

function breadthFirstTraversal(array, rowIndex = 0, columnIndex = 0, output = []) {
	if (array[rowIndex] === undefined && array[rowIndex][columnIndex] === undefined) {
		return output;
	}
	let shift = [
		{
			rowIndex,
			columnIndex
		}
	];
	output.push(array[rowIndex][columnIndex]);
	const entertained = { '0_0': true };
	let temp = [];
	while (shift.length) {
		temp = [];
		for (const { rowIndex: shiftRowIndex, columnIndex: shiftColumnIndex } of shift) {
			const neighbors = getNeighbors(array, shiftRowIndex, shiftColumnIndex);
			for (const {
				rowIndex: neighborsRowIndex,
				columnIndex: neighborsColumnIndex
			} of neighbors) {
				if (!entertained[`${neighborsRowIndex}_${neighborsColumnIndex}`]) {
					output.push(array[neighborsRowIndex][neighborsColumnIndex]);
					entertained[`${neighborsRowIndex}_${neighborsColumnIndex}`] = true;
					temp.push({
						rowIndex: neighborsRowIndex,
						columnIndex: neighborsColumnIndex
					});
				}
			}
		}

		shift = temp;
	}
	return output;
}
const res = breadthFirstTraversal([
	[ 1, 2, 3, 4 ],
	[ 5, 6, 7, 8 ],
	[ 9, 10, 11, 12 ],
	[ 13, 14, 15, 16 ]
]);

console.log(areTwoArrayEqual(res, [ 1, 2, 5, 3, 6, 9, 4, 7, 10, 13, 8, 11, 14, 12, 15, 16 ]));
