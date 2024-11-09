const { areTwoArrayEqual } = require('../../js/compare-two-array.js');

var MagicDictionary = function() {
	this.dict = {
		isEnd: false,
		words: {}
	};
};

MagicDictionary.prototype.buildDict = function(dictionary) {
	function addToDict(word, dict, index = 0) {
		if (word[index] === undefined) {
			return;
		}

		if (!dict[word[index]]) {
			dict[word[index]] = {};
			dict[word[index]].isEnd = false;
			dict[word[index]].words = {};
		}
		if (word[index + 1] === undefined) {
			dict[word[index]].isEnd = true;
		}
		addToDict(word, dict[word[index]].words, index + 1);
	}
	for (const iterator of dictionary) {
		addToDict(iterator, this.dict.words);
	}
	return null;
};

MagicDictionary.prototype.search = function(searchWord) {
	function isPossible(dict, index = 0, failedCount = 0) {
		if (searchWord[index] === undefined) {
			if (failedCount === 1) {
				if (dict.isEnd === false) {
					return false;
				}
				return true;
			}
			return false;
		}
		if (failedCount > 1) {
			return false;
		}
		for (const key in dict.words) {
			let isBreak = key === searchWord[index] ? 0 : 1;
			const res = isPossible(dict.words[key], index + 1, failedCount + isBreak);
			if (res === true) {
				return true;
			}
		}
		return false;
	}

	const res = isPossible(this.dict);
	return res;
};

let obj;
let operations;
let values;
let res;
let output;

output = [ null ];
operations = [ 'MagicDictionary', 'buildDict', 'search', 'search', 'search', 'search' ];
values = [
	[],
	[ [ 'hello', 'hallo', 'leetcode' ] ],
	[ 'hell' ],
	[ 'hello' ],
	[ 'hhllo' ],
	[ 'leetcoded' ]
];
obj = new MagicDictionary(...values[0]);
for (let index = 1; index < operations.length; index++) {
	output.push(obj[operations[index]](...values[index]));
}
res = areTwoArrayEqual([ null, null, false, true, true, false ], output);
console.log({ res });

output = [ null ];
operations = [
	'MagicDictionary',
	'buildDict',
	'search',
	'search',
	'search',
	'search',
	'search',
	'search',
	'search',
	'search',
	'search'
];
values = [
	[],
	[ [ 'a', 'b', 'ab' ] ],
	[ 'a' ],
	[ 'b' ],
	[ 'c' ],
	[ 'd' ],
	[ 'e' ],
	[ 'f' ],
	[ 'ab' ],
	[ 'ba' ],
	[ 'abc' ]
];
obj = new MagicDictionary(...values[0]);
for (let index = 1; index < operations.length; index++) {
	output.push(obj[operations[index]](...values[index]));
}
res = areTwoArrayEqual(
	[ null, null, true, true, true, true, true, true, false, false, false ],
	output
);
console.log({ res });

output = [ null ];
operations = [ 'MagicDictionary', 'buildDict', 'search', 'search', 'search', 'search' ];
values = [
	[],
	[ [ 'hello', 'hallo', 'leetcode' ] ],
	[ 'hello' ],
	[ 'hhllo' ],
	[ 'hell' ],
	[ 'leetcoded' ]
];
obj = new MagicDictionary(...values[0]);
for (let index = 1; index < operations.length; index++) {
	output.push(obj[operations[index]](...values[index]));
}
res = areTwoArrayEqual([ null, null, true, true, false, false ], output);
console.log({ res });

output = [ null ];
operations = [ 'MagicDictionary', 'buildDict', 'search', 'search', 'search', 'search' ];
values = [ [], [ [ 'hello', 'leetcode' ] ], [ 'hello' ], [ 'hhllo' ], [ 'hell' ], [ 'leetcoded' ] ];
obj = new MagicDictionary(...values[0]);

for (let index = 1; index < operations.length; index++) {
	output.push(obj[operations[index]](...values[index]));
}

res = areTwoArrayEqual([ null, null, false, true, false, false ], output);
console.log({ res });
