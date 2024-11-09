var maxAbsValExpr = function(arr1, arr2) {
	//|arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|
    // 1-4 + -1-6 + 0-3
    // -5-10 + 3-0
	let minIndexOfTempArr1 = null;
	let maxIndexOfTempArr1 = null;
	let minIndexOfTempArr2 = null;
	let maxIndexOfTempArr2 = null;
	const tempArr1 = [];
	const tempArr2 = [];
	for (let index = 0; index < arr1.length; index++) {
		tempArr1[arr1[index]] = index;
	}
	for (let index = 0; index < arr2.length; index++) {
		tempArr2[arr2[index]] = index;
	}
	return { tempArr1, tempArr2 };
};

console.log(maxAbsValExpr((arr1 = [ 1, 2, 3, 4 ]), (arr2 = [ -1, 4, 5, 6 ])));
console.log(maxAbsValExpr((arr1 = [ 1, -2, -5, 0, 10 ]), (arr2 = [ 0, -2, -1, -7, -4 ])));
