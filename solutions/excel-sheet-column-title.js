var convertToTitle = function(columnNumber) {
	let str = '';
	let pow = 1;
	let isFirstTime = true;
	while (columnNumber > 0) {
		if (isFirstTime) {
			const temp = columnNumber % 26;
			if (temp === 0) {
				str += 'Z';
				columnNumber -= 26;
			} else {
				str += String.fromCharCode(64 + temp);
				columnNumber -= temp;
			}
			isFirstTime = false;
		} else {
			const aa = Math.pow(26, pow++);
			const temp = columnNumber / aa;
			const temp2 = temp % 26;
			if (temp2 === 0) {
				columnNumber -= aa * 26;
				str += 'Z';
			} else {
				columnNumber -= aa * temp2;
				str += String.fromCharCode(64 + temp2);
			}
		}
	}
	return str.split('').reverse().join('');
};

console.log(convertToTitle(701) === 'ZY');
console.log(convertToTitle(702) === 'ZZ');
console.log(convertToTitle(2147483647) === 'FXSHRXW');
console.log(convertToTitle(53) === 'BA');
console.log(convertToTitle(52) === 'AZ');
console.log(convertToTitle(78) === 'BZ');
console.log(convertToTitle(79) === 'CA');
console.log(convertToTitle(26) === 'Z');
console.log(convertToTitle(1) === 'A');
