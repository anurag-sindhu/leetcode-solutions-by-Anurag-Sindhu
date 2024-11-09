var solveEquation = function(equation) {
	const [ leftPart, rightPart ] = equation.split('=');

	function helper(leftPart) {
		let lastSymbol = '+';
		let tempStore = null;
		let isPartX = false;
		let partX = 0;
		let partInteger = 0;
		for (let index = 0; index < leftPart.length; index++) {
			if (index === 0 && (leftPart[index] === '+' || leftPart[index] === '-')) {
				lastSymbol = leftPart[index];
				continue;
			}
			if (!(leftPart[index] === '+' || leftPart[index] === '-')) {
				if (leftPart[index] === 'x') {
					isPartX = true;
				} else {
					if (tempStore === null) {
						tempStore = ``;
					}
					tempStore += leftPart[index];
					continue;
				}
			}
			if (isPartX) {
				if (lastSymbol === '+') {
					partX = partX + (tempStore === null ? 1 : Number(tempStore));
				} else {
					partX = partX - (tempStore === null ? 1 : Number(tempStore));
				}
			} else {
				if (lastSymbol === '+') {
					partInteger = partInteger + Number(tempStore);
				} else {
					partInteger = partInteger - Number(tempStore);
				}
			}
			tempStore = null;
			isPartX = false;
			lastSymbol = leftPart[index];
		}
		if (tempStore) {
			if (isPartX) {
				if (lastSymbol === '+') {
					partX = partX + ((tempStore && Number(tempStore)) || 1);
				} else {
					partX = partX - ((tempStore && Number(tempStore)) || 1);
				}
			} else {
				if (lastSymbol === '+') {
					partInteger = partInteger + Number(tempStore);
				} else {
					partInteger = partInteger - Number(tempStore);
				}
			}
		}
		return {
			partX: partX || 0,
			partInteger: partInteger || 0
		};
	}

	const leftPartResolution = helper(leftPart);
	const rightPartResolution = helper(rightPart);
	let partXDifference = leftPartResolution.partX - rightPartResolution.partX;
	let partIntegerDifference = rightPartResolution.partInteger - leftPartResolution.partInteger;
	if (partXDifference === 0 && partIntegerDifference === 0) {
		return `Infinite solutions`;
	} else if (partXDifference === 0) {
		return 'No solution';
	}
	let res = null;
	if (partIntegerDifference === 0) {
		return 'x=0';
	}
	if (partIntegerDifference % partXDifference === 0) {
		partIntegerDifference = partIntegerDifference / partXDifference;
		partXDifference = partXDifference / partXDifference;
	}
	if (partXDifference < 0 && partIntegerDifference < 0) {
		res = `${partXDifference === -1 ? '' : partXDifference * -1}x=${partIntegerDifference *
			-1}`;
	} else if (partXDifference < 0) {
		res = `${partXDifference === -1 ? '' : partXDifference * -1}x=${partIntegerDifference *
			-1}`;
	} else {
		res = `${partXDifference === 1 ? '' : partXDifference}x=${partIntegerDifference}`;
	}
	return res;
};

console.log(solveEquation((equation = '1+x=2')) === 'x=1');
console.log(solveEquation((equation = '-x=-1')) === 'x=1');
console.log(solveEquation((equation = '0x=0')) === `Infinite solutions`);
console.log(solveEquation((equation = 'x+5-3+x=6+x-2')) === 'x=2');
console.log(solveEquation((equation = '2x+3x-6x=x+2')) === 'x=-1');
console.log(solveEquation((equation = 'x=3x')) === 'x=0');
console.log(solveEquation((equation = '2x=x')) === 'x=0');
console.log(solveEquation((equation = 'x=x')) === `Infinite solutions`);
