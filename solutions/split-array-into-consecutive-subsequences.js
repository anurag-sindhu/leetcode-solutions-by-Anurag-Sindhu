var isPossible = function(nums) {
	const firsArray = [];
	let lastElement = null;
	let index = 0;
	for (; index < nums.length; index++) {
		if (lastElement === null) {
			lastElement = nums[index];
			firsArray.push(nums[index]);
		} else {
			if (lastElement === nums[index]) {
				continue;
			} else {
				if (lastElement + 1 === nums[index]) {
					firsArray.push(nums[index]);
					lastElement = nums[index];
				}
			}
		}
		if (firsArray.length === 3) {
			index++;
			break;
		}
	}
	lastElement = null;
	const secondArray = [];
	for (; index < nums.length; index++) {
		if (lastElement === null) {
			lastElement = nums[index];
			secondArray.push(nums[index]);
		} else {
			if (lastElement === nums[index]) {
				continue;
			} else {
				if (lastElement + 1 === nums[index]) {
					secondArray.push(nums[index]);
					lastElement = nums[index];
				}
			}
		}
		if (secondArray.length === 3) {
			return true;
		}
	}
	return false;
};

console.log(isPossible((nums = [ 1, 2, 3 ])));
console.log(isPossible((nums = [ 1, 2, 3, 3, 4, 5 ])));
console.log(isPossible((nums = [ 1, 2, 3, 3, 4, 4, 5, 5 ])));
console.log(isPossible((nums = [ 1, 2, 3, 4, 4, 5 ])));
