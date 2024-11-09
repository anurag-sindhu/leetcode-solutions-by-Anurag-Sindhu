var decompressRLElist = function(nums) {
	const arr = [];
	for (let index = 0; index < nums.length; index += 2) {
		let frequency = nums[index];
		const value = nums[index + 1];
		while (frequency--) {
			arr.push(value);
		}
	}
	return arr;
};

console.log(decompressRLElist((nums = [ 1, 2, 3, 4 ])));
console.log(decompressRLElist((nums = [ 1, 1, 2, 3 ])));
