var mergeSimilarItems = function(items1, items2) {
	const arr = new Array(1001).fill(null);
	for (const [ value, weight ] of items1) {
		if (arr[value] === null) {
			arr[value] = 0;
		}
		arr[value] += weight;
	}
	for (const [ value, weight ] of items2) {
		if (arr[value] === null) {
			arr[value] = 0;
		}
		arr[value] += weight;
	}
	const output = [];
	for (let index = 0; index < arr.length; index++) {
		const element = arr[index];
		if (element !== null) {
			output.push([ index, element ]);
		}
	}

	return output;
};

console.log(mergeSimilarItems([ [ 1, 1 ] ], [ [ 1000, 1000 ] ]));
console.log(
	mergeSimilarItems(
		(items1 = [ [ 1, 1 ], [ 4, 5 ], [ 3, 8 ] ]),
		(items2 = [ [ 3, 1 ], [ 1, 5 ] ])
	)
);
console.log(
	mergeSimilarItems(
		(items1 = [ [ 1, 1 ], [ 3, 2 ], [ 2, 3 ] ]),
		(items2 = [ [ 2, 1 ], [ 3, 2 ], [ 1, 3 ] ])
	)
);
console.log(
	mergeSimilarItems(
		(items1 = [ [ 1, 3 ], [ 2, 2 ] ]),
		(items2 = [ [ 7, 1 ], [ 2, 2 ], [ 1, 4 ] ])
	)
);
