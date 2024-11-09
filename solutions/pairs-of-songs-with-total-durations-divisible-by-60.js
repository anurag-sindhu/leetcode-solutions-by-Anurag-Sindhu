var numPairsDivisibleBy60 = function(time) {
	const object = {};
	let count = 0;
	for (const iterator of time) {
		const reminder = iterator % 60;
		const required = (60 - reminder) % 60;
		if (object[required] !== undefined) {
			count += object[required];
		}
		if (object[reminder] === undefined) {
			object[reminder] = 0;
		}
		object[reminder] += 1;
	}
	return count;
};

console.log(numPairsDivisibleBy60((time = [ 60, 60, 60 ])) === 3);
console.log(numPairsDivisibleBy60((time = [ 20, 40, 150, 100, 30, 40 ])) === 4);
console.log(numPairsDivisibleBy60((time = [ 30, 30, 30, 30, 20, 150, 100, 30, 40 ])) === 17);
console.log(numPairsDivisibleBy60((time = [ 30, 20, 150, 100, 40 ])) === 3);
