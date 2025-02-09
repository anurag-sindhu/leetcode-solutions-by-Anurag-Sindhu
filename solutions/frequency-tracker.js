const { areTwoArrayEqual } = require('../javascript/compare-two-array');

var FrequencyTracker = function () {
    this.mapping = {};
    this.reverseMapping = {};
};

FrequencyTracker.prototype.add = function (number) {
    let frequency = 0;
    if (this.mapping[number]) {
        if (this.reverseMapping[this.mapping[number]] === 1) {
            this.reverseMapping[this.mapping[number]] = 0;
        } else {
            this.reverseMapping[this.mapping[number]] -= 1;
        }
        frequency = this.mapping[number] + 1;
        this.mapping[number] = frequency;
    } else {
        frequency = 1;
        this.mapping[number] = frequency;
    }
    if (this.reverseMapping[frequency]) {
        this.reverseMapping[frequency] += 1;
    } else {
        this.reverseMapping[frequency] = 1;
    }
    return null;
};

FrequencyTracker.prototype.deleteOne = function (number) {
    this.reverseMapping[this.mapping[number]] -= 1;
    this.mapping[number] -= 1;
    return null;
};

FrequencyTracker.prototype.hasFrequency = function (frequency) {
    if (this.reverseMapping[frequency]) {
        return true;
    }
    return false;
};

let obj;
let operations;
let values;
let res;
let output = [null];

output = [null];
operations = ['FrequencyTracker', 'add', 'deleteOne', 'hasFrequency'];

values = [[], [1], [1], [1]];

obj = new FrequencyTracker(...values[0]);

for (let index = 1; index < operations.length; index++) {
    output.push(obj[operations[index]](...values[index]));
}

res = areTwoArrayEqual([null, null, null, true], output);

output = [null];
operations = ['FrequencyTracker', 'add', 'add', 'hasFrequency'];

values = [[], [3], [3], [2]];

obj = new FrequencyTracker(...values[0]);

for (let index = 1; index < operations.length; index++) {
    output.push(obj[operations[index]](...values[index]));
}

res = areTwoArrayEqual([null, null, null, true], output);
console.log({ res });
