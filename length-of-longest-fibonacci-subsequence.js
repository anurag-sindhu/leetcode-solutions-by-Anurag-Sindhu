var lenLongestFibSubseq = function (arr) {
    let count = 0;
    const config = (function () {
        const config = {};
        for (const iterator of arr) {
            config[iterator] = true;
        }
        return config;
    })();
    for (let parentIndex = 0; parentIndex < arr.length - count; parentIndex++) {
        for (let childIndex = parentIndex + 1; childIndex < arr.length - count + 1; childIndex++) {
            let tempCount = null;
            let parentCount = arr[parentIndex];
            let childCount = arr[childIndex];
            let sum = parentCount + childCount;
            while (config[sum]) {
                if (tempCount === null) {
                    tempCount = 2
                }
                tempCount++;
                parentCount = childCount;
                childCount = sum;
                sum = parentCount + childCount;
            }
            count = Math.max(count, tempCount);
        }
    }
    return count;
};

console.log(lenLongestFibSubseq((arr = [1, 3, 5])) == 0);
console.log(lenLongestFibSubseq((arr = [2, 5, 6, 7, 8, 10, 12, 17, 24, 41, 65])) == 5);
console.log(lenLongestFibSubseq((arr = [7, 17, 24, 41, 65])) == 5);
console.log(lenLongestFibSubseq((arr = [2, 4, 7, 8, 9, 10, 14, 15, 18, 23, 32, 50])) == 5);
console.log(lenLongestFibSubseq((arr = [1, 2, 3, 4, 5, 6, 7, 8])) === 5);
console.log(lenLongestFibSubseq((arr = [1, 3, 7, 11, 12, 14, 18])) === 3);
