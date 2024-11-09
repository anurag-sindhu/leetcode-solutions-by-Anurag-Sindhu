function sortFromLeftToRight(matrix, rowIndex = 0, columnIndex) {
	let columnsLength = matrix[0].length;
	let tempRowIndex = rowIndex;
	let arr = [];
	while (--columnsLength) {
		arr = [];
		tempRowIndex = rowIndex;
		tempColumnIndex = columnIndex;
		while (matrix[tempRowIndex] && matrix[tempRowIndex][tempColumnIndex] !== undefined) {
			arr.push(matrix[tempRowIndex][tempColumnIndex]);
			tempRowIndex++;
			tempColumnIndex++;
		}
		const sortedArray = arr.sort((a, b) => a - b);
		let sortedArrayIndex = 0;
		tempRowIndex = rowIndex;
		tempColumnIndex = columnIndex;
		while (matrix[tempRowIndex] && matrix[tempRowIndex][tempColumnIndex] !== undefined) {
			matrix[tempRowIndex][tempColumnIndex] = sortedArray[sortedArrayIndex++];
			tempRowIndex++;
			tempColumnIndex++;
		}
		columnIndex++;
	}
	return matrix;
}

function sortFromTopToBottom(matrix, rowIndex, columnIndex) {
	let rowsLength = matrix.length - 1;
	let tempRowIndex = rowIndex;
	let arr = [];
	//O(n^2LogN)
	while (--rowsLength) {
		arr = [];
		tempRowIndex = rowIndex;
		tempColumnIndex = columnIndex;
		while (matrix[tempRowIndex] && matrix[tempRowIndex][tempColumnIndex] !== undefined) {
			arr.push(matrix[tempRowIndex][tempColumnIndex]); //O(n)
			tempRowIndex++;
			tempColumnIndex++;
		}
		const sortedArray = arr.sort((a, b) => a - b); //O(nLogN)
		let sortedArrayIndex = 0;
		tempRowIndex = rowIndex;
		tempColumnIndex = columnIndex;
		while (matrix[tempRowIndex] && matrix[tempRowIndex][tempColumnIndex] !== undefined) {
			matrix[tempRowIndex][tempColumnIndex] = sortedArray[sortedArrayIndex++]; //O(n)
			tempRowIndex++;
			tempColumnIndex++;
		}
		rowIndex++;
	}
	return matrix;
}

var diagonalSort = function(matrix) {
	if (matrix.length) {
		if (matrix[0].length > 1) {
			sortFromLeftToRight(matrix, 0, 0);
		}
		if (matrix.length > 1) {
			sortFromTopToBottom(matrix, 1, 0);
		}
		return matrix;
	}
};

console.log(diagonalSort((mat = [ [ 3, 3, 1, 1 ], [ 2, 2, 1, 2 ], [ 1, 1, 1, 2 ] ])));

console.log(diagonalSort((mat = [ [ 37, 98, 82, 45, 42 ] ])));
console.log(
	diagonalSort(
		(mat = [
			[ 11, 25, 66, 1, 69, 7 ],
			[ 23, 55, 17, 45, 15, 52 ],
			[ 75, 31, 36, 44, 58, 8 ],
			[ 22, 27, 33, 25, 68, 4 ],
			[ 84, 28, 14, 11, 5, 50 ]
		])
	)
);
