var totalStepsFirst = function(nums) {
	let max = 0;
	let tempMax = 0;
	let holdPointer = 0;
	let lastFailedNum = null;
	for (let index = 1; index < nums.length; index++) {
		if (!(nums[holdPointer] < nums[index])) {
			if (holdPointer === index - 1) {
				tempMax = 1;
			} else {
				if (nums[index - 1] < nums[index]) {
					if (lastFailedNum !== null) {
						if (lastFailedNum < nums[index]) {
							tempMax++;
						}
					} else {
						tempMax++;
					}
				} else {
					lastFailedNum = nums[index - 1];
				}
			}
		} else {
			if (tempMax > max) {
				max = tempMax;
			}
			lastFailedNum = null;
			holdPointer = index;
			tempMax = 0;
		}
	}
	if (tempMax > max) {
		max = tempMax;
	}
	return max;
};

var totalSteps = function(nums) {
	let max = 0;
	let tempMax = 0;
	let holdPointer = null;
	let lastFailedNum = null;
	for (let index = 0; index < nums.length - 1; index++) {
		if (index === 0) {
			if (!(nums[index] < nums[index + 1])) {
				tempMax += 1;
			}
			holdPointer = null;
		} else {
			if (holdPointer === null) {
				if (!(nums[index] < nums[index + 1])) {
					holdPointer = index;
					tempMax += 1;
				} else {
					console.log('object');
				}
			} else {
				if (!(nums[holdPointer] < nums[index + 1]) && nums[index] < nums[index + 1]) {
					tempMax += 1;
				} else {
					console.log('object');
				}
			}
		}
	}
	if (tempMax > max) {
		max = tempMax;
	}
	return max;
};

console.log(totalSteps((nums = [ 10, 1, 2, 3, 4, 5, 6, 1, 2, 3, 7 ])) === 7);
console.log(totalSteps((nums = [ 7, 14, 4, 14, 13, 2, 6, 13 ])) === 3);
console.log(totalSteps((nums = [ 10, 8, 6 ])) === 1);
console.log(totalSteps((nums = [ 5, 3, 4, 4, 7, 3, 6, 11, 8, 5, 11 ])) === 3);
console.log(totalSteps((nums = [ 10, 1, 2, 3, 4, 5, 6, 1, 2, 3 ])) === 6);
console.log(totalSteps((nums = [ 7, 5, 3, 4, 4, 7, 3, 6, 11, 8, 5, 11 ])));
console.log(totalSteps((nums = [ 4, 5, 7, 7, 13 ])) === 0);
