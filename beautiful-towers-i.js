var maximumSumOfHeights = function (heights) {
    let maxNum = -Infinity;
    let maxNumIndex = null;
    for (let index = 0; index < heights.length; index++) {
        const element = heights[index];
        if (element > maxNum) {
            maxNum = element;
            maxNumIndex = index;
        }
    }

    function findMaxHeight(maxNumIndex) {
        let sum = 0;
        let prevHeight = Infinity;
        for (let index = maxNumIndex; index >= 0; index--) {
            if (prevHeight < heights[index]) {
                sum += prevHeight;
            } else {
                sum += heights[index];
                prevHeight = heights[index];
            }
        }
        prevHeight = Infinity;
        for (let index = maxNumIndex + 1; index < heights.length; index++) {
            if (prevHeight < heights[index]) {
                sum += prevHeight;
            } else {
                prevHeight = heights[index];
                sum += heights[index];
            }
        }
        return sum;
    }
    let maxSum = -Infinity;
    for (let index = 0; index < heights.length; index++) {
        maxSum = Math.max(findMaxHeight(index), maxSum);
    }
    return maxSum;
};

console.log(maximumSumOfHeights((heights = [5, 5, 3, 2, 6])) === 17);
console.log(maximumSumOfHeights((heights = [2, 4, 5, 2, 5, 5, 2, 1, 1, 3])) === 23);
console.log(maximumSumOfHeights((heights = [6, 5, 3, 9, 2, 7])) === 22);
console.log(maximumSumOfHeights((heights = [5, 3, 4, 1, 1])) === 13);
console.log(maximumSumOfHeights((heights = [3, 2, 5, 5, 2, 3])) === 18);
