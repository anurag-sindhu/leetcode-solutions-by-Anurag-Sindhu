var canBeTypedWords = function(text, brokenLetters) {
	const brokenConfig = (function() {
		const config = {};
		for (let index = 0; index < brokenLetters.length; index++) {
			config[brokenLetters[index]] = true;
		}
		return config;
	})();
	const splittedText = text.split(' ');
	let count = 0;
	let hasBroken = false;
	for (const iterator of splittedText) {
		hasBroken = false;
		for (let index = 0; index < iterator.length; index++) {
			if (brokenConfig[iterator[index]]) {
				hasBroken = true;
				break;
			}
		}
		if (!hasBroken) {
			count += 1;
		}
	}
	return count;
};

console.log(canBeTypedWords((text = 'hello world'), (brokenLetters = 'ad')));
console.log(canBeTypedWords((text = 'leet code'), (brokenLetters = 'lt')));
console.log(canBeTypedWords((text = 'leet code'), (brokenLetters = 'e')));
