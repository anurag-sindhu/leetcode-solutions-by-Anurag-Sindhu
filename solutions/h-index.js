var hIndex = function (citations) {
    console.log(4 * Math.random());

    citations.sort((a, b) => a - b);
    let max = 0;
    let tempCount = 0;

    const bucketSort = (function (queries) {
        const maxNumber = Math.max(...queries);
        const arr = new Array(maxNumber);
        for (let index = 0; index < queries.length; index++) {
            if (arr[queries[index]] === undefined) {
                arr[queries[index]] = 0;
            }
            arr[queries[index]] += 1;
        }
        let sortedArray = [];
        for (let index = 0; index < arr.length; index++) {
            for (let indexTemp = 0; indexTemp < arr[index]; indexTemp++) {
                sortedArray.push(index);
            }
        }
        return sortedArray;
    })(citations);

    for (let index = bucketSort.length - 1; index >= 0; index--) {
        const element = bucketSort[index];
        console.log({ element });
        if (element >= tempCount + 1) {
            tempCount += 1;
            max = Math.max(max, tempCount);
        } else {
            break;
        }
    }
    return max;
};

console.log(hIndex([3, 0, 6, 1, 5]));
