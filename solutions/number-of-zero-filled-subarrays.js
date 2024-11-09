var zeroFilledSubarray = function(nums) {
	let out = 0;
	let tempOut = 0;
	for (let index = 0; index < nums.length; index++) {
		if (nums[index] === 0) {
			tempOut++;
		} else {
			if (tempOut) {
				const n = tempOut * (tempOut + 1) / 2;
				out += n;
			}
			tempOut = 0;
		}
	}
	if (tempOut) {
		const n = tempOut * (tempOut + 1) / 2;
		out += n;
	}
	return out;
};

console.groupEnd(zeroFilledSubarray((nums = [ 1, 3, 0, 0, 2, 0, 0, 4 ])));
console.groupEnd(zeroFilledSubarray((nums = [ 0, 0, 0, 2, 0, 0 ])));
console.groupEnd(zeroFilledSubarray((nums = [ 2, 10, 2019 ])));
