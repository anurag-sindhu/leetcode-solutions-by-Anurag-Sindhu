function getNeighbors(grid, row, column) {
	const totalRows = grid.length;
	const totalColumns = grid[0].length;
	const neighbors = [];
	if (row > 0 && grid[row - 1][column]) {
		neighbors.push({ rowIndex: row - 1, columnIndex: column });
	}
	if (row < totalRows - 1 && grid[row + 1][column]) {
		neighbors.push({ rowIndex: row + 1, columnIndex: column });
	}

	if (column > 0 && grid[row][column - 1]) {
		neighbors.push({ rowIndex: row, columnIndex: column - 1 });
	}

	if (column < totalColumns - 1 && grid[row][column + 1]) {
		neighbors.push({ rowIndex: row, columnIndex: column + 1 });
	}

	return neighbors;
}

function isBoundary(array, row, column) {
	if (0 === row) {
		return true;
	}
	if (array.length - 1 === row) {
		return true;
	}

	if (0 === column) {
		return true;
	}

	if (array[0].length - 1 === column) {
		return true;
	}
	return false;
}

function doExplore(array, row, column, explored) {
	const obj = { status: false, count: 0 };
	function doExploreHelper(array, row, column, explored) {
		obj.count += 1;
		if (isBoundary(array, row, column)) {
			obj.status = true;
		}
		const neighbors = getNeighbors(array, row, column);
		for (const { rowIndex, columnIndex } of neighbors) {
			if (!explored[`${rowIndex}_${columnIndex}`]) {
				explored[`${rowIndex}_${columnIndex}`] = true;
				doExploreHelper(array, rowIndex, columnIndex, explored);
			}
		}
		return;
	}
	doExploreHelper(array, row, column, explored);
	return obj;
}

var numEnclaves = function(array) {
	let count = 0;
	let hasExplored = {};
	for (let rowIndex = 0; rowIndex < array.length; rowIndex++) {
		for (let columnIndex = 0; columnIndex < array.length; columnIndex++) {
			if (array[rowIndex][columnIndex] && !hasExplored[`${rowIndex}_${columnIndex}`]) {
				hasExplored[`${rowIndex}_${columnIndex}`] = true;
				const resp = doExplore(array, rowIndex, columnIndex, hasExplored);
				if (!resp.status) {
					count += resp.count;
				}
			}
		}
	}
	return count;
};

console.log(
	numEnclaves(
		(grid = [
			[ 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1 ],
			[ 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1 ],
			[ 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0 ],
			[ 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0 ],
			[ 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1 ],
			[ 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1 ],
			[ 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0 ],
			[ 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0 ],
			[ 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0 ],
			[ 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1 ]
		])
	)
);

console.log(
	numEnclaves((grid = [ [ 0, 1, 1, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 0 ] ]))
);

console.log(
	numEnclaves((grid = [ [ 0, 0, 0, 0 ], [ 1, 0, 1, 0 ], [ 0, 1, 1, 0 ], [ 0, 0, 0, 0 ] ]))
);
