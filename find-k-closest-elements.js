const { areTwoArrayEqual } = require('../../js/compare-two-array.js');

var searchInsert = function(nums, target) {
	let lowIndex = 0,
		highIndex = nums.length - 1;

	while (lowIndex <= highIndex) {
		let midIndex = Math.floor((lowIndex + highIndex) / 2);
		let midValue = nums[midIndex];
		if (midValue === target) {
			return midIndex;
		} else if (midValue > target) {
			highIndex = midIndex - 1;
		} else {
			lowIndex = midIndex + 1;
		}
	}
	return lowIndex;
};

function binarySearch(arr, search, index = 0) {
	if (!arr.length) {
		return -1;
	}
	if (arr.length === 1) {
		if (arr[0] !== search) {
			return -1;
		}
		return index;
	}
	const half = Math.floor(arr.length / 2);
	if (arr[half] === search) {
		return index + half;
	} else if (arr[half] > search) {
		return binarySearch(arr.slice(0, half), search, index);
	} else {
		return binarySearch(arr.slice(half), search, index + half);
	}
}
var findClosestElements = function(arr, k, x) {
	let nearestIndex = binarySearch(arr, x);
	if (nearestIndex === -1) {
		nearestIndex = searchInsert(arr, x);
		if (nearestIndex !== 0) {
			const diffAtNearestIndex = Math.abs(arr[nearestIndex] - x);
			const diffAtPriorNearestIndex = Math.abs(arr[nearestIndex - 1] - x);
			if (!(diffAtNearestIndex < diffAtPriorNearestIndex)) {
				nearestIndex = nearestIndex - 1;
			}
		}
	}
	const output = [ arr[nearestIndex] ];
	const outputLeft = [];
	const outputRight = [];
	let leftIndex = nearestIndex - 1;
	let rightIndex = nearestIndex + 1;
	while (outputRight.length + outputLeft.length < k - 1) {
		if (arr[leftIndex] === undefined) {
			outputRight.push(arr[rightIndex++]);
		} else if (arr[rightIndex] === undefined) {
			outputLeft.push(arr[leftIndex--]);
		} else {
			const leftDifference = Math.abs(arr[leftIndex] - x);
			const rightDifference = Math.abs(arr[rightIndex] - x);
			if (leftDifference === rightDifference) {
				outputLeft.push(arr[leftIndex--]);
			} else if (leftDifference > rightDifference) {
				outputRight.push(arr[rightIndex++]);
			} else {
				outputLeft.push(arr[leftIndex--]);
			}
		}
	}
	const finalOutput = [];
	for (let index = outputLeft.length - 1; index >= 0; index--) {
		finalOutput.push(outputLeft[index]);
	}
	finalOutput.push(output[0]);
	for (let index = 0; index < outputRight.length; index++) {
		finalOutput.push(outputRight[index]);
	}
	return finalOutput;
};

console.log(
	areTwoArrayEqual(findClosestElements([ 0, 1, 1, 1, 2, 3, 6, 7, 8, 9 ], 9, 4), [
		0,
		1,
		1,
		1,
		2,
		3,
		6,
		7,
		8
	])
);
console.log(areTwoArrayEqual(findClosestElements([ 1, 1, 1, 10, 10, 10 ], 1, 9), [ 10 ]));
console.log(findClosestElements((arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]), (k = 6), (x = 3)));
console.log(findClosestElements((arr = [ 1, 2, 3, 4, 5 ]), (k = 4), (x = 3)));
console.log(
	areTwoArrayEqual(findClosestElements((arr = [ 1, 2, 4, 5 ]), (k = 3), (x = 3)), [ 1, 2, 4 ])
);
console.log(
	areTwoArrayEqual(findClosestElements((arr = [ 1, 2, 4, 5 ]), (k = 4), (x = 3)), [ 1, 2, 4, 5 ])
);
console.log(findClosestElements((arr = [ 1, 2, 4, 5 ]), (k = 4), (x = 3)));
console.log(findClosestElements((arr = [ 1, 2, 3, 4, 5 ]), (k = 4), (x = -1)));
