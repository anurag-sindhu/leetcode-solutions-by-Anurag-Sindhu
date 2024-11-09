var queensAttacktheKing = function(queens, king) {
	const queensConfig = {};
	for (const [ row, column ] of queens) {
		const key = `${row}_${column}`;
		queensConfig[key] = true;
	}
	const [ kingRow, kingColumn ] = king;
	const output = [];
	const maxRow = 8;
	const maxColumn = 8;
	let currentRow = null;
	let currentColumn = null;

	currentRow = kingRow;
	currentColumn = kingColumn;
	// bottom
	while (++currentRow < maxRow) {
		const key = `${currentRow}_${currentColumn}`;
		if (queensConfig[key]) {
			output.push([ currentRow, currentColumn ]);
			break;
		}
	}
	currentRow = kingRow;
	currentColumn = kingColumn;
	// top
	while (--currentRow >= 0) {
		const key = `${currentRow}_${currentColumn}`;
		if (queensConfig[key]) {
			output.push([ currentRow, currentColumn ]);
			break;
		}
	}

	currentRow = kingRow;
	currentColumn = kingColumn;
	// left
	while (--currentColumn >= 0) {
		const key = `${currentRow}_${currentColumn}`;
		if (queensConfig[key]) {
			output.push([ currentRow, currentColumn ]);
			break;
		}
	}

	currentRow = kingRow;
	currentColumn = kingColumn;
	// right
	while (++currentColumn < maxColumn) {
		const key = `${currentRow}_${currentColumn}`;
		if (queensConfig[key]) {
			output.push([ currentRow, currentColumn ]);
			break;
		}
	}

	currentRow = kingRow;
	currentColumn = kingColumn;
	// left-top
	while (--currentColumn >= 0 && --currentRow >= 0) {
		const key = `${currentRow}_${currentColumn}`;
		if (queensConfig[key]) {
			output.push([ currentRow, currentColumn ]);
			break;
		}
	}

	currentRow = kingRow;
	currentColumn = kingColumn;
	// bottom-right
	while (++currentColumn < maxColumn && ++currentRow < maxRow) {
		const key = `${currentRow}_${currentColumn}`;
		if (queensConfig[key]) {
			output.push([ currentRow, currentColumn ]);
			break;
		}
	}

	currentRow = kingRow;
	currentColumn = kingColumn;
	// top-right
	while (++currentColumn < maxColumn && --currentRow >= 0) {
		const key = `${currentRow}_${currentColumn}`;
		if (queensConfig[key]) {
			output.push([ currentRow, currentColumn ]);
			break;
		}
	}

	currentRow = kingRow;
	currentColumn = kingColumn;
	// top-right
	while (--currentColumn >= 0 && ++currentRow < maxColumn) {
		const key = `${currentRow}_${currentColumn}`;
		if (queensConfig[key]) {
			output.push([ currentRow, currentColumn ]);
			break;
		}
	}
	return output;
};

console.log(
	queensAttacktheKing(
		(queens = [ [ 0, 1 ], [ 1, 0 ], [ 4, 0 ], [ 0, 4 ], [ 3, 3 ], [ 2, 4 ] ]),
		(king = [ 0, 0 ])
	)
);

console.log(
	queensAttacktheKing(
		(queens = [ [ 0, 0 ], [ 1, 1 ], [ 2, 2 ], [ 3, 4 ], [ 3, 5 ], [ 4, 4 ], [ 4, 5 ] ]),
		(king = [ 3, 3 ])
	)
);
