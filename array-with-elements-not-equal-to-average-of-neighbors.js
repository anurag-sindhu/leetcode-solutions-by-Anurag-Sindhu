var rearrangeArray = function (nums) {
    const newArray = [];
    const bucketSort = (function (queries) {
        const maxNumber = Math.max(...queries);
        const arr = new Array(maxNumber);
        for (let index = 0; index < queries.length; index++) {
            arr[queries[index]] = true;
        }
        let sortedArray = [];
        for (let index = 0; index < arr.length; index++) {
            if (arr[index]) {
                sortedArray.push(index);
            }
        }
        return sortedArray;
    })(nums);

    for (let index = 0; index < bucketSort.length / 2; index++) {
        if (index === parseInt(bucketSort.length / 2)) {
            newArray.push(bucketSort[index]);
        } else {
            newArray.push(bucketSort[index]);
            newArray.push(bucketSort[bucketSort.length - 1 - index]);
        }
    }
    return newArray;
};

console.log(rearrangeArray((nums = [1, 4, 5, 2, 3])));
console.log(rearrangeArray((nums = [6, 2, 0, 9, 7])));
console.log(rearrangeArray((nums = [1, 5, 2, 6, 3, 7, 4, 8])));
console.log(rearrangeArray((nums = [6, 2, 0, 9, 7])));
