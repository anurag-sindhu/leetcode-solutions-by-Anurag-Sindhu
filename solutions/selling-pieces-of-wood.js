var sellingWood = function(row, colum, prices) {
	const dynamicProgramming = (function() {
		const config = {};
		for (const iterator of prices) {
			const key = `${iterator[0]}_${iterator[1]}`;
			config[key] = iterator[2];
		}
		return config;
	})();
	for (let rowIndex = 1; rowIndex <= row; rowIndex++) {
		for (let columnIndex = 1; columnIndex <= colum; columnIndex++) {
			const key = `${rowIndex}_${columnIndex}`;
			for (let horizontalIndex = 1; horizontalIndex <= columnIndex; horizontalIndex++) {
				const key1 = `${rowIndex}_${horizontalIndex}`;
				const key2 = `${rowIndex}_${columnIndex - horizontalIndex}`;
				dynamicProgramming[key] = Math.max(
					dynamicProgramming[key] || 0,
					(dynamicProgramming[key1] || 0) + (dynamicProgramming[key2] || 0)
				);
			}

			for (let verticalIndex = 1; verticalIndex <= rowIndex; verticalIndex++) {
				const key1 = `${verticalIndex}_${columnIndex}`;
				const key2 = `${rowIndex - verticalIndex}_${columnIndex}`;
				dynamicProgramming[key] = Math.max(
					dynamicProgramming[key] || 0,
					(dynamicProgramming[key1] || 0) + (dynamicProgramming[key2] || 0)
				);
			}
		}
	}
	const key = `${row}_${colum}`;
	return dynamicProgramming[key];
};

console.log(sellingWood((m = 3), (n = 5), (prices = [ [ 1, 4, 2 ], [ 2, 2, 7 ], [ 2, 1, 3 ] ])));
