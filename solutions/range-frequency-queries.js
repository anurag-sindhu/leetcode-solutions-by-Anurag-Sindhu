const binarySearchMinIndexGreaterThanSearch = (arr, search) => {
    let left = 0,
        right = arr.length - 1,
        ans = null;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] >= search) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};

const binarySearchMinIndexLessThanSearch = (arr, search) => {
    let left = 0,
        right = arr.length - 1,
        ans = null;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] <= search) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
};

var RangeFreqQuery = function (arr) {
    this.arr = arr;
    this.length = arr.length;
    this.obj = {};
    for (let index = 0; index < arr.length; index++) {
        if (!this.obj[arr[index]]) {
            this.obj[arr[index]] = [];
        }
        this.obj[arr[index]].push(index);
    }
    return null;
};

RangeFreqQuery.prototype.query = function (left, right, value) {
    if (this.obj[value] == undefined) {
        return 0;
    }
    const firstElement = binarySearchMinIndexGreaterThanSearch(this.obj[value], left);
    const lastElement = binarySearchMinIndexLessThanSearch(this.obj[value], right);
    if (firstElement == null) {
        return 0;
    }
    if (firstElement > lastElement) {
        return 0;
    }
    if (firstElement == lastElement) {
        if (this.obj[value][firstElement] >= left && this.obj[value][firstElement] <= right) {
            return 1;
        }
        return 0;
    }
    if (lastElement == null) {
        return 0;
    }
    return lastElement - firstElement + 1;
};

let obj;
let values;
let output;

output = [null];
values = [[[2, 2, 1, 2, 2]], [2, 4, 1], [1, 3, 1], [0, 2, 1]];
operations = ['RangeFreqQuery', 'query', 'query', 'query'];
obj = new RangeFreqQuery(values[0][0]);
for (let index = 1; index < operations.length; index++) {
    output.push(obj[operations[index]](...values[index]));
    //[null,1,1,1]
}
console.log({ output });

output = [null];
values = [[[1, 1, 1, 2, 2]], [0, 1, 2], [0, 2, 1], [3, 3, 2], [2, 2, 1]];
operations = ['RangeFreqQuery', 'query', 'query', 'query', 'query'];
obj = new RangeFreqQuery(values[0][0]);

for (let index = 1; index < operations.length; index++) {
    output.push(obj[operations[index]](...values[index]));
}
console.log({ output }); //[null,0,3,1,1]

output = [null];
values = [[[12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56]], [1, 9, 12], [0, 11, 33], [1, 2, 4]];
operations = ['RangeFreqQuery', 'query', 'query', 'query'];
obj = new RangeFreqQuery(values[0][0]);
for (let index = 1; index < operations.length; index++) {
    output.push(obj[operations[index]](...values[index]));
    // [null,1,2,1]
}
console.log({ output });

output = [null];
values = [[[12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56]], [0, 11, 33], [1, 2, 4], [1, 9, 12]];
operations = ['RangeFreqQuery', 'query', 'query', 'query'];
obj = new RangeFreqQuery(values[0][0]);
for (let index = 1; index < operations.length; index++) {
    output.push(obj[operations[index]](...values[index]));
    // [null,2,1,1]
}
console.log({ output });

values = [
    [[8, 5, 4, 2, 5, 4, 5, 8, 6, 2, 3]],
    [5, 6, 2],
    [0, 3, 5],
    [6, 8, 4],
    [2, 8, 3],
    [4, 5, 1],
    [2, 4, 2],
];
operations = ['RangeFreqQuery', 'query', 'query', 'query', 'query', 'query', 'query'];
obj = new RangeFreqQuery(values[0][0]);
output = [null];

for (let index = 1; index < operations.length; index++) {
    if (index == 4) {
        console.log('object');
    }
    output.push(obj[operations[index]](...values[index]));
    //[null,0,1,0,0,0,1]
}
console.log({ output });
