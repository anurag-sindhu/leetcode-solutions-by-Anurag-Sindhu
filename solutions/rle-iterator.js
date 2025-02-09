const { areTwoArrayEqual } = require('../javascript/compare-two-array.js');

var RLEIterator = function (encoding) {
    this.currentIndex = -1;
    this.arr = (function () {
        const arr = [];
        for (let index = 0; index < encoding.length; index += 2) {
            let time = encoding[index];
            const element = encoding[index + 1];
            if (time) {
                arr.push(time);
                arr.push(element);
            }
        }
        return arr;
    })();
    return null;
};

RLEIterator.prototype.next = function (n) {
    this.currentIndex += n;
    let tempIndex = -1;
    for (let index = 0; index < this.arr.length; index += 2) {
        tempIndex += this.arr[index];
        if (tempIndex >= this.currentIndex) {
            return this.arr[index + 1] != undefined ? this.arr[index + 1] : -1;
        }
    }
    return -1;
};

let obj;
let operations;
let values;
let res;
let output = [null];

output = [null];
operations = ['RLEIterator', 'next', 'next', 'next', 'next'];

values = [[[3, 8, 0, 9, 2, 5]], [2], [1], [1], [2]];

obj = new RLEIterator(...values[0]);

for (let index = 1; index < operations.length; index++) {
    output.push(obj[operations[index]](...values[index]));
}

res = areTwoArrayEqual([null, 8, 8, 5, -1], output);
console.log(res);

output = [null];
operations = [
    'RLEIterator',
    'next',
    'next',
    'next',
    'next',
    'next',
    'next',
    'next',
    'next',
    'next',
    'next',
    'next',
    'next',
    'next',
    'next',
    'next',
    'next',
    'next',
    'next',
    'next',
    'next',
];

values = [
    [
        [
            923381016, 843, 898173122, 924, 540599925, 391, 705283400, 275, 811628709, 850,
            895038968, 590, 949764874, 580, 450563107, 660, 996257840, 917, 793325084, 82,
        ],
    ],
    [612783106],
    [486444202],
    [630147341],
    [845077576],
    [243035623],
    [731489221],
    [117134294],
    [220460537],
    [794582972],
    [332536150],
    [815913097],
    [100607521],
    [146358489],
    [697670641],
    [45234068],
    [573866037],
    [519323635],
    [27431940],
    [16279485],
    [203970],
];

obj = new RLEIterator(...values[0]);

for (let index = 1; index < operations.length; index++) {
    output.push(obj[operations[index]](...values[index]));
}

res = areTwoArrayEqual(
    [
        null,
        843,
        924,
        924,
        275,
        275,
        850,
        850,
        590,
        590,
        580,
        660,
        660,
        660,
        917,
        917,
        82,
        82,
        82,
        82,
        82,
    ],
    output,
);
console.log(res);
