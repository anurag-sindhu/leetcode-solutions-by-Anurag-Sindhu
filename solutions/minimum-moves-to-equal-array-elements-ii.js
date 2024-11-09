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

var minMoves2 = function (nums) {
    const bucketSorted = bucketSort(nums);
    let count = 0;
    if (bucketSorted.length % 2 === 0) {
        let ceilCount = 0;
        const ceilMedian = Math.ceil(
            (bucketSorted[parseInt(bucketSorted.length / 2)] +
                bucketSorted[parseInt(bucketSorted.length / 2)]) /
                2,
        );
        for (const iterator of bucketSorted) {
            count += Math.abs(iterator - ceilMedian);
        }
    } else {
        const median = bucketSorted[Math.floor(bucketSorted.length / 2)];
        for (const iterator of bucketSorted) {
            count += Math.abs(iterator - median);
        }
    }
    return count;
};

console.log(minMoves2((nums = [1, 2, 3])) == 2);
console.log(minMoves2([1, 10, 2, 9]) === 16);
