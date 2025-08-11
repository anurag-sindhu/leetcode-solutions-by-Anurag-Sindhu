var isZeroArray = function (nums, queries) {
    queries.sort((a, b) => {
        if (a[0] == b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    const startArray = [];
    const endArray = [];
    for (let index = 0; index < queries.length; index++) {
        const [fromIndex, toIndex] = queries[index];
        if (startArray[fromIndex] == undefined) {
            startArray[fromIndex] = 0;
        }
        startArray[fromIndex] += 1;
        if (endArray[toIndex] == undefined) {
            endArray[toIndex] = 0;
        }
        endArray[toIndex] += 1;
    }
    let totalStartAtZeroIndex = 0;
    for (let index = 0; index < nums.length; index++) {
        totalStartAtZeroIndex += startArray[index] == undefined ? 0 : startArray[index];
        if (nums[index] > totalStartAtZeroIndex) {
            return false;
        }
        totalStartAtZeroIndex -= endArray[index] == undefined ? 0 : endArray[index];
    }
    return true;
};

console.log(
    isZeroArray(
        (nums = [3, 7]),
        (queries = [
            [0, 0],
            [0, 1],
            [0, 1],
            [1, 1],
            [1, 1],
        ]),
    ) == false,
);

console.log(isZeroArray((nums = [1, 0, 1]), (queries = [[0, 2]])) == true);
console.log(
    isZeroArray(
        (nums = [4, 3, 2, 1]),
        (queries = [
            [1, 3],
            [0, 2],
        ]),
    ) == false,
);

console.log(
    isZeroArray(
        (nums = [3, 4, 6, 8, 3]),
        (queries = [
            [0, 2],
            [1, 3],
        ]),
    ) == false,
);
console.log(isZeroArray((nums = [1, 0, 1]), (queries = [[0, 1]])) == false);
console.log(
    isZeroArray(
        (nums = [4, 3, 2, 1]),
        (queries = [
            [1, 3],
            [0, 3],
            [0, 4],
            [0, 2],
        ]),
    ) == false,
);

console.log(isZeroArray((nums = [7]), (queries = [[0, 0]])) == false);
