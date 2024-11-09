var minIncrements = function(n, cost) {
    const levels = (() => {
        let num = n + 1;
        let count = 0;
        while (num > 1) {
            num = num / 2;
            count++;
        }

        return count;
    })();
    let maxSum = -Infinity;
    let output = 0;
    function findMaxSum(cost, index, sumSoFar, requiredSum) {
        if (maxSum < sumSoFar) {
            maxSum = sumSoFar;
        }
        const leftIndex = index * 2 + 1;
        const rightIndex = index * 2 + 2;
        if (cost[leftIndex] !== undefined) {
            findMaxSum(cost, leftIndex, sumSoFar + cost[leftIndex], requiredSum);
        }
        if (cost[rightIndex] !== undefined) {
            findMaxSum(cost, rightIndex, sumSoFar + cost[rightIndex], requiredSum);
        }
    }

    function reachToLastChild(cost, index, sumSoFar, requiredSum) {
        if (cost[index] === undefined) {
            return 0;
        }
        const leftIndex = index * 2 + 1;
        const rightIndex = index * 2 + 2;
        const currentSum = cost[index];
        const leftSum = reachToLastChild(cost, leftIndex, sumSoFar + currentSum, requiredSum);
        const rightSum = reachToLastChild(cost, rightIndex, sumSoFar + currentSum, requiredSum);
        if (cost[leftIndex] !== cost[rightIndex]) {
            output += Math.abs(cost[leftIndex] - cost[rightIndex]);
        }
        console.log({ leftSum, rightSum });
    }

    findMaxSum(cost, 0, cost[0], 0);
    reachToLastChild(cost, 0, cost[0], maxSum);
    return output;
};

console.log(minIncrements((n = 15), (cost = [1, 5, 2, 2, 3, 3, 1, 1, 5, 2, 2, 3, 3, 1, 1])));
console.log(minIncrements((n = 7), (cost = [1, 5, 2, 2, 3, 3, 1])));
