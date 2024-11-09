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

function doesSumExists(arr, S1, S2, S3, S4, fromIndex = 0) {
    if (S1 < 0 || S2 < 0 || S4 < 0 || S3 < 0) {
        return false;
    }
    if (S1 === 0 && S2 === 0 && S3 === 0 && S4 === 0) {
        return true;
    }
    for (let index = fromIndex; index < arr.length; index++) {
        const res =
            doesSumExists(arr, S1 - arr[index], S2, S3, S4, fromIndex + 1) ||
            doesSumExists(arr, S1, S2 - arr[index], S3, S4, fromIndex + 1) ||
            doesSumExists(arr, S1, S2, S3 - arr[index], S4, fromIndex + 1) ||
            doesSumExists(arr, S1, S2, S3, S4 - arr[index], fromIndex + 1);
        if (res === true) {
            return true;
        }
    }
    return false;
}

var makesquare = function (matchsticks) {
    let sum = 0;
    for (const iterator of matchsticks) {
        sum += iterator;
    }
    if (sum % 1 !== 0) {
        return false;
    }
    if (sum % 4 !== 0) {
        return false;
    }
    const oneSideOfTheSquare = sum / 4;
    const maxSide = Math.max(...matchsticks);
    if (maxSide > oneSideOfTheSquare) {
        return false;
    }
    const sorted = bucketSort(matchsticks);
    let res = doesSumExists(
        sorted,
        oneSideOfTheSquare,
        oneSideOfTheSquare,
        oneSideOfTheSquare,
        oneSideOfTheSquare,
    );
    if (res) {
        return true;
    }
    return false;
};

console.log(makesquare((matchsticks = [2, 2, 2, 2])) == true);
console.log(makesquare((matchsticks = [1, 1, 2, 2, 2])) == true);
console.log(makesquare((matchsticks = [3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 16])) == false);
console.log(
    makesquare((matchsticks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])) == true,
);
console.log(makesquare((matchsticks = [1, 1, 2, 2, 2])) == true);
console.log(makesquare((matchsticks = [5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3])) == true);
console.log(makesquare((matchsticks = [3, 3, 3, 3, 4])) == false);
