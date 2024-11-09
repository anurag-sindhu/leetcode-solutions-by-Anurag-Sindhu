const bucketSort = function (arr) {
    const arr1 = new Array(100000);
    for (let index = 0; index < arr.length; index++) {
        arr1[arr[index][1]] = index;
    }
    const output = [];
    for (const iterator of arr1) {
        if (iterator !== undefined) output.push(arr[iterator]);
    }
    return output;
};

var findMinArrowShots = function (points) {
    const arr = bucketSort(points); //[[1,6],[2,8],[7,12],[10,16]]
    let count = 0;
    let lastBallonBurstAtIndex = null;
    for (let index = 0; index < arr.length; index++) {
        const [from, to] = arr[index];
        if (lastBallonBurstAtIndex === null) {
            lastBallonBurstAtIndex = to;
            count++;
        } else {
            if (from <= lastBallonBurstAtIndex || lastBallonBurstAtIndex >= to) {
                continue;
            } else {
                lastBallonBurstAtIndex = to;
                count++;
            }
        }
    }
    return count;
};

console.log(
    findMinArrowShots(
        (points = [
            [10, 16],
            [2, 8],
            [1, 6],
            [7, 12],
        ]),
    ) === 2,
);
console.log(
    findMinArrowShots(
        (points = [
            [1, 2],
            [3, 4],
            [5, 6],
            [7, 8],
        ]),
    ) === 4,
);
console.log(
    findMinArrowShots(
        (points = [
            [1, 2],
            [2, 3],
            [3, 4],
            [4, 5],
        ]),
    ) === 2,
);
