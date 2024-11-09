var majorityElement = function(array) {
	let candidate = null;
	let count = 0;
	for (let index = 0; index < array.length; index++) {
		if (count === 0) {
			candidate = array[index];
			count++;
		} else {
			if (candidate !== array[index]) {
				count--;
			} else {
				count++;
			}
		}
	}
	return candidate;
};

console.log(majorityElement([ 3, 1, 1, 3, 2, 3, 3, 3, 4, 3, 1 ]));
console.log(majorityElement([ 2, 2, 1, 1, 1, 2, 2 ]));
console.log(majorityElement([ 3, 2, 3 ]));
