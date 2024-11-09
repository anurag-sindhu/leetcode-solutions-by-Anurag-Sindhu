function findHighest(num) {
	let max = -Infinity;
	let maxIndex = null;
	for (let index = 0; index < num.length; index++) {
		if (max <= Number(num[index])) {
			max = Number(num[index]);
			maxIndex = index;
		}
	}
	return maxIndex;
}

function findIndexOnLeftSide(num, fromNum) {
	for (let index = 0; index < num.length; index++) {
		if (Number(num[index]) < fromNum) {
			return index;
		}
	}
	return null;
}

var maximumSwap = function(num) {
	let pivot = null;
	const strNum = num.toString().split('');
	for (let index = 0; index < strNum.length; index++) {
		if (Number(strNum[index]) < Number(strNum[index + 1])) {
			pivot = index;
			break;
		}
	}
	if (pivot === null) {
		return num;
	}
	const leftSliceArray = strNum.slice(0, pivot + 1);
	const rightSliceArray = strNum.slice(pivot + 1);
	const rightSideIndex = findHighest(rightSliceArray);
	const indexOnLeftSide = findIndexOnLeftSide(leftSliceArray, strNum[inOriginalString]);
	const inOriginalString = 1 + pivot + rightSideIndex;
	//Swap
	const store = strNum[indexOnLeftSide];
	strNum[indexOnLeftSide] = strNum[inOriginalString];
	strNum[inOriginalString] = store;
	return Number(strNum.join(''));
};

console.log(maximumSwap(100) === 100);
console.log(maximumSwap(10909091) === 90909011);
console.log(maximumSwap(1993) === 9913);
console.log(maximumSwap(115) === 511);
console.log(maximumSwap(98368) === 98863);
console.log(maximumSwap(2736) === 7236);
console.log(maximumSwap(9973) === 9973);
