var FrontMiddleBackQueue = function () {
    this.frontArr = [];
    this.middleArr = [];
    this.backArr = [];
};

FrontMiddleBackQueue.prototype.pushFront = function (val) {
    this.frontArr.push(val);
};

FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
    this.middleArr.push(val);
};

FrontMiddleBackQueue.prototype.pushBack = function (val) {
    this.backArr.push(val);
};

FrontMiddleBackQueue.prototype.popFront = function () {
    const totalLength = this.frontArr.length + this.middleArr.length + this.backArr.length;
    if (totalLength <= 0) {
        return -1;
    }
    if (this.frontArr.length) {
        return this.frontArr.pop();
    }
    // const arr = [];
    // for (let index = this.frontArr.length - 1; index >= 0; index--) {
    //     arr.push(this.frontArr[index]);
    // }
    // for (let index = this.middleArr.length - 1; index >= 0; index--) {
    //     arr.push(this.middleArr[index]);
    // }
    // for (let index = this.backArr.length - 1; index >= 0; index--) {
    //     arr.push(this.backArr[index]);
    // }
    if (this.middleArr.length) {
        return this.middleArr.pop();
    }

    return this.backArr.shift();
};

FrontMiddleBackQueue.prototype.popMiddle = function () {
    const totalLength = this.frontArr.length + this.middleArr.length + this.backArr.length;
    const indexToBeRemoved = totalLength % 2 == 0 ? totalLength / 2 - 1 : parseInt(totalLength / 2);

    if (totalLength <= 0) {
        return -1;
    }
    if (this.frontArr.length > indexToBeRemoved) {
        return this.middleArr.pop();
    }
    if (this.middleArr.length + this.frontArr.length > indexToBeRemoved) {
        return this.middleArr.pop();
    }
    return this.backArr.shift();
};

FrontMiddleBackQueue.prototype.popBack = function () {
    // const totalLength = this.frontArr.length + this.middleArr.length + this.backArr.length;
    // if (totalLength <= 0) {
    //     return -1;
    // }
    // if (this.backArr.length) {
    //     return this.backArr.pop();
    // } else if (this.middleArr.length) {
    //     return this.middleArr.pop();
    // } else {
    //     return this.frontArr.pop();
    // }
};

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
