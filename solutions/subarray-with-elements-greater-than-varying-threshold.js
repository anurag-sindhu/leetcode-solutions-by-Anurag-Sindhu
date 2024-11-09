var validSubarraySize = function(nums, threshold) {
	const monotonousIncreasingArray = [];
	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		if (!monotonousIncreasingArray.length) {
			monotonousIncreasingArray.push(element);
		} else {
			let hasBroken = false;
			let lastElement = monotonousIncreasingArray[monotonousIncreasingArray.length - 1];
			while (lastElement < element) {
				monotonousIncreasingArray.pop();
				lastElement = monotonousIncreasingArray[monotonousIncreasingArray.length - 1];
				if (!monotonousIncreasingArray.length) {
					monotonousIncreasingArray.push(element);
					hasBroken = true;
					break;
				}
			}
			if (!hasBroken) {
				monotonousIncreasingArray.push(element);
			}
		}
	}
	const monotonousDecreasingArray = [];
	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		if (!monotonousDecreasingArray.length) {
			monotonousDecreasingArray.push(element);
		} else {
			let hasBroken = false;
			let lastElement = monotonousDecreasingArray[monotonousDecreasingArray.length - 1];
			while (lastElement < element) {
				monotonousDecreasingArray.pop();
				lastElement = monotonousDecreasingArray[monotonousDecreasingArray.length - 1];
				if (!monotonousDecreasingArray.length) {
					monotonousDecreasingArray.push(element);
					hasBroken = true;
					break;
				}
			}
			if (!hasBroken) {
				monotonousDecreasingArray.push(element);
			}
		}
	}
	return monotonousIncreasingArray;
};
console.log(validSubarraySize((nums = [ 8, 5, 6, 5, 6, 5, 4, 8 ]), (threshold = 6)));
console.log(validSubarraySize((nums = [ 1, 3, 4, 3, 1 ]), (threshold = 6)));
// 6
console.log(validSubarraySize((nums = [ 6, 5, 6, 5, 8 ]), (threshold = 7)));
