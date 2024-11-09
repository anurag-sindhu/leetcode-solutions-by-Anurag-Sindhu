var digitCount = function(num) {
	const config = {};
	for (let index = 0; index < num.length; index++) {
		if (!config[num[index]]) {
			config[num[index]] = 0;
		}
		config[num[index]] += 1;
	}
	for (let index = 0; index < num.length; index++) {
		const numberOfTimesExpecting = Number(num[index]);
		if (numberOfTimesExpecting) {
			if (config[index] !== numberOfTimesExpecting) {
				return false;
			}
		} else {
			if (config[index] !== undefined && config[index] !== numberOfTimesExpecting) {
				return false;
			}
		}
	}
	return true;
};

console.log(digitCount((num = '1')));
console.log(digitCount((num = '1210')));
console.log(digitCount((num = '030')));
