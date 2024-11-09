function maxSubArraySum(nums) {
	let currentSum = 0;
	let finalSum = -Infinity;
	for (let index = 0; index < nums.length; index++) {
		currentSum += nums[index];

		if (finalSum < currentSum) {
			finalSum = currentSum;
		}
		if (currentSum < 0) {
			currentSum = 0;
		}
	}
	return finalSum;
}

function areAllPositive(arr) {
	let sum = 0;
	for (let index = 0; index < arr.length; index++) {
		if (arr[index] < 0) {
			return false;
		}
		sum += arr[index];
	}
	return { status: true, sum };
}

function areAllNegative(arr) {
	for (let index = 0; index < arr.length; index++) {
		if (arr[index] > -1) {
			return false;
		}
	}
	return { state: true };
}

function circularPositiveNumberSum(arr, k) {
	let sumOfAllNumbers = (function() {
		let sum = 0;
		for (const iterator of arr) {
			sum += iterator;
		}
		return sum;
	})();

	const firstIndexOfNegativeNumber = (function() {
		let resp = null;
		for (let index = 0; index < arr.length; index++) {
			if (arr[index] < 0) {
				return index;
			}
		}
		return resp;
	})();

	const lastIndexOfNegativeNumber = (function() {
		let resp = null;
		for (let index = arr.length - 1; index >= 0; index--) {
			if (arr[index] < 0) {
				return index;
			}
		}
		return resp;
	})();
	let endsToEndMaxSum;
	if (firstIndexOfNegativeNumber === lastIndexOfNegativeNumber) {
		endsToEndMaxSum = maxSubArraySum([
			...arr.slice(firstIndexOfNegativeNumber, arr.length),
			...arr.slice(0, firstIndexOfNegativeNumber)
		]);
		return endsToEndMaxSum;
	} else {
		let tempMaxSum;
		if (lastIndexOfNegativeNumber === arr.length - 1 && firstIndexOfNegativeNumber === 0) {
			tempMaxSum = maxSubArraySum(
				arr.slice(firstIndexOfNegativeNumber + 1, lastIndexOfNegativeNumber)
			);
		} else if (lastIndexOfNegativeNumber === arr.length - 1) {
			tempMaxSum = maxSubArraySum(arr.slice(0, firstIndexOfNegativeNumber));
		} else if (firstIndexOfNegativeNumber === 0) {
			tempMaxSum = maxSubArraySum(arr.slice(firstIndexOfNegativeNumber + 1));
		} else {
			tempMaxSum = maxSubArraySum([
				...arr.slice(lastIndexOfNegativeNumber, arr.length),
				...arr.slice(0, firstIndexOfNegativeNumber)
			]);
		}

		if (sumOfAllNumbers > 0) {
			return Math.max((sumOfAllNumbers * k) % (Math.pow(10, 9) * 7), tempMaxSum);
		} else {
			return tempMaxSum;
		}
	}
}

var kConcatenationMaxSum = function(arr, k) {
	if (!arr.length) {
		return 0;
	}
	let sumOfAllPositive = areAllPositive(arr);
	if (sumOfAllPositive.status) {
		return (sumOfAllPositive.sum * k) % (Math.pow(10, 9) * 7);
	} else if (areAllNegative(arr).state) {
		return 0;
	} else {
		return circularPositiveNumberSum(arr, k);
	}
};

console.log(kConcatenationMaxSum([ -5, -2, 0, 0, 3, 9, -2, -5, 4 ], 5)===20);
console.log(kConcatenationMaxSum((arr = [ -7, -1, 5, 2, 3, -7, -6, 1 ]), (k = 6)));
console.log(kConcatenationMaxSum((arr = [ 11, -2, 1, -2, 1 ]), (k = 5)));
console.log(kConcatenationMaxSum((arr = [ 1, -2, 1 ]), (k = 5)));
console.log(kConcatenationMaxSum((arr = [ -11, -2, 1, -2, 1 ]), (k = 5)));
console.log(kConcatenationMaxSum((arr = [ -11, -2, 1, -2, 1, -2 ]), (k = 5)));
console.log(kConcatenationMaxSum((arr = [ 1, -2, 1, -2, 1, -2 ]), (k = 5)));
console.log(kConcatenationMaxSum((arr = [ -1, -2 ]), (k = 7)));
console.log(kConcatenationMaxSum((arr = [ 1, 2 ]), (k = 3)));
