var replaceWords = function(dictionary, sentence) {
	const config = (function() {
		const config = { isEnd: false, further: {} };
		for (const iterator of dictionary) {
			function insert(word, index = 0, dict = {}) {
				if (!dict[word[index]]) {
					dict[word[index]] = { isEnd: false, further: {} };
				}
				if (word[index + 1] === undefined) {
					dict[word[index]].isEnd = true;
					return;
				}
				insert(word, index + 1, dict[word[index]].further);
			}
			insert(iterator, 0, config.further);
		}
		return config;
	})();
	const splittedSentence = sentence.split(' ');
	function getSuccessor(word, index, config, builtWord = '') {
		let hasFound = null;
		if (config.isEnd === true) {
			return builtWord;
		}
		for (const key in config.further) {
			if (hasFound === null) {
				hasFound = false;
			}
			if (word[index] === key) {
				hasFound = true;
			}
		}
		if (hasFound === null) {
			return builtWord;
		}
		if (!hasFound) {
			return null;
		}
		return getSuccessor(
			word,
			index + 1,
			config.further[word[index]],
			(builtWord += word[index])
		);
	}
	for (let index = 0; index < splittedSentence.length; index++) {
		const successor = getSuccessor(splittedSentence[index], 0, config);
		if (successor !== '' && successor !== null) {
			splittedSentence[index] = successor;
		}
	}

	return splittedSentence.join(' ');
};
console.log(
	replaceWords(
		(dictionary = [ 'cat', 'cbt', 'bat', 'rat' ]),
		(sentence = 'the cattle was rattled by the battery')
	) === 'the cat was rat by the bat'
);
console.log(
	replaceWords([ 'a', 'aa', 'aaa', 'aaaa' ], 'a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa') ===
		'a a a a a a a a bbb baba a'
);

console.log(
	replaceWords((dictionary = [ 'a', 'b', 'c' ]), (sentence = 'aadsfasf absbs bbab cadsfafs')) ===
		'a a b c'
);
