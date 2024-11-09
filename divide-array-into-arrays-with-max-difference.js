var divideArray = function (queries, k) {
    const bucketSort = queries.sort((a, b) => a- b);
    let output = [];
    let tempArr = [];
    for (let index = 0; index < bucketSort.length; index++) {
        if (tempArr.length === 0) {
            tempArr.push(bucketSort[index]);
        } else if (tempArr.length === 1) {
            if (!(bucketSort[index] - tempArr[0] <= k)) {
                return [];
            }
            tempArr.push(bucketSort[index]);
        } else if (tempArr.length === 2) {
            if (!(bucketSort[index] - tempArr[0] <= k)) {
                return [];
            }
            tempArr.push(bucketSort[index]);
            output.push(tempArr);
            tempArr = [];
        }
    }
    return output;
};
/**
 * [[2,2,2],[4,5,5],[5,5,7],[7,8,8],[9,9,10],[11,12,12]]
 */
console.log(
    divideArray((nums = [4, 2, 9, 8, 2, 12, 7, 12, 10, 5, 8, 5, 5, 7, 9, 2, 5, 11]), (k = 14)),
);

console.log(divideArray((nums = [1, 3, 4, 8, 7, 9, 3, 5, 1]), (k = 2)));
console.log(divideArray((nums = [2, 4, 2, 2, 5, 2]), (k = 2)));
