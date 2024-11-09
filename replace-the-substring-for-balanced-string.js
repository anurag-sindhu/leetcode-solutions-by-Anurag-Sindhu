

var balancedString = function(str) {
	const requiredConfig = { Q: true, W: true, E: true, R: true };
	const config = {};
	for (let index = 0; index < str.length; index++) {
		if (!config[str[index]]) {
			config[str[index]] = 0;
		}
		config[str[index]] += 1;
	}
	return config;
};
//1+2+2+1
console.log(balancedString((s = 'QWWWWEERRRRR')));
console.log(balancedString((s = 'QWERRRRR')));
console.log(balancedString((s = 'QWER')));
console.log(balancedString((s = 'QQWE')));
console.log(balancedString((s = 'QQQW')));
