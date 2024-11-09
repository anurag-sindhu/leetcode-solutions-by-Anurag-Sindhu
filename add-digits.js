function addDigits(num) {
	if (num === 0) {
		return 0;
	}
	if (num % 9 === 0) {
		return 9;
	}
	return num % 9;
}

function addDigitsFirst(num) {
	const splittedNum = String(num).split('');
	let sum = 0;
	for (const iterator of splittedNum) {
		sum += Number(iterator);
	}
	if (sum < 10) {
		return sum;
	} else {
		return addDigits1(sum);
	}
}

function getSumOfDigits(digits, sum = 0) {
	if (digits) {
		sum += digits % 10;
		return getSumOfDigits(Math.floor(digits / 10), sum);
	} else {
		return sum;
	}
}

function addDigits1(num) {
	const sumOfDigits = getSumOfDigits(num);
	if (sumOfDigits < 10) {
		return sumOfDigits;
	} else {
		return addDigits1(sumOfDigits);
	}
}
console.log(addDigits(0));
console.log(addDigits(38));
