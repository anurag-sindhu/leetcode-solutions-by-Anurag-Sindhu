function getNeighbors(array, rowIndex, columnIndex) {
	const neighbors = [];
	if (array[rowIndex] && array[rowIndex][columnIndex - 1] === 1) {
		neighbors.push({
			rowIndex: rowIndex,
			columnIndex: columnIndex - 1
		});
	}
	if (array[rowIndex] && array[rowIndex][columnIndex + 1] === 1) {
		neighbors.push({
			rowIndex: rowIndex,
			columnIndex: columnIndex + 1
		});
	}
	if (array[rowIndex - 1] && array[rowIndex - 1][columnIndex] === 1) {
		neighbors.push({
			rowIndex: rowIndex - 1,
			columnIndex: columnIndex
		});
	}
	if (array[rowIndex + 1] && array[rowIndex + 1][columnIndex] === 1) {
		neighbors.push({
			rowIndex: rowIndex + 1,
			columnIndex: columnIndex
		});
	}
	return neighbors;
}

var orangesRotting = function(array) {
	let totalMinutes = 0;
	let hasAnyVirusFound = false;
	let elementsToBeSkipped = false;
	while (true) {
		hasAnyVirusFound = false;
		elementsToBeSkipped = {};
		for (let rowIndex = 0; rowIndex < array.length; rowIndex++) {
			for (let columnIndex = 0; columnIndex < array[rowIndex].length; columnIndex++) {
				if (
					array[rowIndex][columnIndex] === 2 &&
					!elementsToBeSkipped[`${rowIndex}_${columnIndex}`]
				) {
					const neighbors = getNeighbors(array, rowIndex, columnIndex);
					if (neighbors.length) {
						hasAnyVirusFound = true;
					}
					for (const {
						rowIndex: neighborsRowIndex,
						columnIndex: neighborsColumnIndex
					} of neighbors) {
						elementsToBeSkipped[
							`${neighborsRowIndex}_${neighborsColumnIndex}`
						] = true;
						array[neighborsRowIndex][neighborsColumnIndex] = 2;
					}
				}
			}
		}
		if (!hasAnyVirusFound) {
			break;
		}
		totalMinutes++;
	}

	for (let rowIndex = 0; rowIndex < array.length; rowIndex++) {
		for (let columnIndex = 0; columnIndex < array[rowIndex].length; columnIndex++) {
			if (array[rowIndex][columnIndex] === 1) {
				return -1;
			}
		}
	}
	return totalMinutes;
};

console.log(orangesRotting((grid = [ [ 2, 1, 1 ], [ 0, 1, 1 ], [ 1, 0, 1 ] ])) === -1);
console.log(orangesRotting((grid = [ [ 2, 1, 1 ], [ 1, 1, 0 ], [ 0, 1, 1 ] ])) === 4);
console.log(orangesRotting((grid = [ [ 2, 1, 0, 2 ] ])) === 1);
console.log(orangesRotting((grid = [ [ 0 ] ])) === 0);
console.log(orangesRotting((grid = [ [ 0, 2 ] ])) === 0);
console.log(
	orangesRotting((grid = [ [ 2, 1, 0, 2, 1 ], [ 1, 0, 1, 2, 1 ], [ 1, 0, 0, 2, 1 ] ])) === 2
);

console.log(orangesRotting((grid = [ [ 1, 0 ], [ 0, 0 ] ])) === -1);

console.log(orangesRotting((grid = [ [ 0, 2 ] ])) === 0);
