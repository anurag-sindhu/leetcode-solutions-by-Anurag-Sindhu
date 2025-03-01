const { areTwoArrayEqual } = require('../javascript/compare-two-array.js');

var Robot = function (width, height) {
    this.maxHeight = height - 1;
    this.maxWidth = width - 1;
    this.xAxis = 0;
    this.yAxis = 0;
    this.direction = 'East';
};

Robot.prototype.step = function (num) {
    const start = (num) => {
        if (num <= 0) {
            return;
        }
        if (this.direction == 'East') {
            //x+
            if (this.xAxis + num <= this.maxWidth) {
                this.xAxis += num;
            } else {
                const left = num - (this.maxWidth - this.xAxis);
                this.xAxis = this.maxWidth;
                this.direction = 'North';
                start(left);
            }
        } else if (this.direction == 'West') {
            //x-
            if (this.xAxis - num >= 0) {
                this.xAxis -= num;
            } else {
                const left = num - this.xAxis;
                this.xAxis = 0;
                this.direction = 'South';
                start(left);
            }
        } else if (this.direction == 'North') {
            //y+
            if (this.yAxis + num <= this.maxHeight) {
                this.yAxis += num;
            } else {
                const left = num - (this.maxHeight - this.yAxis);
                this.yAxis = this.maxHeight;
                this.direction = 'West';
                start(left);
            }
        } else if (this.direction == 'South') {
            //y-
            if (this.yAxis - num >= 0) {
                this.yAxis -= num;
            } else {
                const left = num - this.yAxis;
                this.yAxis = 0;
                this.direction = 'East';
                start(left);
            }
        }
    };
    start(num % ((this.maxHeight + 1 + this.maxWidth + 1) * 2));
    return null;
};

Robot.prototype.getPos = function () {
    return [this.xAxis, this.yAxis];
};

Robot.prototype.getDir = function () {
    return this.direction;
};

let obj;
let operations;
let values;
let res;
let output = [null];

output = [null];
operations = [
    'Robot',
    'step',
    'step',
    'step',
    'step',
    'getPos',
    'getDir',
    'step',
    'step',
    'step',
    'step',
    'getPos',
    'getDir',
    'step',
    'step',
    'getPos',
    'getDir',
    'step',
    'step',
    'step',
    'step',
    'step',
    'getPos',
];
values = [
    [4, 5],
    [44],
    [19],
    [8],
    [36],
    [],
    [],
    [17],
    [49],
    [14],
    [40],
    [],
    [],
    [18],
    [7],
    [],
    [],
    [8],
    [5],
    [2],
    [36],
    [22],
    [],
];
obj = new Robot(...values[0]);

for (let index = 1; index < operations.length; index++) {
    output.push(obj[operations[index]](...values[index]));
}

res = areTwoArrayEqual(
    [
        null,
        null,
        null,
        null,
        null,
        [1, 4],
        'West',
        null,
        null,
        null,
        null,
        [3, 0],
        'East',
        null,
        null,
        [0, 0],
        'South',
        null,
        null,
        null,
        null,
        null,
        [3, 0],
    ],
    output,
);
console.log({ res });

output = [null];
operations = [
    'Robot',
    'step',
    'step',
    'getPos',
    'getDir',
    'step',
    'step',
    'step',
    'getPos',
    'getDir',
];
values = [[6, 3], [2], [2], [], [], [2], [1], [4], [], []];
obj = new Robot(...values[0]);

for (let index = 1; index < operations.length; index++) {
    output.push(obj[operations[index]](...values[index]));
}

res = areTwoArrayEqual(
    [null, null, null, [4, 0], 'East', null, null, null, [1, 2], 'West'],
    output,
);
console.log({ res });
