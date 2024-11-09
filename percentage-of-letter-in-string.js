var percentageLetter = function(s, letter) {
	const config = {};
	for (let index = 0; index < s.length; index++) {
		const element = s[index];
		if (!config[element]) {
			config[element] = 0;
		}
		config[element] += 1;
	}
	if (!config[letter]) {
		return 0;
	}
	return parseInt(config[letter] / s.length * 100);
};

console.log(percentageLetter((s = 'foobar'), (letter = 'o')));
console.log(percentageLetter((s = 'jjjj'), (letter = 'k')));
