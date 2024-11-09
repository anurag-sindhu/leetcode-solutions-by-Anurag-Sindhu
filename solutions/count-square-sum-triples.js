var countTriples = function (n) {
    const squares = {};

    for (let index = 1; index <= n; ++index) {
        squares[index * index] = true;
    }

    let res = 0;

    for (let index = 1; index <= n; ++index) {
        for (let secondaryIndex = index; secondaryIndex <= n * n; ++secondaryIndex) {
            if (squares[index * index + secondaryIndex * secondaryIndex]) {
                res += 2;
            }
        }
    }

    return res;
};

var countTriples1 = function (n) {
    let count = 0;
    const store = {};
    for (let index = 1; index <= n; ++index) {
        store[index * index] = true;
    }

    for (let index = 1; index <= n; index++) {
        for (let secondaryIndex = index; secondaryIndex <= n * n; ++secondaryIndex) {
            if (store[index * index + secondaryIndex * secondaryIndex]) {
                count += 1;
            }
        }
    }
    return count;
};

console.log(countTriples((n = 25)) === 16);
console.log(countTriples((n = 5)) === 2);
console.log(countTriples((n = 10)) === 4);
