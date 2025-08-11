var minZeroArray = function (nums, queries) {
    queries.sort((a, b) => {
        if (a[0] == b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    const startArray = [];
    const endArray = [];
    for (let index = 0; index < queries.length; index++) {
        const [fromIndex, toIndex, value] = queries[index];
        if (startArray[fromIndex] == undefined) {
            startArray[fromIndex] = 0;
        }
        startArray[fromIndex] += value;
        if (endArray[toIndex] == undefined) {
            endArray[toIndex] = 0;
        }
        endArray[toIndex] += value;
    }
    let totalStartAtZeroIndex = 0;
    for (let index = 0; index < nums.length; index++) {
        totalStartAtZeroIndex += startArray[index] == undefined ? 0 : startArray[index];
        nums[index] = totalStartAtZeroIndex;
        if (nums[index] - totalStartAtZeroIndex == 0) {
        } else if {
        }
        totalStartAtZeroIndex -= endArray[index] == undefined ? 0 : endArray[index];
    }
    return true;
};

console.log(
    minZeroArray(
        (nums = [2, 0, 2]),
        (queries = [
            [0, 2, 1],
            [0, 2, 1],
            [1, 1, 3],
        ]),
    ) == false,
);

console.log(
    minZeroArray(
        (nums = [4, 3, 2, 1]),
        (queries = [
            [1, 3, 2],
            [0, 2, 1],
        ]),
    ) == true,
);
