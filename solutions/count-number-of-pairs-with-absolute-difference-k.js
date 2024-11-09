function bucketSort(arr) {
    if (arr.length === 0) {
        return arr;
    }

    const min = Math.min(...arr);
    const max = Math.max(...arr);

    const bucketCount = Math.floor(Math.sqrt(arr.length));
    const bucketSize = Math.ceil((max - min + 1) / bucketCount);
    const buckets = Array.from({ length: bucketCount }, () => []);

    arr.forEach((element) => {
        const bucketIndex = Math.floor((element - min) / bucketSize);
        buckets[bucketIndex].push(element);
    });

    const sorted = buckets.reduce((acc, bucket) => {
        bucket.sort((a, b) => a - b);
        return [...acc, ...bucket];
    }, []);

    return sorted;
}

var countKDifference = function (nums, k) {
    let frequencyMapping = {};
    let count = 0;
    for (const iterator of nums) {
        if (!frequencyMapping[iterator]) {
            frequencyMapping[iterator] = 0;
        }
        frequencyMapping[iterator] += 1;
    }
    const sortedNum = bucketSort(Object.keys(frequencyMapping));
    let leftPointer = 0;
    let rightPointer = 1;
    while (leftPointer < nums.length) {
        let leftNum = sortedNum[leftPointer];
        let rightNum = sortedNum[rightPointer];
        const diff = Math.abs(rightNum - leftNum);
        if (diff === k) {
            count += frequencyMapping[leftNum] * frequencyMapping[rightNum];
            leftPointer += 1;
        } else if (diff < k) {
            rightPointer += 1;
        } else {
            leftPointer += 1;
        }
        if (leftPointer >= rightPointer) {
            rightPointer = leftPointer + 1;
        }
    }
    return count;
};

console.log(countKDifference((nums = [1, 1, 1, 2, 2]), (k = 1)) === 6);
console.log(countKDifference((nums = [1, 2, 2, 1]), (k = 1)) === 4);
console.log(countKDifference((nums = [1, 3]), (k = 3)) === 0);
console.log(countKDifference((nums = [3, 2, 1, 5, 4]), (k = 2)) === 3);
console.log(countKDifference((nums = [1, 1, 1, 1, 4]), (k = 0)) === 1);
console.log(countKDifference((nums = [1, 3, 1, 5, 4]), (k = 0)) === 1);
console.log(countKDifference((nums = [3, 1, 4, 1, 5]), (k = 2)) === 2);
console.log(countKDifference((nums = [1, 2, 3, 4, 5]), (k = 1)) === 4);
