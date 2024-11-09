var longestOnes = function(array, k) {
	const arrayWhereZeroFound = [];
	const arrayWhereOneFound = [];
	let max = 0;
	for (let index = 0; index < array.length; index++) {
		if (array[index] === 0) {
			arrayWhereZeroFound.push(index);
		} else if (array[index] === 1) {
			arrayWhereOneFound.push(index);
		}
	}
	let store = undefined;

	let totalConsecutiveOnesSoFar = 0;
	if (arrayWhereZeroFound.length) {
		for (let index = 0; index < arrayWhereZeroFound.length; index++) {
			store = k;
			totalConsecutiveOnesSoFar = 0;
			let previousZeroIndex = arrayWhereZeroFound[index - 1];
			if (!previousZeroIndex && previousZeroIndex !== 0) {
				previousZeroIndex = undefined;
			}
			if (previousZeroIndex !== undefined) {
				totalConsecutiveOnesSoFar += arrayWhereZeroFound[index] - previousZeroIndex - 1;
			} else {
				totalConsecutiveOnesSoFar += arrayWhereZeroFound[index];
			}

			if (store > 0) {
				totalConsecutiveOnesSoFar += 1;
				store--;
			}
			if (totalConsecutiveOnesSoFar > max) {
				max = totalConsecutiveOnesSoFar;
			}
			if (store <= 0) {
				continue;
			}
			let childIndex;
			for (childIndex = index + 1; childIndex < arrayWhereZeroFound.length; childIndex++) {
				if (store > 0) {
					totalConsecutiveOnesSoFar +=
						arrayWhereZeroFound[childIndex] - arrayWhereZeroFound[childIndex - 1];
					store--;
				} else {
					break;
				}
			}
			const totalConsecutiveOnesAfterHere =
				(arrayWhereZeroFound[childIndex] || array.length) -
				arrayWhereZeroFound[childIndex - 1] -
				1;
			const total = totalConsecutiveOnesSoFar + totalConsecutiveOnesAfterHere;
			if (total > max) {
				max = total;
			}
		}
	} else {
		max = array.length;
	}

	function lastConsecutiveOnes() {
		let count = 0;
		for (let index = array.length - 1; index >= 0; index--) {
			if (array[index] === 0) {
				break;
			} else {
				count++;
			}
		}
		return count;
	}

	return Math.max(lastConsecutiveOnes(), max);
};

console.log(longestOnes((nums = [ 1, 1, 1, 0, 0, 0, 1, 1, 1, 1 ]), (k = 0)) === 4);
console.log(longestOnes((nums = [ 0, 0, 0, 1 ]), (k = 4)) === 4);
console.log(longestOnes((nums = [ 0 ]), (k = 3)) === 1);
console.log(longestOnes((nums = [ 0, 0, 1, 1, 1, 0, 0 ]), (k = 0)) === 3);
console.log(longestOnes((nums = [ 1 ]), (k = 3)) === 1);
console.log(
	longestOnes((nums = [ 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1 ]), (k = 3)) ===
		10
);
console.log(longestOnes((nums = [ 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0 ]), (k = 2)) === 6);

console.log(
	longestOnes((nums = [ 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1 ]), (k = 3)) ===
		12
);
