var canThreePartsEqualSum = function(arr) {
	const totalSum = arr.reduce((acc, cur) => acc + cur);
	if (totalSum % 3 !== 0) {
		return false;
	}
	const sum = totalSum / 3;
	let tempSum = 0;
	let howManyArrayFound = 0;
	for (let index = 0; index < arr.length; index++) {
		tempSum += arr[index];
		if (index + 1 !== arr.length && howManyArrayFound == 2) {
			continue;
		}
		if (arr[index] !== undefined && arr[index + 1] === 0) {
			continue;
		}
		if (tempSum === sum) {
			tempSum = 0;
			howManyArrayFound += 1;
			if (index === arr.length - 1 && howManyArrayFound === 3) {
				return true;
			}
		}
	}
	return false;
};

console.log(canThreePartsEqualSum((arr = [ 0, 0, 0, 0 ])) === false);
console.log(canThreePartsEqualSum((arr = [ 1, -1, 1, -1 ])) === false);
console.log(
	canThreePartsEqualSum((arr = [ 10, -7, 13, -14, 30, 16, -3, -16, -27, 27, 19 ])) === true
);
console.log(canThreePartsEqualSum((arr = [ 12, -4, 16, -5, 9, -3, 3, 8, 0 ])) === true);
console.log(canThreePartsEqualSum((arr = [ 3, 3, 6, 5, -2, 2, 5, 1, -9, 4 ])));

console.log(canThreePartsEqualSum((arr = [ 0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1 ])));
console.log(canThreePartsEqualSum((arr = [ 0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1 ])));
