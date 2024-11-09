var maximumSum = function(nums) {
	const digitSumConfig = {};
	let maxNumber = -1;
	for (const iterator of nums) {
		const countDigits = (function() {
			const stringIterator = String(iterator);
			let sum = 0;
			for (let index = 0; index < stringIterator.length; index++) {
				sum += Number(stringIterator[index]);
			}
			return sum;
		})();
		if (!digitSumConfig[countDigits]) {
			digitSumConfig[countDigits] = {
				lastMax: iterator,
				totalNumber: 1,
				maxNumber: iterator
			};
		} else {
			const lastMax = digitSumConfig[countDigits].lastMax;
			if (digitSumConfig[countDigits].totalNumber === 1) {
				digitSumConfig[countDigits].totalNumber = 2;
				digitSumConfig[countDigits].maxNumber += iterator;

				if (lastMax < iterator) {
					digitSumConfig[countDigits].lastMax = iterator;
				}
				if (digitSumConfig[countDigits].maxNumber > maxNumber) {
					maxNumber = digitSumConfig[countDigits].maxNumber;
				}
			} else {
				if (iterator > lastMax) {
					digitSumConfig[countDigits].lastMax = iterator;
					digitSumConfig[countDigits].maxNumber = lastMax + iterator;
				} else {
					const anotherNumber = digitSumConfig[countDigits].maxNumber - lastMax;
					if (anotherNumber < iterator) {
						digitSumConfig[countDigits].maxNumber = lastMax + iterator;
					}
				}
				if (digitSumConfig[countDigits].maxNumber > maxNumber) {
					maxNumber = digitSumConfig[countDigits].maxNumber;
				}
			}
		}
	}
	return maxNumber;
};

console.log(maximumSum((nums = [ 18, 43, 36, 13, 7 ])));
console.log(maximumSum((nums = [ 10, 12, 19, 14 ])));

console.log(
	maximumSum(
		(nums = [
			229,
			398,
			269,
			317,
			420,
			464,
			491,
			218,
			439,
			153,
			482,
			169,
			411,
			93,
			147,
			50,
			347,
			210,
			251,
			366,
			401
		])
	)
);
