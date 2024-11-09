function getSmallerFrequency(word) {
	let count = 0;
	let smallest = 'z';
	let wordConfig = {};
	for (let index = 0; index < word.length; index++) {
		if (!wordConfig[word[index]]) {
			wordConfig[word[index]] = 0;
		}
		if (word[index] < smallest) {
			smallest = word[index];
		}
		wordConfig[word[index]] += 1;
	}

	return wordConfig[smallest];
}

var numSmallerByFrequency = function(queries, words) {
	const queriesWithFrequency = (function() {
		const arr = [];
		for (const iterator of queries) {
			arr.push(getSmallerFrequency(iterator));
		}
		return arr;
	})();
	const wordsWithFrequency = (function() {
		const arr = [];
		for (const iterator of words) {
			arr.push(getSmallerFrequency(iterator));
		}
		return arr;
	})();
	const bucketsWithFrequency = (function() {
		const arr = new Array(2000).fill(0);
		for (let index = 0; index < wordsWithFrequency.length; index++) {
			arr[wordsWithFrequency[index]] += 1;
		}
		let lastTempFrequency = 0;
		for (let index = arr.length - 1 - 1; index >= 0; index--) {
			if (index === 4) {
				console.log('object');
			}
			const storeFrequency = arr[index];
			arr[index] = lastTempFrequency;
			lastTempFrequency = arr[index] + storeFrequency;
		}
		return arr;
	})();
	const output = [];
	for (const iterator of queriesWithFrequency) {
		output.push(bucketsWithFrequency[iterator]);
	}
	return output;
};
console.log(
	numSmallerByFrequency((queries = [ 'bbb', 'cc' ]), (words = [ 'a', 'aa', 'aaa', 'aaaa' ]))
);
console.log(numSmallerByFrequency((queries = [ 'cbd' ]), (words = [ 'zaaaz' ])));
