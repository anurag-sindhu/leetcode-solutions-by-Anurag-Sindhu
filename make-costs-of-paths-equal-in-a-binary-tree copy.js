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
        const leftIndex = index * 2 + 1;
        const rightIndex = index * 2 + 2;
        if (cost[leftIndex] !== undefined) {
            const currentSum = cost[leftIndex];
            const temp = reachToLastChild(cost, leftIndex, sumSoFar + currentSum, requiredSum);
            const leftChildSum = cost[leftIndex * 2 + 1];
            const rightChildSum = cost[leftIndex * 2 + 2];
            if (leftChildSum !== undefined) {
                const leftLeafSum = sumSoFar + currentSum + leftChildSum;
                const rightLeafSum = sumSoFar + currentSum + rightChildSum;
                if (leftLeafSum !== rightLeafSum) {
                    const difference = Math.abs(leftLeafSum - rightLeafSum);
                    if (leftLeafSum > rightLeafSum) {
                        cost[leftIndex * 2 + 2] = cost[leftIndex * 2 + 2] + difference;
                    } else {
                        cost[leftIndex * 2 + 1] = cost[leftIndex * 2 + 1] + difference;
                    }
                } else {
                    console.log('object');
                }
                console.log({ sumSoFar });
            }
        }
        if (cost[rightIndex] !== undefined) {
            const currentSum = cost[rightIndex];
            const temp = reachToLastChild(cost, rightIndex, sumSoFar + currentSum, requiredSum);
            const leftChildSum = cost[rightIndex * 2 + 1];
            const rightChildSum = cost[rightIndex * 2 + 2];

            if (leftChildSum !== undefined) {
                const leftLeafSum = sumSoFar + currentSum + leftChildSum;
                const rightLeafSum = sumSoFar + currentSum + rightChildSum;
                if (leftLeafSum !== rightLeafSum) {
                    const difference = Math.abs(leftLeafSum - rightLeafSum);
                    if (leftLeafSum > rightLeafSum) {
                        cost[rightIndex * 2 + 2] = cost[rightIndex * 2 + 2] + difference;
                    } else {
                        cost[rightIndex * 2 + 1] = cost[rightIndex * 2 + 1] + difference;
                    }
                } else {
                    console.log('object');
                }
                console.log({ sumSoFar });
            }
        }
    }

    findMaxSum(cost, 0, cost[0], 0);
    reachToLastChild(cost, 0, cost[0], maxSum);
    return levels;
};

console.log(minIncrements((n = 15), (cost = [1, 5, 2, 2, 3, 3, 1, 1, 5, 2, 2, 3, 3, 1, 1])));
console.log(minIncrements((n = 7), (cost = [1, 5, 2, 2, 3, 3, 1])));
