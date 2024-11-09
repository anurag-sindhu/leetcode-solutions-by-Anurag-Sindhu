var movesToMakeZigzagEvenIndexed = function(nums) {
	let totalCost = 0;
	let previousValue = null;
	for (let index = 0; index < nums.length; index++) {
		if (index === 0) {
			previousValue = nums[index];
		} else if (index % 2 === 0) {
			const currentValue = nums[index];
			if (!(previousValue < currentValue)) {
				const tempTotalCost = previousValue - currentValue + 1;
				totalCost += tempTotalCost;
				previousValue = currentValue;
			} else {
				previousValue = nums[index];
			}
		} else {
			const currentValue = nums[index];
			if (!(previousValue > currentValue)) {
				const tempTotalCost = currentValue - previousValue + 1;
				totalCost += tempTotalCost;
				previousValue = currentValue - tempTotalCost;
			} else {
				previousValue = nums[index];
			}
		}
	}
	return totalCost;
};

var movesToMakeZigzagOddIndexed = function(nums) {
	let totalCost = 0;
	let previousValue = null;
	for (let index = 0; index < nums.length; index++) {
		if (index === 0) {
			previousValue = nums[index];
		} else if (index % 2 === 0) {
			const currentValue = nums[index];
			if (!(previousValue > currentValue)) {
				const tempTotalCost = currentValue - previousValue + 1;
				totalCost += tempTotalCost;
				previousValue = currentValue - tempTotalCost;
			} else {
				previousValue = nums[index];
			}
		} else {
			const currentValue = nums[index];
			if (!(previousValue < currentValue)) {
				const tempTotalCost = previousValue - currentValue + 1;
				totalCost += tempTotalCost;
				previousValue = currentValue;
			} else {
				previousValue = nums[index];
			}
		}
	}
	return totalCost;
};

var movesToMakeZigzag = function(nums) {
	const fromOdd = movesToMakeZigzagOddIndexed(nums);
	const fromEven = movesToMakeZigzagEvenIndexed(nums);
	const finalResponse = Math.min(fromOdd, fromEven);
	return finalResponse;
};

console.log(movesToMakeZigzag((nums = [ 20, 4, 5, 4 ])) === 0);
console.log(movesToMakeZigzag((nums = [ 10, 20, 5, 4 ])) === 2);
console.log(movesToMakeZigzag((nums = [ 1, 2, 3 ])) === 2);
console.log(movesToMakeZigzag((nums = [ 9, 6, 1, 6, 2 ])) === 4);
