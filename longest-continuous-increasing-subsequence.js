var findLengthOfLCIS = function(nums) {
	let len = 0;
	let tempLen = 0;
	for (let index = 0; index < nums.length; index++) {
		if (index === 0) {
			tempLen = 1;
		} else if (nums[index - 1] < nums[index]) {
			tempLen++;
		} else {
			if (len < tempLen) {
				len = tempLen;
			}
			tempLen = 1;
		}
	}
	if (len < tempLen) {
		len = tempLen;
	}
	return len;
};

console.log(findLengthOfLCIS((nums = [ 1, 3, 5, 7 ])) === 4);
console.log(findLengthOfLCIS((nums = [ 1, 3, 5, 4, 7 ]))===3);
console.log(findLengthOfLCIS((nums = [ 2, 2, 2, 2, 2 ]))===1);
