function findThreeGreaterElement(arr) {
	if (!arr.length) {
		return [];
	}
	if (arr.length === 1) {
		return [ arr[0] ];
	}
	if (arr.length === 2) {
		if (arr[0] > arr[1]) {
			return [ arr[0], arr[1] ];
		}
		return [ arr[1], arr[0] ];
	}
	let first = -Infinity,
		second = -Infinity,
		third = -Infinity;
	for (const iterator of arr) {
		if (first < iterator) {
			if (third < second) {
				third = second;
			}
			if (second < first) {
				second = first;
			}
			first = iterator;
		} else if (second < iterator && first !== second && third !== second) {
			if (third < second) {
				third = second;
			}
			second = iterator;
		} else if (third < iterator && first !== second && third !== second) {
			third = iterator;
		}
	}
	return [ first, second, third ];
}

var maximumProduct = function(nums) {
	if (nums.length === 3) {
		return nums[0] * nums[1] * nums[2];
	}
	const lessThanZeroElements = nums.filter((value) => value < 0);
	const tempResp = findThreeGreaterElement(lessThanZeroElements);
	const greaterThanZeroElements = nums.filter((value) => value > 0);
	findThreeGreaterElement(greaterThanZeroElements);
	const ifZeroPresent = nums.some((value) => value === 0);
	let max = -Infinity;

	if (ifZeroPresent) {
		max = 0;
	}
};
console.log(maximumProduct([ -100, -98, -1, 2, 3, 4 ]) === 39200);
console.log(maximumProduct([ 1, 2, 3 ]));
console.log(maximumProduct([ 1, 2, 3, 4 ]));
console.log(maximumProduct([ -1, -2, -3 ]));
