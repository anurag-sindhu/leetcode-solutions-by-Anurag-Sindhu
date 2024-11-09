var maxSatisfied = function(customers, grumpy, minutes) {
	let fromInitIndex = 0;
	let toInitIndex = minutes - 1;
	let withOutGrumpyInitSum = customers.slice(0, minutes).reduce((acc, current) => current + acc);
	let withGrumpyInitSum = customers
		.slice(0, minutes)
		.reduce((acc, current, index) => (grumpy[index] ? acc : current + acc), 0);
	let maxDifference = withOutGrumpyInitSum - withGrumpyInitSum;

	for (let index = minutes; index < customers.length; index++) {
		withOutGrumpyInitSum += customers[index] - customers[index - minutes];
		if (!grumpy[index]) {
			withGrumpyInitSum = withGrumpyInitSum + customers[index];
		}
		if (!grumpy[index - minutes]) {
			withGrumpyInitSum = withGrumpyInitSum - customers[index - minutes];
		}
		if (maxDifference < withOutGrumpyInitSum - withGrumpyInitSum) {
			maxDifference = withOutGrumpyInitSum - withGrumpyInitSum;
			fromInitIndex = index - minutes + 1;
			toInitIndex = index;
		}
	}

	let sum = 0;
	for (let index = 0; index < customers.length; index++) {
		if (!grumpy[index]) {
			sum += customers[index];
		} else if (index >= fromInitIndex && index <= toInitIndex) {
			sum += customers[index];
		}
	}
	return sum;
};

console.log(
	maxSatisfied((customers = [ 4, 10, 10 ]), (grumpy = [ 1, 1, 0 ]), (minutes = 2)) === 24
);

console.log(
	maxSatisfied(
		(customers = [ 1, 0, 1, 2, 1, 1, 7, 5 ]),
		(grumpy = [ 0, 1, 0, 1, 0, 1, 0, 1 ]),
		(minutes = 3)
	) === 16
);

console.log(maxSatisfied((customers = [ 1 ]), (grumpy = [ 0 ]), (minutes = 1)) === 1);
