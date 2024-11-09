var removeDuplicates = function(s, k) {
	const consecutiveWordsRecord = (function() {
		let output = [];
		let lastWord = null;
		for (let index = 0; index < s.length; index++) {
			if (lastWord === null) {
				output.push(1);
			} else {
				if (lastWord === s[index]) {
					output.push(output[index - 1] + 1);
				} else {
					output.push(1);
				}
			}
			lastWord = s[index];
		}
		return output;
	})();
	let mainPointer = null;
	let followingPointer = null;
	const wordStack = [ s[0] ];
	const wordFrequencyStack = [ 1 ];
	for (let index = 1; index < s.length; index++) {
		const lastWordFromStack = wordStack[wordStack.length - 1];
		const lastWordFrequencyFromStack = wordFrequencyStack[wordFrequencyStack.length - 1];
		const currentWord = s[index];
		if (lastWordFromStack === currentWord) {
			wordStack.push(currentWord);
			wordFrequencyStack.push(lastWordFrequencyFromStack + 1);
		} else {
			wordStack.push(currentWord);
			wordFrequencyStack.push(1);
		}
	}
	for (let index = 0; index < s.length; index++) {
		if (s[mainPointer] === s[index]) {
			followingPointer = mainPointer;
			const tempSum = wordFrequencyStack[followingPointer] + 1;
			if (tempSum !== wordFrequencyStack[index]) {
				wordFrequencyStack[index] = tempSum;
			}
		} else {
			followingPointer = null;
		}
		mainPointer = index;
		if (followingPointer !== null) {
			if (
				s[mainPointer] === s[followingPointer] &&
				k === consecutiveWordsRecord[followingPointer] + 1
			) {
				mainPointer = index - (k - 1) - 1;
			}
		}
	}
	return;
};

console.log(removeDuplicates((s = 'edddedddeddbbcccbdaa'), (k = 3)));
console.log(removeDuplicates((s = 'aa'), (k = 3)));
console.log(removeDuplicates((s = 'abcd'), (k = 2)));
console.log(removeDuplicates((s = 'deebdddbcccbdaa'), (k = 3)));
console.log(removeDuplicates((s = 'deeedbbcccbdaa'), (k = 3)));
console.log(removeDuplicates((s = 'pbbcggttciiippooaais'), (k = 2)));
