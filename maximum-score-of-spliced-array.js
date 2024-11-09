var maximumsSplicedArray = function(nums1, nums2) {
	const sumNums1 = nums1.reduce((acc, currentElement) => currentElement + acc);
	const sumNums2 = nums2.reduce((acc, currentElement) => currentElement + acc);
	let maxSum = 0;
	let tempStoreNums1 = 0;
	let tempStoreNums2 = 0;
	for (let index = 0; index < nums1.length; index++) {
		tempStoreNums1 += nums1[index];
		tempStoreNums2 += nums2[index];
		const difference = tempStoreNums2 - tempStoreNums1;
		if (difference < 0) {
			tempStoreNums2 = 0;
			tempStoreNums1 = 0;
		}
		if (maxSum < difference) {
			maxSum = difference;
		}
	}

	const maxSumOne = sumNums1 + maxSum;

	tempStoreNums1 = 0;
	tempStoreNums2 = 0;
	maxSum = 0;
	for (let index = 0; index < nums1.length; index++) {
		tempStoreNums1 += nums1[index];
		tempStoreNums2 += nums2[index];
		const difference = tempStoreNums1 - tempStoreNums2;
		if (difference < 0) {
			tempStoreNums2 = 0;
			tempStoreNums1 = 0;
		}
		if (maxSum < difference) {
			maxSum = difference;
		}
	}
	const maxSumTwo = sumNums2 + maxSum;
	return Math.max(maxSumTwo, maxSumOne);
};

console.log(
	maximumsSplicedArray(
		[ 28, 34, 38, 14, 30, 31, 23, 7, 28, 3 ],
		[ 42, 35, 7, 6, 24, 30, 14, 21, 20, 34 ]
	) === 288
);
console.log(maximumsSplicedArray((nums1 = [ 60, 60, 60 ]), (nums2 = [ 10, 90, 10 ])) === 210);

console.log(maximumsSplicedArray((nums1 = [ 7, 11, 13 ]), (nums2 = [ 1, 1, 1 ])) === 31);

console.log(
	maximumsSplicedArray((nums1 = [ 20, 40, 20, 70, 30 ]), (nums2 = [ 50, 20, 50, 40, 20 ])) === 220
);
