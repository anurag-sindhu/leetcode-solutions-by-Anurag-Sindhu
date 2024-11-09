function getNeighbors(array, row, column) {
	const totalRows = array.length;
	const totalColumns = array[0].length;
	const neighbors = [];
	if (row > 0 && array[row - 1] && array[row - 1][column]) {
		neighbors.push({ rowIndex: row - 1, columnIndex: column });
	}
	if (row < totalRows - 1 && array[row + 1] && array[row + 1][column]) {
		neighbors.push({ rowIndex: row + 1, columnIndex: column });
	}

	if (column > 0 && array[row] && array[row][column - 1]) {
		neighbors.push({ rowIndex: row, columnIndex: column - 1 });
	}

	if (column < totalColumns - 1 && array[row - 1] && array[row - 1][column]) {
		neighbors.push({ rowIndex: row - 1, columnIndex: column });
	}

	return neighbors;
}

var getMaximumGold = function(array) {
	let max = -Infinity;
	function explore(array, rowIndex, columnIndex, earned = 0, visited = {}) {
		const neighbors = getNeighbors(array, rowIndex, columnIndex);
		if (neighbors[0]) {
			const visitedKey = `${neighbors[0].rowIndex}_${neighbors[0].columnIndex}`;
			if (!visited[visitedKey]) {
				visited[visitedKey] = true;
				explore(
					array,
					neighbors[0].rowIndex,
					neighbors[0].columnIndex,
					earned + array[neighbors[0].rowIndex][neighbors[0].columnIndex],
					visited
				);
			}
		}
		if (neighbors[1]) {
			const visitedKey = `${neighbors[1].rowIndex}_${neighbors[1].columnIndex}`;
			if (!visited[visitedKey]) {
				visited[visitedKey] = true;
				explore(
					array,
					neighbors[1].rowIndex,
					neighbors[1].columnIndex,
					earned + array[neighbors[1].rowIndex][neighbors[1].columnIndex],
					visited
				);
			}
		}
		if (neighbors[2]) {
			const visitedKey = `${neighbors[2].rowIndex}_${neighbors[2].columnIndex}`;
			if (!visited[visitedKey]) {
				visited[visitedKey] = true;
				explore(
					array,
					neighbors[2].rowIndex,
					neighbors[2].columnIndex,
					earned + array[neighbors[2].rowIndex][neighbors[2].columnIndex],
					visited
				);
			}
		}
		if (neighbors[3]) {
			const visitedKey = `${neighbors[3].rowIndex}_${neighbors[3].columnIndex}`;
			if (!visited[visitedKey]) {
				visited[visitedKey] = true;
				explore(
					array,
					neighbors[3].rowIndex,
					neighbors[3].columnIndex,
					earned + array[neighbors[3].rowIndex][neighbors[3].columnIndex],
					visited
				);
			}
		}
		if (max < earned) {
			max = earned;
		}
		return earned;
	}
	var getMaximumGoldHelper = function() {
		for (let rowIndex = 0; rowIndex < array.length; rowIndex++) {
			for (let columnIndex = 0; columnIndex < array.length; columnIndex++) {
				const visitedKey = `${rowIndex}_${columnIndex}`;
				if (array[rowIndex][columnIndex]) {
					explore(array, rowIndex, columnIndex, array[rowIndex][columnIndex], {
						[visitedKey]: true
					});
				}
			}
		}
	};
	getMaximumGoldHelper();
	return max;
};

console.log(
	getMaximumGold([
		[ 1, 0, 7, 0, 0, 0 ],
		[ 2, 0, 6, 0, 1, 0 ],
		[ 3, 5, 6, 7, 4, 2 ],
		[ 4, 3, 1, 0, 2, 0 ],
		[ 3, 0, 5, 0, 20, 0 ]
	])
);
console.log(getMaximumGold([ [ 0, 6, 0 ], [ 5, 8, 7 ], [ 0, 9, 0 ] ]));
console.log(getMaximumGold([ [ 1, 0, 7 ], [ 2, 0, 6 ], [ 3, 4, 5 ], [ 0, 3, 0 ], [ 9, 0, 20 ] ]));
