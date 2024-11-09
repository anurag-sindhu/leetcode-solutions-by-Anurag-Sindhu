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

var countPairs = function (nums, k) {
    let count = 0;
    const sortedNum = bucketSort(nums);
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    while (leftPointer < rightPointer) {
        let leftNum = Number(sortedNum[leftPointer]);
        let rightNum = Number(sortedNum[rightPointer]);
        let sum = rightNum + leftNum;
        if (sum >= k) {
            rightPointer -= 1;
            continue;
        }
        count += rightPointer - leftPointer;
        leftPointer += 1;
    }
    return count;
};

console.log(countPairs((nums = [-1, 1, 2, 3, 1]), (k = 2)) === 3);
console.log(countPairs((nums = [-6, 2, 5, -2, -7, -1, 3]), (target = -2)) === 10);
