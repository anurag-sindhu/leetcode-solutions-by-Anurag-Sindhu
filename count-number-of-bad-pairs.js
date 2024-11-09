var countBadPairs = function(nums) {
	const differences = nums.map((value, index) => value - index);
	const config = {};
	for (const key of differences) {
		if (config[key] === undefined) {
			config[key] = 0;
		}
		config[key] += 1;
	}
	let goodPairs = 0;
	for (const key in config) {
		let temp = config[key];
		if (temp > 1) {
			goodPairs += temp * (temp - 1) / 2;
		}
	}
	const totalPairs = nums.length * (nums.length - 1) / 2;
	return totalPairs - goodPairs;
};

console.log(countBadPairs((nums = [ 4, 1, 3, 3 ])));
console.log(countBadPairs((nums = [ 1, 2, 3, 4, 5 ])));
