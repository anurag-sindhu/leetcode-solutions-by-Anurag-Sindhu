var maxSumTwoNoOverlapFirst = function(nums, firstLen, secondLen) {
	let initFirstArraySum = nums.slice(0, firstLen).reduce((acc, curr) => curr + acc);
	let maxFirstArray = initFirstArraySum;
	let fromFirstIndex = 0;
	let tillFirstIndex = firstLen - 1;
	for (let index = firstLen; index < nums.length; index++) {
		initFirstArraySum = initFirstArraySum + nums[index] - nums[index - firstLen];
		if (maxFirstArray < initFirstArraySum) {
			fromFirstIndex = index - firstLen + 1;
			tillFirstIndex = index;
			maxFirstArray = initFirstArraySum;
		}
	}
	let initSecondArraySum = 0;
	if (!(0 >= fromFirstIndex && 0 <= tillFirstIndex)) {
		initSecondArraySum = nums.slice(0, secondLen).reduce((acc, curr) => curr + acc);
	}
	let maxSecondArray = initSecondArraySum;
	for (let index = secondLen; index < nums.length; index++) {
		if (index >= fromFirstIndex && index <= tillFirstIndex) {
			const from = fromFirstIndex + firstLen;
			const to = from + secondLen - 1;
			if (nums.length <= from || nums.length <= to) {
				break;
			}
			const slicedArray = nums.slice(from, to + 1);
			initSecondArraySum = slicedArray.reduce((acc, curr) => curr + acc);
			if (maxSecondArray < initSecondArraySum) {
				maxSecondArray = initSecondArraySum;
			}
			index = to;
			continue;
		}

		initSecondArraySum = initSecondArraySum + nums[index] - nums[index - secondLen];
		if (initSecondArraySum < 0) {
			initSecondArraySum = 0;
		}
		if (maxSecondArray < initSecondArraySum) {
			maxSecondArray = initSecondArraySum;
		}
	}
	const resp = maxFirstArray + maxSecondArray;
	return resp;
};

var maxSumTwoNoOverlapSecond = function(nums, firstLen, secondLen) {
	let initSecondArraySum = nums.slice(0, secondLen).reduce((acc, curr) => curr + acc);
	let maxSecondArray = initSecondArraySum;
	let fromSecondIndex = 0;
	let tillSecondIndex = secondLen - 1;
	for (let index = secondLen; index < nums.length; index++) {
		initSecondArraySum = initSecondArraySum + nums[index] - nums[index - secondLen];
		if (maxSecondArray < initSecondArraySum) {
			fromSecondIndex = index - secondLen + 1;
			tillSecondIndex = index;
			maxSecondArray = initSecondArraySum;
		}
	}

	let initFirstArraySum = 0;
	let index = firstLen;
	if (firstLen < fromSecondIndex && firstLen < tillSecondIndex) {
		initFirstArraySum = nums.slice(0, firstLen).reduce((acc, curr) => curr + acc);
	} else {
		const from = tillSecondIndex + 1;
		const to = tillSecondIndex + 1 + firstLen;
		const slicedArray = nums.slice(tillSecondIndex + 1, tillSecondIndex + 1 + firstLen);
		initFirstArraySum = slicedArray.reduce((acc, curr) => curr + acc);
		index = to;
	}
	let maxFirstArray = initFirstArraySum;
	for (; index < nums.length; index++) {
		if (index <= fromSecondIndex && index >= tillSecondIndex) {
			const from = fromSecondIndex + secondLen;
			const to = from + firstLen - 1;
			if (nums.length <= from || nums.length <= to) {
				break;
			}
			const slicedArray = nums.slice(from, to + 1);
			initFirstArraySum = slicedArray.reduce((acc, curr) => curr + acc);
			if (maxFirstArray < initFirstArraySum) {
				maxFirstArray = initFirstArraySum;
			}
			index = to;
			continue;
		}

		initFirstArraySum = initFirstArraySum + nums[index] - nums[index - firstLen];
		if (initFirstArraySum < 0) {
			initFirstArraySum = 0;
		}
		if (maxFirstArray < initFirstArraySum) {
			maxFirstArray = initFirstArraySum;
		}
	}
	const resp = maxFirstArray + maxSecondArray;
	return resp;
};

var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
	return Math.max(
		maxSumTwoNoOverlapFirst(nums, firstLen, secondLen),
		maxSumTwoNoOverlapSecond(nums, firstLen, secondLen)
	);
};

console.log(
	maxSumTwoNoOverlap(
		(nums = [ 8, 20, 6, 2, 20, 17, 6, 3, 20, 8, 12 ]),
		(firstLen = 5),
		(secondLen = 4)
	) === 108
);

console.log(
	maxSumTwoNoOverlap(
		(nums = [ 4, 5, 14, 16, 16, 20, 7, 13, 8, 15 ]),
		(firstLen = 3),
		(secondLen = 5)
	) === 109
);

console.log(maxSumTwoNoOverlap((nums = [ 1, 0, 1 ]), (firstLen = 1), (secondLen = 1)) === 2);
console.log(maxSumTwoNoOverlap((nums = [ 4, 0, 1 ]), (firstLen = 2), (secondLen = 1)) === 5);

console.log(
	maxSumTwoNoOverlap(
		(nums = [ 2, 1, 5, 6, 0, 9, 5, 0, 3, 8 ]),
		(firstLen = 4),
		(secondLen = 3)
	) === 31
);

console.log(
	maxSumTwoNoOverlap((nums = [ 0, 6, 5, 2, 2, 5, 1, 9, 4 ]), (firstLen = 1), (secondLen = 2)) ===
		20
);

console.log(
	maxSumTwoNoOverlap((nums = [ 3, 8, 1, 3, 2, 1, 8, 9, 0 ]), (firstLen = 3), (secondLen = 2)) ===
		29
);

console.log(
	maxSumTwoNoOverlap(
		(nums = [ 3, 8, 1, 3, 2, 1, 8, 9, 0, 2, 1, 2, 1, 2, 1 ]),
		(firstLen = 3),
		(secondLen = 2)
	) === 29
);
