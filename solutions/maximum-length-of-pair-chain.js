var findLongestChainOld = function (pairs) {
    pairs.sort(([a], [b]) => a - b);
    let count = 1;
    let tempCount = 0;
    let prevEnd = 0;
    for (let index = 0; index < pairs.length; index++) {
        tempCount = 1;
        prevEnd = pairs[index][1];
        for (let childIndex = index + 1; childIndex < pairs.length; childIndex++) {
            if (prevEnd < pairs[childIndex][0]) {
                tempCount += 1;
                prevEnd = pairs[childIndex][1];
            }
        }
        count = Math.max(count, tempCount);
    }
    return count;
};

var findLongestChain = function (pairs) {
    pairs.sort(([a], [b]) => a - b);
    let count = 1;
    let tempCount = 0;
    const arr = [];
    function explore(index, prevStart = null) {
        if (!(index >= 0)) {
            return;
        }
        const start = pairs[index][0];
        const end = pairs[index][1];
        if (end < prevStart) {
            for (let index = prevStart - 1; index > start; index--) {
                arr[index] = arr[index + 1];
            }
            arr[start] = 1;
        }
        arr[start] = (arr[start] || 0) + 1;
        explore(index - 1, start);
    }
    explore(pairs.length - 1);
    return count;
};

console.log(
    findLongestChain([
        [-7, -1],
        [0, 10],
        [2, 3],
        [3, 10],
        [3, 6],
        [4, 5],
        [7, 9],
    ]) === 4,
);
console.log(
    findLongestChain([
        [-10, -8],
        [-6, -4],
        [1, 7],
        [6, 10],
        [8, 9],
        [9, 10],
        [-5, 0],
        [-4, 7],
    ]) === 4,
);

console.log(
    findLongestChain(
        (pairs = [
            [1, 2],
            [2, 3],
            [3, 4],
        ]),
    ) === 2,
);

console.log(
    findLongestChain(
        (pairs = [
            [1, 2],
            [4, 5],
            [7, 8],
        ]),
    ) === 3,
);
