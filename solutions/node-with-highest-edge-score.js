function findSmallest(arr) {
    let small = Infinity;
    for (const iterator of arr) {
        if (iterator < small) {
            small = iterator;
        }
    }
    return small;
}

var edgeScore = function (edges) {
    let maxSum = -Infinity;
    const outputConfig = {};
    const edgeConfig = {};
    for (let index = 0; index < edges.length; index++) {
        const to = edges[index];
        if (!edgeConfig[to]) {
            edgeConfig[to] = 0;
        }
        const tempOutput = edgeConfig[to] + index;
        if (!outputConfig[tempOutput]) {
            outputConfig[tempOutput] = [];
        }
        outputConfig[tempOutput].push(to);
        if (tempOutput > maxSum) {
            maxSum = tempOutput;
        }
        edgeConfig[to] = tempOutput;
    }
    return Math.min(...outputConfig[maxSum]);
};

console.log(edgeScore((edges = [2, 0, 0, 2])));
console.log(edgeScore((edges = [3, 3, 3, 0])) === 0);
console.log(edgeScore((edges = [1, 0, 0, 0, 0, 7, 7, 5])));
