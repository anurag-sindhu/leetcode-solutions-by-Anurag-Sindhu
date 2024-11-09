var mySqrt = function(x, firstNumber = 1, lastNumber = Math.pow(2, 31) - 1) {
	if (!x) {
		return 0;
	}
	const middle = Math.floor((firstNumber + lastNumber) / 2);
	const prodOfMiddle = middle * middle;

	if (prodOfMiddle === x) {
		return middle;
	} else if (prodOfMiddle > x) {
		if (lastNumber - middle === 1) {
			return firstNumber;
		}
		return mySqrt(x, (firstNumber = 1), middle);
	} else {
		if (lastNumber - middle === 1) {
			return middle;
		}
		return mySqrt(x, middle, lastNumber);
	}
};
