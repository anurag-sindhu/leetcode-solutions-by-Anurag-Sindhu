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
})(nums);
