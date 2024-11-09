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
    console.log('object');
};

RangeFreqQuery.prototype.query = function (left, right, value) {
    let count = 0;
    function binarySearchLeft(arr, search, endIndex, startIndex = 0, index = 0) {
        const arrLength = startIndex + endIndex + 1;
        if (arrLength === 1) {
            if (arr[startIndex] === search) {
                return startIndex;
            }
            if (arr[endIndex] < search) {
                return endIndex;
            }
            return startIndex;
        }
        if (arrLength === 2) {
            if (arr[startIndex] === search) {
                return startIndex;
            }
            if (arr[endIndex] === search) {
                return endIndex;
            }
            if (arr[endIndex] < search) {
                return endIndex;
            }
            return startIndex;
        }
        const middleIndex = parseInt((startIndex + endIndex + 1) / 2);
        const middleElement = arr[middleIndex];
        if (middleElement === search) {
            return index + middleIndex;
        } else if (search < middleElement) {
            return binarySearchLeft(arr, search, middleIndex, startIndex, index);
        } else {
            return binarySearchLeft(arr, search, endIndex, middleIndex, index);
        }
    }
    function binarySearchRight(arr, search, endIndex, startIndex = 0, index = 0) {
        const arrLength = startIndex + endIndex + 1;
        if (arrLength === 1) {
            if (arr[startIndex] === search) {
                return startIndex;
            }
            if (arr[startIndex] > search) {
                return startIndex;
            }
            return endIndex;
        }
        if (arrLength === 2) {
            if (arr[startIndex] === search) {
                return startIndex;
            }
            if (arr[endIndex] === search) {
                return endIndex;
            }
            if (arr[endIndex] > search) {
                return startIndex;
            }
            return endIndex;
        }
        const middleIndex = parseInt((startIndex + endIndex + 1) / 2);
        const middleElement = arr[middleIndex];
        if (middleElement === search) {
            return index + middleIndex;
        } else if (search < middleElement) {
            return binarySearchRight(arr, search, middleIndex, startIndex, index);
        } else {
            return binarySearchRight(arr, search, endIndex, middleIndex, index);
        }
    }
    if (!this.obj[value]) {
        return 0;
    }
    const firstElement = this.obj[value][0];
    const lastElement = this.obj[value][this.obj[value].length - 1];
    if (left > lastElement) {
        return 0;
    }
    if (right < firstElement) {
        return 0;
    }
    let leftIndex = binarySearchLeft(this.obj[value], left, this.obj[value].length - 1);
    let rightIndex = binarySearchRight(this.obj[value], right, this.obj[value].length - 1);
    if (leftIndex <= rightIndex) {
        return rightIndex - leftIndex + 1;
    }
    return 0;
};

let obj;
let values;

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

for (let index = 1; index < operations.length; index++) {
    console.log(obj[operations[index]](...values[index]));
    //[null, 0, 3, 1, 1]; expected
}

values = [[[1, 1, 1, 2, 2]], [0, 1, 2], [0, 2, 1], [3, 3, 2], [2, 2, 1]];
operations = ['RangeFreqQuery', 'query', 'query', 'query', 'query'];
obj = new RangeFreqQuery(values[0][0]);

for (let index = 1; index < operations.length; index++) {
    console.log(obj[operations[index]](...values[index]));
    //[null, 0, 3, 1, 1]; expected
}

values = [[[12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56]], [0, 11, 33], [1, 2, 4], [1, 9, 12]];
operations = ['RangeFreqQuery', 'query', 'query', 'query'];
obj = new RangeFreqQuery(values[0][0]);
for (let index = 1; index < operations.length; index++) {
    console.log(obj[operations[index]](...values[index]));
    // [null,1,2]
}

values = [[[2, 2, 1, 2, 2]], [2, 4, 1], [1, 3, 1], [0, 2, 1]];
operations = ['RangeFreqQuery', 'query', 'query', 'query'];
obj = new RangeFreqQuery(values[0][0]);
for (let index = 1; index < operations.length; index++) {
    console.log(obj[operations[index]](...values[index]));
    //[null,1,1,1]
}
