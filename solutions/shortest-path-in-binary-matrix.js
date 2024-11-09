var shortestPathBinaryMatrix1 = function(array) {
	let finalMinPath = Infinity;
	var shortestPathBinaryMatrixHelper = function(
		array,
		row = 0,
		column = 0,
		encountered = {},
		path = 1
	) {
		const getAllPossibilities = getNeighbors(array, row, column);
		encountered[`${row}_${column}`] = true;
		if (row === array.length - 1 && row === array.length - 1) {
			return path;
		}
		if (!getAllPossibilities.length) {
			return -1;
		}
		for (const {
			rowIndex: rowFromPossibility,
			columnIndex: columnFromPossibility
		} of getAllPossibilities) {
			if (!encountered[`${rowFromPossibility}_${columnFromPossibility}`]) {
				const response = shortestPathBinaryMatrixHelper(
					array,
					rowFromPossibility,
					columnFromPossibility,
					encountered,
					path + 1
				);
				if (response !== -1) {
					finalMinPath = Math.min(finalMinPath, response);
				}
			}
		}
		return path;
	};
	shortestPathBinaryMatrixHelper(array);
	return finalMinPath;
};

function getNeighbors(grid, row, column) {
	const totalRows = grid.length;
	const totalColumns = grid[0].length;
	const neighbors = [];
	if (grid[row - 1] && grid[row - 1][column - 1] === 0) {
		neighbors.push({ rowIndex: row - 1, columnIndex: column - 1 });
	}
	if (grid[row - 1] && grid[row - 1][column + 1] === 0) {
		neighbors.push({ rowIndex: row - 1, columnIndex: column + 1 });
	}
	if (grid[row - 1] && grid[row - 1][column] === 0) {
		neighbors.push({ rowIndex: row - 1, columnIndex: column });
	}

	if (grid[row + 1] && grid[row + 1][column - 1] === 0) {
		neighbors.push({ rowIndex: row + 1, columnIndex: column - 1 });
	}
	if (grid[row + 1] && grid[row + 1][column] === 0) {
		neighbors.push({ rowIndex: row + 1, columnIndex: column });
	}
	if (grid[row + 1] && grid[row + 1][column + 1] === 0) {
		neighbors.push({ rowIndex: row + 1, columnIndex: column + 1 });
	}

	if (grid[row] && grid[row][column - 1] === 0) {
		neighbors.push({ rowIndex: row, columnIndex: column - 1 });
	}

	if (grid[row] && grid[row][column + 1] === 0) {
		neighbors.push({ rowIndex: row, columnIndex: column + 1 });
	}

	return neighbors;
}

var shortestPathBinaryMatrix = function(array) {
	if (array[0][0] === 1) return -1;
	let finalMinPath = Infinity;
	const queue = [ [ 0, 0, 1 ] ];
	while (queue.length) {
		const [ row, column, path ] = queue.shift();
		const getAllPossibilities = getNeighbors(array, row, column);
		if (row === array.length - 1 && column === array[0].length - 1) {
			console.log({ row, column, path });
			finalMinPath = Math.min(finalMinPath, path);
			return finalMinPath;
		}

		for (const {
			rowIndex: rowFromPossibility,
			columnIndex: columnFromPossibility
		} of getAllPossibilities) {
			queue.push([ rowFromPossibility, columnFromPossibility, path + 1 ]);
			array[rowFromPossibility][columnFromPossibility] = 1;
		}
	}

	return -1;
};

console.log(shortestPathBinaryMatrix((grid = [ [ 0, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 0 ] ])) === 4);
console.log(shortestPathBinaryMatrix((grid = [ [ 0, 0, 0 ], [ 1, 1, 0 ], [ 1, 1, 0 ] ])));

console.log(shortestPathBinaryMatrix((grid = [ [ 1, 0, 0 ], [ 1, 1, 0 ], [ 1, 1, 0 ] ])));

console.log(shortestPathBinaryMatrix((grid = [ [ 0, 1 ], [ 1, 0 ] ])));
