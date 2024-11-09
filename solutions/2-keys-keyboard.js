var minSteps = function(n, totalChar = 1, steps = 0) {
	if (totalChar === n) {
		return steps;
	}
	if (totalChar > n) {
		return Infinity;
	}
	if (n < steps) {
		return Infinity;
	}
	return Math.min(
		minSteps(n, totalChar + totalChar, steps + 1),
		minSteps(n, totalChar, steps + 1)
	);
};

console.log(minSteps(3));
console.log(minSteps(1));
