var FrontMiddleBackQueue = function () {
    this.arr = [];
    this.frontStartIndex = null;
    this.middleStartIndex = null;
    this.middleEndIndex = null;
    this.backEndIndex = null;
};

FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
    if (this.middleStartIndex === null) {
        this.middleStartIndex = 2500;
        this.middleEndIndex = 2500;
    } else {
        const totalSize =
            (this.backEndIndex === null ? 0 : this.backEndIndex - 5000) +
            (this.middleStartIndex === null ? 0 : this.middleEndIndex - this.middleStartIndex + 1) +
            (this.frontStartIndex === null ? 0 : this.frontStartIndex * -1);
        if (totalSize % 2 === 0) {
            this.middleStartIndex -= 1;
        } else {
            this.middleEndIndex += 1;
        }
    }
    this.arr[this.middleStartIndex] = val;
};

FrontMiddleBackQueue.prototype.pushFront = function (val) {
    if (this.frontStartIndex === null) {
        this.frontStartIndex = -1;
    } else {
        this.frontStartIndex -= 1;
    }
    this.arr[this.frontStartIndex] = val;
};

FrontMiddleBackQueue.prototype.pushBack = function (val) {
    if (this.backEndIndex === null) {
        this.backEndIndex = 5001;
    } else {
        this.backEndIndex += 1;
    }
    this.arr[this.backEndIndex] = val;
};

FrontMiddleBackQueue.prototype.popFront = function () {
    if (this.frontStartIndex !== null) {
        this.frontStartIndex += 1;
        if (this.frontStartIndex === 0) {
            this.frontStartIndex = null;
        }
    } else if (this.middleStartIndex !== null) {
        const totalSize =
            (this.backEndIndex === null ? 0 : this.backEndIndex - 5000) +
            (this.middleStartIndex === null ? 0 : this.middleEndIndex - this.middleStartIndex + 1) +
            (this.frontStartIndex === null ? 0 : this.frontStartIndex * -1);
        if (totalSize % 2 === 0) {
            this.middleStartIndex += 1;
        } else {
            this.middleEndIndex -= 1;
        }
        if (this.middleStartIndex === 2500 && this.middleStartIndex === 2500) {
        }
    } else if (this.backEndIndex !== null) {
        this.backEndIndex -= 1;
        if (this.backEndIndex === 5000) {
            this.backEndIndex = null;
        }
    }
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {};

let obj;
let res;
let operations;
let values;
let output = [null];

obj = new FrontMiddleBackQueue();
operations = [
    'FrontMiddleBackQueue',
    'pushFront',
    'pushBack',
    'pushMiddle',
    'pushMiddle',
    'popFront',
    'popMiddle',
    'popMiddle',
    'popBack',
    'popFront',
];
values = [[], [1], [2], [3], [4], [], [], [], [], []];

for (let index = 1; index < operations.length; index++) {
    output.push(obj[operations[index]](...values[index]));
}

//[-1,null,null,null,null,1,null,2]
console.log({ output });
