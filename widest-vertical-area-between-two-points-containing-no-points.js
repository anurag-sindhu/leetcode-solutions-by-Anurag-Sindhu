var maxWidthOfVerticalArea = function (points) {
    points.sort((a, b) => a[0] - b[0]);
    let maxGap = -Infinity;
    let lastStart = null;
    for (let index = 0; index < points.length; index++) {
        if (lastStart === null) {
            lastStart = points[index][0];
        } else {
            maxGap = Math.max(maxGap, points[index][0] - lastStart);
            lastStart = points[index][0];
        }
    }
    return maxGap;
};

console.log(
    maxWidthOfVerticalArea(
        (points = [
            [8, 7],
            [9, 9],
            [7, 4],
            [9, 7],
        ]),
    ),
);
console.log(
    maxWidthOfVerticalArea(
        (points = [
            [3, 1],
            [9, 0],
            [1, 0],
            [1, 4],
            [5, 3],
            [8, 8],
        ]),
    ),
);
