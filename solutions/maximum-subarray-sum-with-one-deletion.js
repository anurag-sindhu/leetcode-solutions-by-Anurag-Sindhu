var maximumSum = function(arr) {
	let maxSum = arr[0];
	let tempStore = arr[0];
	let tempStoreForNegative = null;
	let shouldAdd = true;

	for (let index = 0; index < arr.length; index++) {
		shouldAdd = true;
		if (arr[index] < 0) {
			if (tempStoreForNegative === null) {
				tempStoreForNegative = arr[index];
				shouldAdd = false;
			} else {
				if (arr[index] <= tempStoreForNegative) {
					tempStore += tempStoreForNegative;
					tempStoreForNegative = arr[index];
					if (tempStoreForNegative < 0) {
						tempStoreForNegative = 0;
						tempStore = 0;
					}
				} else {
					tempStore += arr[index];
					if (tempStore < 0) {
						tempStore = arr[index];
					}
					console.log(arr[index]);
				}
			}
		} else {
			tempStore += arr[index];
		}
		if (maxSum < tempStore) {
			maxSum = tempStore;
		}
	}

	return maxSum;
};

console.log(maximumSum((arr = [ -2, -1, -1, -1 ])));
console.log(maximumSum((arr = [ -1, -1, -1, -1 ])));
console.log(maximumSum((arr = [ 1, -2, -2, 3 ])));
console.log(maximumSum((arr = [ 1, -2, 0, 3 ])));
