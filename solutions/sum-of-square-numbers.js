var judgeSquareSum = function(c) {
	let squareRoot = Math.floor(Math.sqrt(c));
	let anotherStart = 0;
	let temp = squareRoot * squareRoot + anotherStart * anotherStart;
	while (anotherStart <= squareRoot) {
		temp = squareRoot * squareRoot + anotherStart * anotherStart;
		if (temp === c) {
			return true;
		}
		if (temp < c) {
			anotherStart++;
		} else {
			squareRoot--;
		}
	}
	return false;
};

console.log(judgeSquareSum(1000));
console.log(judgeSquareSum(5));
console.log(judgeSquareSum(3));
