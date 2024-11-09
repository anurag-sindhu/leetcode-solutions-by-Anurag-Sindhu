var prefixesDivBy5 = function(array) {
	let output = [];
	let prodTillHere = 0;
	for (let index = 0; index < array.length; index++) {
		if (index === 53) {
			console.log('object');
		}
		BigInt(1);
		const element = array[index];
		prodTillHere = BigInt(prodTillHere) * BigInt(2) + BigInt(element);
		output.push(BigInt(prodTillHere) % BigInt(5) === BigInt(0));
	}
	return output;
};

console.log(
	prefixesDivBy5(
		(nums = [
			1,
			0,
			1,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			0,
			1,
			0,
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			1,
			1,
			0,
			0,
			1,
			1,
			1
		])
	)
);
console.log(prefixesDivBy5((nums = [ 0, 1, 1 ])));
console.log(prefixesDivBy5((nums = [ 1, 1, 1 ])));
