const { areTwoArrayEqual } = require('../../js/compare-two-array.js');

var findLongestChain = function(pairs) {
	const dp = {};
	const config = (function() {
		const config = {};
		for (const [ from, to ] of pairs) {
			if (!config[from]) {
				config[from] = {};
			}
			config[from][to] = true;
		}
		return config;
	})();
	let tempStore = null;
	let temp = 0;
	function explore(fromKey, path = 0) {
		if (dp[fromKey] !== undefined) {
			return dp[fromKey];
		}
		for (const key in config) {
			if (Number(fromKey) < Number(key)) {
				for (const keyChild in config[key]) {
					dp[keyChild] = Math.max(explore(keyChild, path + 1), dp[keyChild] || -Infinity);
					console.log('object');
				}
			}
		}
		if (tempStore === null) {
			tempStore = path;
		}
		return path;
	}
	for (const key in config) {
		for (const keyChild in config[key]) {
			temp = 0;
			tempStore = null;
			const resp = explore(keyChild);
			console.log(resp);
		}
	}
	return;
};

console.log(
	findLongestChain([
		[ 7, 9 ],
		[ 4, 5 ],
		[ 7, 9 ],
		[ -7, -1 ],
		[ 0, 10 ],
		[ 3, 10 ],
		[ 3, 6 ],
		[ 2, 3 ]
	]) === 4
);
console.log(
	findLongestChain([
		[ -10, -8 ],
		[ 8, 9 ],
		[ -5, 0 ],
		[ 6, 10 ],
		[ -6, -4 ],
		[ 1, 7 ],
		[ 9, 10 ],
		[ -4, 7 ]
	]) === 4
);

console.log(findLongestChain((pairs = [ [ 1, 2 ], [ 2, 3 ], [ 3, 4 ] ])) === 2);
console.log(findLongestChain((pairs = [ [ 1, 2 ], [ 7, 8 ], [ 4, 5 ] ])) === 3);
