var largestSumAfterKNegations = function(nums, k) {
	nums.sort(function(a, b) {
		return a - b;
	});
	let indexWhereTransitingFromNegativeEnds = 0;
	let currentIndex = 0;
	let storeIndexWhereTransitingFromNegativeEnds = indexWhereTransitingFromNegativeEnds;
	while (k > 0 && nums[indexWhereTransitingFromNegativeEnds++] < 0) {
		nums[currentIndex++] *= -1;
		k--;
    }
    
	if (k) {
		k = k % 2;
		nums.sort(function(a, b) {
			return a - b;
		});
		if (k) {
			if (
				nums[storeIndexWhereTransitingFromNegativeEnds] <
				nums[storeIndexWhereTransitingFromNegativeEnds + 1]
			) {
				nums[storeIndexWhereTransitingFromNegativeEnds] *= -1;
			} else {
				nums[storeIndexWhereTransitingFromNegativeEnds + 1] *= -1;
			}
		}
	}
	return nums.reduce((accumulator, currentValue) => currentValue + accumulator);
};

console.log(largestSumAfterKNegations((nums = [ -8, 3, -5, -3, -5, -2 ]), (k = 6)) === 22);
console.log(largestSumAfterKNegations((nums = [ -4, -2, -3 ]), (k = 4)) === 5);
console.log(largestSumAfterKNegations((nums = [ -2, 5, 0, 2, -2 ]), (k = 3)) === 11);
console.log(largestSumAfterKNegations((nums = [ 3, -1, 0, 2 ]), (k = 3)) === 6);
console.log(largestSumAfterKNegations((nums = [ 2, -3, -1, 5, -4 ]), (k = 2)) === 13);
console.log(largestSumAfterKNegations((nums = [ 4, 2, 3 ]), (k = 1)) === 5);
