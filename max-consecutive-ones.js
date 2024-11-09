var findMaxConsecutiveOnes = function(array) {
	let count = 0;
	let tempCount = 0;
	for (let index = 0; index < array.length; index++) {
		if (array[index] === 1) {
			tempCount++;
		} else {
			if (count < tempCount) {
				count = tempCount;
			}
			tempCount = 0;
		}
	}
	if (count < tempCount) {
		count = tempCount;
	}
	return count;
};

console.log(findMaxConsecutiveOnes((nums = [ 1, 1, 0, 1, 1, 1 ])));
console.log(findMaxConsecutiveOnes((nums = [ 1, 0, 1, 1, 0, 1 ])));
