var subarraysWithKDistinct = function(array, k) {
	let firstIndex = 0;
	let count = 0;
	const tempObject = {};
	for (let index = 0; index < array.length; index++) {
		if (!tempObject[array[index]]) {
			const totalKeysSoFar = Object.keys(tempObject).length;
			if (totalKeysSoFar === k) {
				count++;
			} else if (totalKeysSoFar > k) {
				while (Object.keys(tempObject).length > k) {
					const firstIndexStore = firstIndex;
					delete tempObject[array[firstIndexStore]][firstIndexStore];
					firstIndex++;
					if (Object.keys(tempObject[array[firstIndexStore]]).length === 0) {
						delete tempObject[array[firstIndexStore]];
					}
					console.log('object');
				}
				count++;
			}
			tempObject[array[index]] = {};
		}
		tempObject[array[index]][index] = {
			index: true
		};
	}
	return count;
};

console.log(subarraysWithKDistinct((nums = [ 1, 2, 1, 2, 3 ]), (k = 2)));
console.log(subarraysWithKDistinct((nums = [ 1, 2, 1, 3, 4 ]), (k = 3)));
