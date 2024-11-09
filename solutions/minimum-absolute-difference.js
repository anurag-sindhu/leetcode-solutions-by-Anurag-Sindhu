var minimumAbsDifference = function(arr) {
	arr.sort((a, b) => a - b);
	const findMinimumDifference = (function() {
		let lowest = Infinity;
		for (let index = 0; index < arr.length - 1; index++) {
			const diff = Math.abs(arr[index + 1] - arr[index]);
			if (lowest > diff) {
				lowest = diff;
			}
		}
		return lowest;
	})();
	const output = [];

	for (let index = 0; index < arr.length; index++) {
		for (let childIndex = index + 1; childIndex < arr.length; childIndex++) {
			const diff = arr[childIndex] - arr[index];
			if (arr[childIndex] - arr[index] === findMinimumDifference) {
				output.push([ arr[index], arr[childIndex] ]);
			} else if (diff > findMinimumDifference) {
				break;
			}
		}
	}

	return output;
};
console.log(minimumAbsDifference((arr = [ 40, 11, 26, 27, -20 ])));
console.log(minimumAbsDifference((arr = [ 4, 2, 1, 3 ])));
console.log(minimumAbsDifference((arr = [ 1, 3, 6, 10, 15 ])));
console.log(minimumAbsDifference((arr = [ 3, 8, -10, 23, 19, -4, -14, 27 ])));
