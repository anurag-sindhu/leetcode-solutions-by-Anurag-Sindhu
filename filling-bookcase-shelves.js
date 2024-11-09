var minHeightShelves = function(books, shelfWidth) {
	const memoization = {};
	let minimumHeight = Infinity;
	var minHeightShelvesHelper = function(
		books,
		shelfWidth,
		workingIndex = 0,
		totalHeight = null,
		lastRowMaxHeight = null,
		previousOccupiedWidth = 0
	) {
		if (memoization[(workingIndex - 1) * 1000]) {
			return memoization[(workingIndex - 1) * 1000];
		}
		if (workingIndex >= books.length) {
			return totalHeight;
		}
		const [ thickness, height ] = books[workingIndex++];
		let totalHeightOfSameRow = totalHeight || height;
		let lastRowMaxHeightOfSameRow = height;
		let previousOccupiedWidthOfSameRow = null;

		if (previousOccupiedWidth + thickness > shelfWidth) {
			totalHeightOfSameRow = totalHeight + height;
			previousOccupiedWidthOfSameRow = thickness;
		} else {
			if (lastRowMaxHeight === null) {
				lastRowMaxHeightOfSameRow = height;
			} else {
				if (height > lastRowMaxHeight) {
					totalHeightOfSameRow = totalHeight + height - lastRowMaxHeight;
				}
				lastRowMaxHeightOfSameRow = Math.max(lastRowMaxHeight, height);
			}
			previousOccupiedWidthOfSameRow = previousOccupiedWidth + thickness;
		}

		let totalHeightOfNextRow = totalHeight + height;
		let previousOccupiedWidthOfNextRow = thickness;
		let lastRowMaxHeightOfNextRow = height;
		if (totalHeightOfNextRow === totalHeightOfNextRow) {
			const resp = Math.min(
				minHeightShelvesHelper(
					books,
					shelfWidth,
					workingIndex,
					totalHeightOfSameRow,
					lastRowMaxHeightOfSameRow,
					previousOccupiedWidthOfSameRow
				),
				minHeightShelvesHelper(
					books,
					shelfWidth,
					workingIndex,
					totalHeightOfNextRow,
					lastRowMaxHeightOfNextRow,
					previousOccupiedWidthOfNextRow
				)
			);
			memoization[(workingIndex - 1) * 1000] = resp;
			if (minimumHeight > resp) {
				minimumHeight = resp;
			}
			return resp;
		} else if (totalHeightOfSameRow > totalHeightOfNextRow) {
			const resp = Math.min(
				minHeightShelvesHelper(
					books,
					shelfWidth,
					workingIndex,
					totalHeightOfNextRow,
					lastRowMaxHeightOfNextRow,
					previousOccupiedWidthOfNextRow
				)
			);
			memoization[(workingIndex - 1) * 1000] = resp;
			if (minimumHeight > resp) {
				minimumHeight = resp;
			}
			return resp;
		} else {
			const resp = Math.min(
				minHeightShelvesHelper(
					books,
					shelfWidth,
					workingIndex,
					totalHeightOfSameRow,
					lastRowMaxHeightOfSameRow,
					previousOccupiedWidthOfSameRow
				)
			);
			memoization[(workingIndex - 1) * 1000] = resp;
			if (minimumHeight > resp) {
				minimumHeight = resp;
			}
			return resp;
		}
	};
	minHeightShelvesHelper(books, shelfWidth);
	return minimumHeight;
};

let resp;

resp = minHeightShelves(
	(books = [ [ 1, 1 ], [ 2, 3 ], [ 2, 3 ], [ 1, 1 ], [ 1, 1 ], [ 1, 1 ], [ 1, 2 ] ]),
	(shelf_width = 4)
);
console.log(resp === 6);

resp = minHeightShelves((books = [ [ 1, 1 ], [ 2, 3 ] ]), (shelf_width = 4));
console.log(resp === 3);

resp = minHeightShelves((books = [ [ 1, 1 ], [ 2, 3 ], [ 2, 3 ] ]), (shelf_width = 4));
console.log(resp === 4);
//1 -> 2 -> 4 -> 8 -> 16

resp = minHeightShelves((books = [ [ 1, 1 ], [ 2, 3 ], [ 2, 3 ], [ 1, 1 ] ]), (shelf_width = 4));
console.log(resp === 5);

resp = minHeightShelves(
	(books = [ [ 1, 1 ], [ 2, 3 ], [ 2, 3 ], [ 1, 1 ], [ 1, 1 ] ]),
	(shelf_width = 4)
);
console.log(resp === 5);

resp = minHeightShelves(
	(books = [ [ 1, 1 ], [ 2, 3 ], [ 2, 3 ], [ 1, 1 ], [ 1, 1 ], [ 1, 1 ] ]),
	(shelf_width = 4)
);
console.log(resp === 5);

resp = minHeightShelves(
	(books = [ [ 1, 1 ], [ 2, 3 ], [ 2, 3 ], [ 1, 1 ], [ 1, 1 ], [ 1, 1 ], [ 1, 2 ] ]),
	(shelf_width = 4)
);
console.log(resp === 6);

resp = minHeightShelves((books = [ [ 1, 3 ], [ 2, 4 ], [ 3, 2 ] ]), (shelfWidth = 6));
console.log(resp === 4);
