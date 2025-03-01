var minOperations = function (grid, x) {
    const arr = [];
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
            arr.push(grid[rowIndex][columnIndex]);
        }
    }
    function isFloat(n) {
        return Number(n) === n && n % 1 !== 0;
    }
    arr.sort((a, b) => a - b);
    const leftToRight = [];
    const rightToLeft = [];
    for (const element of arr) {
        leftToRight.push(element + (leftToRight[leftToRight.length - 1] || 0));
    }
    for (let index = arr.length - 1; index >= 0; index--) {
        rightToLeft.push(arr[index] + (rightToLeft[rightToLeft.length - 1] || 0));
    }
    rightToLeft.reverse();
    let minOperations = Infinity;
    for (let index = 0; index < arr.length; index++) {
        const totalElementOnLeft = index;
        const totalElementOnRight = arr.length - index - 1;
        const totalSumFromLeft = leftToRight[index - 1];
        const totalSumFromRight = rightToLeft[index + 1];
        let temp = 0;
        if (totalElementOnLeft) {
            const tt = Math.abs(totalElementOnLeft * arr[index] - totalSumFromLeft) / x;
            if (isFloat(tt)) {
                return -1;
            }
            temp += tt;
        }
        if (totalElementOnRight) {
            const tt = Math.abs(totalElementOnRight * arr[index] - totalSumFromRight) / x;
            if (isFloat(tt)) {
                return -1;
            }
            temp += Math.abs(totalElementOnRight * arr[index] - totalSumFromRight) / x;
        }
        minOperations = Math.min(minOperations, temp);
    }
    return minOperations;
};

console.log(
    minOperations(
        (grid = [
            [1, 2],
            [1, 2],
        ]),
        (x = 2),
    ) === -1,
);
console.log(
    minOperations(
        (grid = [
            [2, 4],
            [6, 8],
        ]),
        (x = 2),
    ) === 4,
);
console.log(
    minOperations(
        (grid = [
            [1, 5],
            [2, 3],
        ]),
        (x = 1),
    ) === 5,
);
console.log(
    minOperations(
        (grid = [
            [1, 2],
            [3, 4],
        ]),
        (x = 2),
    ) === -1,
);
