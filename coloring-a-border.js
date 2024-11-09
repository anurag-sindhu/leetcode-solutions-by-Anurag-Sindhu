function getNeighbors(grid, row, column) {
	const totalRows = grid.length;
	const totalColumns = grid[0].length;
	const neighbors = [];
	if (row > 0) {
		neighbors.push({ rowIndex: row - 1, columnIndex: column });
	}
	if (row < totalRows - 1) {
		neighbors.push({ rowIndex: row + 1, columnIndex: column });
	}

	if (column > 0) {
		neighbors.push({ rowIndex: row, columnIndex: column - 1 });
	}

	if (column < totalColumns - 1) {
		neighbors.push({ rowIndex: row, columnIndex: column + 1 });
	}

	return neighbors;
}

function colorTheComponent(grid, row, col, foundColor, color = -1, explored = {}) {
	const neighbors = getNeighbors(grid, row, col);
	for (const { rowIndex, columnIndex } of neighbors) {
		const key = `${rowIndex}_${columnIndex}`;
		if (!explored[key] && grid[rowIndex][columnIndex] === foundColor) {
			explored[key] = true;
			grid[rowIndex][columnIndex] = color;
			colorTheComponent(grid, rowIndex, columnIndex, foundColor, color, explored);
		}
	}
}

function isBoundary(grid, rowIndex, columnIndex) {
	const response =
		grid[rowIndex - 1] &&
		grid[rowIndex - 1][columnIndex] === -1 &&
		grid[rowIndex + 1] &&
		grid[rowIndex + 1][columnIndex] === -1 &&
		grid[rowIndex] &&
		grid[rowIndex][columnIndex - 1] === -1 &&
		grid[rowIndex][columnIndex + 1] === -1
			? true
			: false;
	return response;
}

var colorBorder = function(grid, row, col, color) {
	const foundColor = grid[row][col];
	grid[row][col] = -1;
	const notInBoundary = [];
	colorTheComponent(grid, row, col, foundColor);
	for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
		for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
			if (grid[rowIndex][columnIndex] === -1) {
				if (isBoundary(grid, rowIndex, columnIndex)) {
					notInBoundary.push({ rowIndex, columnIndex });
				}
			}
		}
	}

	for (const { rowIndex, columnIndex } of notInBoundary) {
		grid[rowIndex][columnIndex] = foundColor;
	}

	for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
		for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
			if (grid[rowIndex][columnIndex] === -1) {
				grid[rowIndex][columnIndex] = color;
			}
		}
	}
	return grid;
};


console.log(
	colorBorder(
		(grid = [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ]),
		(row = 1),
		(col = 1),
		(color = 2)
	)
);
console.log(
	colorBorder(
		(grid = [ [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ] ]),
		(row = 1),
		(col = 1),
		(color = 2)
	)
);

console.log(colorBorder((grid = [ [ 1, 2, 2 ], [ 2, 3, 2 ] ]), (row = 0), (col = 1), (color = 3)));

console.log(colorBorder((grid = [ [ 1, 1 ], [ 1, 2 ] ]), (row = 0), (col = 0), (color = 3)));
