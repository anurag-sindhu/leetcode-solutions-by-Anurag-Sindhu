const { areTwoArrayEqual } = require('../../js/compare-two-array.js');

var MapSum = function() {
	this.dict = {
		sum: 0,
		words: {}
	};
};

MapSum.prototype.insert = function(key, val) {
	function addToDict(word, val, dict, index = 0) {
		if (word[index] === undefined) {
			return;
		}

		if (!dict[word[index]]) {
			dict[word[index]] = {};
			dict[word[index]].sum = 0;
			dict[word[index]].words = {};
		}
		dict[word[index]].sum += val;
		addToDict(word, val, dict[word[index]].words, index + 1);
	}
	addToDict(key, val, this.dict.words);
	return null;
};

MapSum.prototype.sum = function(searchWord) {
	function isPossible(dict, index = 0) {
		if (searchWord[index + 1] === undefined) {
			return (dict.words[searchWord[index]] && dict.words[searchWord[index]].sum) || 0;
		}
		return isPossible(dict.words[searchWord[index]], index + 1);
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

operations = [ 'MapSum', 'insert', 'sum', 'insert', 'insert', 'sum' ];
values = [ [], [ 'apple', 3 ], [ 'ap' ], [ 'app', 2 ], [ 'apple', 2 ], [ 'ap' ] ];
obj = new MapSum(...values[0]);
for (let index = 1; index < operations.length; index++) {
	output.push(obj[operations[index]](...values[index]));
}
res = areTwoArrayEqual([ null, null, 3, null, null, 4 ], output);
console.log({ res });

output = [ null ];

operations = [ 'MapSum', 'insert', 'sum', 'insert', 'sum' ];
values = [ [], [ 'a', 3 ], [ 'ap' ], [ 'b', 2 ], [ 'a' ] ];
obj = new MapSum(...values[0]);
for (let index = 1; index < operations.length; index++) {
	output.push(obj[operations[index]](...values[index]));
}
res = areTwoArrayEqual([ null, null, 0, null, 3 ], output);
console.log({ res });

output = [ null ];
operations = [ 'MapSum', 'insert', 'sum', 'insert', 'sum' ];
values = [ [], [ 'apple', 3 ], [ 'ap' ], [ 'app', 2 ], [ 'ap' ] ];
obj = new MapSum(...values[0]);
for (let index = 1; index < operations.length; index++) {
	output.push(obj[operations[index]](...values[index]));
}
res = areTwoArrayEqual([ null, null, 3, null, 5 ], output);
console.log({ res });
