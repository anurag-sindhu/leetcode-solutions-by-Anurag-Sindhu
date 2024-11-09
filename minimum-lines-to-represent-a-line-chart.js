var minimumLinesFirst = function(array) {
	let count = 1;
	const maximumRowOrColumn = (function() {
		let maxRow = -Infinity;
		let maxColumn = -Infinity;
		for (const [ rowIndex, columnIndex ] of array) {
			if (maxRow < rowIndex) {
				maxRow = rowIndex;
			}
			if (maxColumn < columnIndex) {
				maxColumn = columnIndex;
			}
		}
		return Math.max(maxRow, maxColumn);
	})();
	const matrix = [];
	for (let rowIndex = 0; rowIndex <= maximumRowOrColumn; rowIndex++) {
		if (!matrix[rowIndex]) {
			matrix[rowIndex] = [];
		}
		for (let columnIndex = 0; columnIndex <= maximumRowOrColumn; columnIndex++) {
			matrix[rowIndex][columnIndex] = 0;
		}
	}

	for (let index = 0; index < array.length; index++) {
		const [ rowIndex, columnIndex ] = array[index];
		matrix[rowIndex][columnIndex] = 1;
	}
	const updatedArray = [];

	for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
		for (let columnIndex = 0; columnIndex < matrix.length; columnIndex++) {
			if (matrix[rowIndex][columnIndex]) {
				updatedArray.push([ rowIndex, columnIndex ]);
			}
		}
	}

	for (let index = 2; index < updatedArray.length; index++) {
		const isStraightLine = checkStraightLine([
			updatedArray[index - 2],
			updatedArray[index - 1],
			updatedArray[index]
		]);
		if (!isStraightLine) {
			count += 1;
			// index += 1;
		}
	}
	return count;
};

var checkStraightLine = function(coordinates) {
	const slope = (coor1, coor2) => {
		const numerator = parseFloat(coor2[1] - coor1[1]).toPrecision(12);
		const denominator = parseFloat(coor2[0] - coor1[0]).toPrecision(12);
		const slope = parseFloat(Number(numerator) / Number(denominator)).toPrecision(12);
		return slope;
	};
	const areCollinear = (a, b, c) => {
		return slope(a, b) === slope(b, c) && slope(b, c) === slope(c, a);
	};
	return areCollinear(coordinates[0], coordinates[1], coordinates[2]);
};

var minimumLines = function(array) {
	if (array.length === 0) {
		return 0;
	}
	if (array.length === 1) {
		return 0;
	}
	if (array.length === 2) {
		return 1;
	}
	array.sort(
		([ aXCordinate, aYCordinate ], [ bXCordinate, bYCordinate ]) => aXCordinate - bXCordinate
	);

	let count = null;

	for (let index = 2; index < array.length; index++) {
		const isStraightLine = checkStraightLine([
			array[index - 2],
			array[index - 1],
			array[index]
		]);
		if (count === null) {
			count = 1;
		}
		if (!isStraightLine) {
			count += 1;
		}
	}
	if (count === null) {
		return 0;
	}
	return count;
};

console.log(
	minimumLines(
		(stockPrices = [ [ 1, 1 ], [ 500000000, 499999999 ], [ 1000000000, 999999998 ] ])
	) === 2
);
console.log(
	minimumLines(
		(stockPrices = [
			[ 1, 7 ],
			[ 2, 6 ],
			[ 3, 5 ],
			[ 4, 4 ],
			[ 5, 4 ],
			[ 6, 3 ],
			[ 7, 2 ],
			[ 8, 1 ]
		])
	) === 3
);
console.log(
	minimumLines(
		(stockPrices = [
			[ 72, 98 ],
			[ 62, 27 ],
			[ 32, 7 ],
			[ 71, 4 ],
			[ 25, 19 ],
			[ 91, 30 ],
			[ 52, 73 ],
			[ 10, 9 ],
			[ 99, 71 ],
			[ 47, 22 ],
			[ 19, 30 ],
			[ 80, 63 ],
			[ 18, 15 ],
			[ 48, 17 ],
			[ 77, 16 ],
			[ 46, 27 ],
			[ 66, 87 ],
			[ 55, 84 ],
			[ 65, 38 ],
			[ 30, 9 ],
			[ 50, 42 ],
			[ 100, 60 ],
			[ 75, 73 ],
			[ 98, 53 ],
			[ 22, 80 ],
			[ 41, 61 ],
			[ 37, 47 ],
			[ 95, 8 ],
			[ 51, 81 ],
			[ 78, 79 ],
			[ 57, 95 ]
		])
	) === 29
);

console.log(minimumLines((stockPrices = [ [ 1, 1 ], [ 1000000000, 1000000000 ] ])) === 1);
console.log(minimumLines((stockPrices = [ [ 1, 1 ] ])) === 0);

console.log(minimumLines((stockPrices = [ [ 3, 4 ], [ 1, 2 ], [ 7, 8 ], [ 2, 3 ] ])));
