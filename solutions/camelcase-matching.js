function isCapitalLetter(char) {
	return char.toLowerCase() !== char;
}

function splitWordAsCamelCasePattern(word) {
	const output = [];
	let tempWord = ``;
	for (let index = 0; index < word.length; index++) {
		if (isCapitalLetter(word[index])) {
			if (tempWord.length) {
				output.push(tempWord);
			}
			tempWord = ``;
		}
		tempWord += word[index];
	}
	if (tempWord.length) {
		output.push(tempWord);
	}
	return output;
}

var camelMatch = function(queries, pattern) {
	const queriesSplitted = [];
	const patternSplitted = splitWordAsCamelCasePattern(pattern);
	const output = [];
	for (const iterator of queries) {
		queriesSplitted.push(splitWordAsCamelCasePattern(iterator));
	}

	for (const iterator of queriesSplitted) {
		let subOutput = true;
		let patternIndex = 0;
		for (let index = 0; index < iterator.length; index++) {
			const element = iterator[index];
			const patternElement = patternSplitted[patternIndex++];
			let internalPatternIndex = 0;
			for (let elementIndex = 0; elementIndex < element.length; elementIndex++) {
				const subElement = element[elementIndex];
				if (!patternElement) {
					subOutput = false;
					break;
				}
				if (subElement === patternElement[internalPatternIndex]) {
					internalPatternIndex++;
				}
			}
			if (patternElement && patternElement[internalPatternIndex] !== undefined) {
				subOutput = false;
				break;
			}
		}
		if (patternSplitted[patternIndex] !== undefined) {
			subOutput = false;
		}
		output.push(subOutput);
	}
	return output;
};

console.log(
	camelMatch(
		(queries = [
			'uAxaqlzahfialcezsLfj',
			'cAqlzyahaslccezssLfj',
			'AqlezahjarflcezshLfj',
			'AqlzofahaplcejuzsLfj',
			'tAqlzahavslcezsLwzfj',
			'AqlzahalcerrzsLpfonj',
			'AqlzahalceaczdsosLfj',
			'eAqlzbxahalcezelsLfj'
		]),
		(pattern = 'AqlzahalcezsLfj')
	)
);

console.log(
	camelMatch(
		(queries = [ 'FooBar', 'FooBarTest', 'FootBall', 'FrameBuffer', 'ForceFeedBack' ]),
		(pattern = 'FB')
	)
);
console.log(
	camelMatch(
		(queries = [ 'FooBar', 'FooBarTest', 'FootBall', 'FrameBuffer', 'ForceFeedBack' ]),
		(pattern = 'FoBa')
	)
);
//[false,false,true]
console.log(
	camelMatch(
		(queries = [ 'FooBar', 'FooBarTest', 'FootBall', 'FrameBuffer', 'ForceFeedBack' ]),
		(pattern = 'FoBaT')
	)
);

console.log(
	camelMatch(
		(queries = [ 'CompetitiveProgramming', 'CounterPick', 'ControlPanel' ]),
		(pattern = 'CooP')
	)
);
