var calPoints = function(operations) {
	let arr = [];
	let sum = 0;
	for (const iterator of operations) {
		if (iterator === 'C') {
			arr.pop();
		} else if (iterator === 'D') {
			let tempSum = 0;
			const arrLength = arr.length;
			if (arr[arrLength - 1] !== undefined) {
				tempSum = arr[arrLength - 1];
			}
			arr.push(tempSum * 2);
		} else if (iterator === '+') {
			let tempSum = 0;
			const arrLength = arr.length;
			if (arr[arrLength - 1] !== undefined) {
				tempSum += arr[arrLength - 1];
				if (arr[arrLength - 2] !== undefined) {
					tempSum += arr[arrLength - 2];
				}
			}
			arr.push(tempSum);
		} else {
			arr.push(Number(iterator));
		}
	}
	for (const iterator of arr) {
		sum += iterator;
	}
	return sum;
};

console.log(calPoints((ops = [ '5', '2', 'C', 'D', '+' ])));
console.log(calPoints((ops = [ '5', '-2', '4', 'C', 'D', '9', '+', '+' ])));
console.log(calPoints((ops = [ '1', 'C' ])));
